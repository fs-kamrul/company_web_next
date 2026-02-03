import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import mailConfig from '@/data/mail-config.json';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface StoredMessage extends ContactFormData {
    timestamp: string;
    id: string;
}

export async function POST(request: NextRequest) {
    try {
        const formData: ContactFormData = await request.json();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create message object
        const messageData: StoredMessage = {
            ...formData,
            timestamp: new Date().toISOString(),
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        };

        // Store message to JSON file
        const messagesFilePath = path.join(process.cwd(), 'src/data/messages.json');
        let messagesData = { messages: [] as StoredMessage[] };

        try {
            const fileContent = fs.readFileSync(messagesFilePath, 'utf-8');
            messagesData = JSON.parse(fileContent);
        } catch (error) {
            // File doesn't exist or is empty, use default
            console.log('Creating new messages file');
        }

        messagesData.messages.push(messageData);
        fs.writeFileSync(messagesFilePath, JSON.stringify(messagesData, null, 4));

        // Send email
        try {
            const transporter = nodemailer.createTransport({
                host: mailConfig.smtp.host,
                port: mailConfig.smtp.port,
                secure: mailConfig.smtp.secure,
                auth: {
                    user: mailConfig.smtp.auth.user,
                    pass: mailConfig.smtp.auth.pass,
                },
            });

            const emailSubject = mailConfig.emailTemplate.subject.replace('{subject}', formData.subject);

            const mailOptions = {
                from: `"${mailConfig.from.name}" <${mailConfig.from.email}>`,
                to: mailConfig.recipient,
                replyTo: formData.email,
                subject: emailSubject,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                            New Contact Form Submission
                        </h2>
                        
                        <div style="background-color: #f9fafb; padding: 20px; margin: 20px 0; border-radius: 8px;">
                            <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
                            <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
                            <p style="margin: 10px 0;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                            <p style="margin: 10px 0;"><strong>Subject:</strong> ${formData.subject}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #333;">Message:</h3>
                            <p style="line-height: 1.6; color: #555;">${formData.message}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                            <p>This message was sent from the company website contact form.</p>
                            <p>Timestamp: ${new Date(messageData.timestamp).toLocaleString()}</p>
                        </div>
                    </div>
                `,
                text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from company website contact form
Timestamp: ${new Date(messageData.timestamp).toLocaleString()}
                `
            };

            await transporter.sendMail(mailOptions);

            return NextResponse.json({
                success: true,
                message: 'Message sent successfully!',
                messageId: messageData.id
            });

        } catch (emailError: any) {
            console.error('Email sending error:', emailError);

            // Message was stored but email failed
            // message: 'Message saved successfully, but email sending failed. We will contact you soon.',
            return NextResponse.json({
                success: true,
                message: 'Email sending failed. We will contact you soon.',
                warning: 'Email not sent',
                messageId: messageData.id
            });
        }

    } catch (error: any) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to process your request. Please try again.' },
            { status: 500 }
        );
    }
}
