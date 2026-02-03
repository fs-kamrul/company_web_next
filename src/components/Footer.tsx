"use client";


import contactInfo from '@/data/contact.json';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-5" style={{ background: 'var(--dark-card)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-3">
                            <i className="ri-code-s-slash-line me-2"></i>
                            <span className="text-gradient-primary">kTech</span>Solutions
                        </h5>
                        <p style={{ color: 'var(--text-gray)' }}>
                            Empowering education and business with innovative technology solutions.
                            Your trusted partner in digital transformation.
                        </p>
                        <div className="d-flex gap-2 mt-3">
                            <a href={contactInfo.social.facebook} className="btn btn-sm btn-outline-custom">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href={contactInfo.social.twitter} className="btn btn-sm btn-outline-custom">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href={contactInfo.social.linkedin} className="btn btn-sm btn-outline-custom">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                            <a href={contactInfo.social.github} className="btn btn-sm btn-outline-custom">
                                <i className="ri-github-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/" style={{ color: 'var(--text-gray)' }}>Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/products/school-management" style={{ color: 'var(--text-gray)' }}>School System</a>
                            </li>
                            <li className="mb-2">
                                <a href="/products/laravel-website" style={{ color: 'var(--text-gray)' }}>Laravel Website</a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" style={{ color: 'var(--text-gray)' }}>Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Our Products</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="ri-school-line me-2" style={{ color: 'var(--primary-color)' }}></i>
                                <span style={{ color: 'var(--text-gray)' }}>School Management System</span>
                            </li>
                            <li className="mb-2">
                                <i className="ri-layout-5-line me-2" style={{ color: 'var(--primary-color)' }}></i>
                                <span style={{ color: 'var(--text-gray)' }}>Laravel Dynamic Website</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="ri-mail-line me-2" style={{ color: 'var(--primary-color)' }}></i>
                                <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--text-gray)' }}>
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li className="mb-2">
                                <i className="ri-phone-line me-2" style={{ color: 'var(--primary-color)' }}></i>
                                <a href={`tel:${contactInfo.phone}`} style={{ color: 'var(--text-gray)' }}>
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li className="mb-2">
                                <i className="ri-map-pin-line me-2" style={{ color: 'var(--primary-color)' }}></i>
                                <span style={{ color: 'var(--text-gray)' }}>{contactInfo.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0" style={{ color: 'var(--text-gray)' }} suppressHydrationWarning>
                            &copy; {currentYear} kTech Solutions. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                        <a href="/privacy-policy" className="me-3" style={{ color: 'var(--text-gray)' }}>Privacy Policy</a>
                        <a href="/terms-of-service" className="me-3" style={{ color: 'var(--text-gray)' }}>Terms of Service</a>
                        <a href="/contact" style={{ color: 'var(--text-gray)' }}>Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
