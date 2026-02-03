"use client";


import contactInfo from '@/data/contact.json';

export default function Contact() {
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
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="name"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="email"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <select className="form-select bg-dark-lighter border-0 text-white" id="subject">
                                        <option>Select a product</option>
                                        <option>School Management System</option>
                                        <option>Laravel Dynamic Website</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control bg-dark-lighter border-0 text-white"
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary-custom w-100">
                                    <i className="ri-send-plane-fill me-2"></i>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
