"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import contactInfo from '@/data/contact.json';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

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
                // Scroll to notification
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setNotification({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            setNotification({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="min-vh-50 d-flex align-items-center position-relative" style={{ background: 'var(--gradient-hero)', paddingTop: '100px', paddingBottom: '80px' }}>
                    <div className="container">
                        <div className="text-center">
                            <h1 className="display-3 fw-bold mb-4">
                                Get in <span className="text-gradient-primary">Touch</span>
                            </h1>
                            <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                Have a question or want to discuss your project? We'd love to hear from you!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-5">
                    <div className="container">
                        <div className="row g-5">
                            {/* Contact Information */}
                            <div className="col-lg-5">
                                <h2 className="mb-4">Contact Information</h2>
                                <p className="mb-4" style={{ color: 'var(--text-gray)' }}>
                                    Ready to transform your institution or business with our innovative solutions?
                                    Reach out to us through any of the following channels.
                                </p>

                                <div className="mb-4">
                                    <div className="feature-card mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                                <i className="ri-mail-line"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-2">Email Us</h5>
                                                <p className="mb-1" style={{ color: 'var(--text-gray)' }}>
                                                    <a href={`mailto:${contactInfo.email}`} className="text-decoration-none" style={{ color: 'var(--primary-light)' }}>
                                                        {contactInfo.email}
                                                    </a>
                                                </p>
                                                <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                    We reply within 24 hours
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feature-card mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                                <i className="ri-phone-line"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-2">Call Us</h5>
                                                <p className="mb-1" style={{ color: 'var(--text-gray)' }}>
                                                    <a href={`tel:${contactInfo.phone}`} className="text-decoration-none" style={{ color: 'var(--primary-light)' }}>
                                                        {contactInfo.phone}
                                                    </a>
                                                </p>
                                                <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                    Mon-Fri from 9am to 6pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feature-card mb-3">
                                        <div className="d-flex align-items-start">
                                            <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                                <i className="ri-map-pin-line"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-2">Visit Us</h5>
                                                <p className="mb-1" style={{ color: 'var(--text-gray)' }}>
                                                    {contactInfo.address}
                                                </p>
                                                <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                    Office hours: 9am - 6pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <div className="d-flex align-items-start">
                                            <div className="icon-box me-3" style={{ width: '48px', height: '48px', fontSize: '1.5rem' }}>
                                                <i className="ri-customer-service-2-line"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-2">Live Chat</h5>
                                                <p className="mb-1" style={{ color: 'var(--text-gray)' }}>
                                                    Chat with our support team
                                                </p>
                                                <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                    Available 24/7
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h5 className="mb-3">Follow Us</h5>
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
                                        <a href={contactInfo.social.instagram} className="btn btn-outline-custom">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-lg-7">
                                {notification && (
                                    <div className={`alert ${notification.type === 'success' ? 'alert-success' : 'alert-danger'} d-flex align-items-center mb-4`} role="alert">
                                        <i className={`${notification.type === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'} me-2`} style={{ fontSize: '1.5rem' }}></i>
                                        <div>{notification.message}</div>
                                    </div>
                                )}

                                <div className="glass-card p-4 p-md-5">
                                    <h2 className="mb-4">Send Us a Message</h2>
                                    <p className="mb-4" style={{ color: 'var(--text-gray)' }}>
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="name" className="form-label">Your Name *</label>
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
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">Email Address *</label>
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
                                            <div className="col-md-12">
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
                                            <div className="col-md-12">
                                                <label htmlFor="subject" className="form-label">Subject *</label>
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
                                            <div className="col-md-12">
                                                <label htmlFor="message" className="form-label">Message *</label>
                                                <textarea
                                                    className="form-control bg-dark-lighter border-0 text-white"
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={6}
                                                    placeholder="Tell us about your project or inquiry..."
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-primary-custom btn-lg w-100" disabled={isSubmitting}>
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
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-5" style={{ background: 'var(--dark-card)' }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold mb-3">
                                Frequently Asked <span className="text-gradient-primary">Questions</span>
                            </h2>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="feature-card">
                                    <h5 className="mb-3">
                                        <i className="ri-question-line text-primary me-2"></i>
                                        What services do you offer?
                                    </h5>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        We specialize in School Management Systems and Laravel-based dynamic websites.
                                        We also provide custom software development, consulting, and support services.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feature-card">
                                    <h5 className="mb-3">
                                        <i className="ri-question-line text-primary me-2"></i>
                                        How long does implementation take?
                                    </h5>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        Implementation time varies based on your requirements. Typically, our School Management
                                        System takes 4-6 weeks, while custom websites take 2-4 weeks from start to deployment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feature-card">
                                    <h5 className="mb-3">
                                        <i className="ri-question-line text-primary me-2"></i>
                                        Do you provide training and support?
                                    </h5>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        Yes! We provide comprehensive training for your team and offer 24/7 technical support
                                        to ensure smooth operations and quick resolution of any issues.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feature-card">
                                    <h5 className="mb-3">
                                        <i className="ri-question-line text-primary me-2"></i>
                                        Can I customize the solutions?
                                    </h5>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        Absolutely! All our solutions are fully customizable to meet your specific needs.
                                        We work closely with you to ensure the final product aligns perfectly with your requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
