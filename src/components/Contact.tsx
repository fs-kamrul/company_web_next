"use client";

import { useState } from 'react';
import contactInfo from '@/data/contact.json';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setNotification(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setNotification({ type: 'success', message: data.message || 'Message sent successfully!' });
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setNotification({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            setNotification({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-5">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <h2 className="display-4 fw-bold mb-4">
                            Let's Build Something <span className="text-gradient-primary">Amazing</span> Together
                        </h2>
                        <p className="lead mb-4" style={{ color: 'var(--text-gray)' }}>
                            Ready to transform your institution or business with our innovative solutions?
                            Get in touch with us today and let's discuss how we can help you achieve your goals.
                        </p>

                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-3">
                                <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                    <i className="ri-mail-line"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Email Us</h5>
                                    <p className="mb-0" style={{ color: 'var(--text-gray)' }}>
                                        <a href={`mailto:${contactInfo.email}`} className="text-decoration-none" style={{ color: 'var(--primary-light)' }}>
                                            {contactInfo.email}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-3">
                                <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                    <i className="ri-phone-line"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Call Us</h5>
                                    <p className="mb-0" style={{ color: 'var(--text-gray)' }}>
                                        <a href={`tel:${contactInfo.phone}`} className="text-decoration-none" style={{ color: 'var(--primary-light)' }}>
                                            {contactInfo.phone}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start">
                                <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                    <i className="ri-map-pin-line"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Visit Us</h5>
                                    <p className="mb-0" style={{ color: 'var(--text-gray)' }}>
                                        {contactInfo.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-3">
                            <a href={contactInfo.social.facebook} className="btn btn-outline-custom">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href={contactInfo.social.twitter} className="btn btn-outline-custom">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href={contactInfo.social.linkedin} className="btn btn-outline-custom">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                            <a href={contactInfo.social.github} className="btn btn-outline-custom">
                                <i className="ri-github-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="glass-card p-4 p-md-5">
                            <h3 className="mb-4">Send Us a Message</h3>

                            {notification && (
                                <div className={`alert ${notification.type === 'success' ? 'alert-success' : 'alert-danger'} d-flex align-items-center mb-4`} role="alert">
                                    <i className={`${notification.type === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'} me-2`} style={{ fontSize: '1.5rem' }}></i>
                                    <div>{notification.message}</div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (234) 567-890"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <select
                                        className="form-select bg-dark-lighter border-0 text-white"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        {contactInfo.messageSubjects.map((subject, index) => (
                                            <option key={index} value={subject.value}>
                                                {subject.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary-custom w-100" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <i className="ri-send-plane-fill me-2"></i>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
