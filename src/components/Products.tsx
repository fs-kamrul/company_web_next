"use client";

import Link from 'next/link';

export default function Products() {
    return (
        <section id="products" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">
                        Our <span className="text-gradient-primary">Products</span>
                    </h2>
                    <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                        Discover our flagship products designed to streamline operations and drive growth
                    </p>
                </div>

                <div className="row g-4">
                    {/* School Management System */}
                    <div className="col-lg-6">
                        <div className="product-card h-100">
                            <div className="icon-box">
                                <i className="ri-school-line"></i>
                            </div>

                            <h3 className="mb-3">School Management System</h3>
                            <p className="mb-4" style={{ color: 'var(--text-gray)' }}>
                                A comprehensive solution designed to revolutionize educational institution management.
                                Streamline administration, enhance communication, and improve student outcomes.
                            </p>

                            <h5 className="mb-3 text-gradient-accent">Key Features</h5>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Student Management</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Complete student profiles, attendance tracking, and performance monitoring
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Grade Management</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Automated grading, report cards, and analytics
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Fee Management</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Integrated payment processing and financial reporting
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Parent Portal</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Real-time updates and communication with parents
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Timetable & Scheduling</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Automated scheduling and resource allocation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Analytics & Reports</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Comprehensive insights and data-driven decisions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-2 flex-wrap mb-4">
                                <span className="badge bg-primary-custom px-3 py-2">
                                    <i className="ri-smartphone-line me-1"></i> Mobile Responsive
                                </span>
                                <span className="badge bg-primary-custom px-3 py-2">
                                    <i className="ri-cloud-line me-1"></i> Cloud-Based
                                </span>
                                <span className="badge bg-primary-custom px-3 py-2">
                                    <i className="ri-shield-check-line me-1"></i> Secure
                                </span>
                            </div>

                            <Link href="/products/school-management" className="btn btn-primary-custom w-100">
                                <i className="ri-arrow-right-line me-2"></i>
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Laravel Dynamic Website */}
                    <div className="col-lg-6">
                        <div className="product-card h-100">
                            <div className="icon-box">
                                <i className="ri-layout-5-line"></i>
                            </div>

                            <h3 className="mb-3">Laravel Dynamic Website</h3>
                            <p className="mb-4" style={{ color: 'var(--text-gray)' }}>
                                Build powerful, scalable, and feature-rich websites with our Laravel-based dynamic platform.
                                Perfect for businesses looking for custom web solutions that grow with their needs.
                            </p>

                            <h5 className="mb-3 text-gradient-accent">Key Features</h5>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>CMS Integration</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Easy content management without technical knowledge
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>E-Commerce Ready</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Built-in shopping cart and payment gateway integration
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>SEO Optimized</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Built-in SEO tools to boost your online visibility
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Multi-Language Support</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Reach global audiences with localization features
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>API Integration</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Connect with third-party services seamlessly
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="ri-checkbox-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>Performance Optimized</strong>
                                            <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>
                                                Fast loading times and efficient resource usage
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-2 flex-wrap mb-4">
                                <span className="badge bg-primary-custom px-3 py-2">
                                    <i className="ri-code-s-slash-line me-1"></i> Laravel Framework
                                </span>
                                <span className="badge bg-primary-custom px-3 py-2">
                                    <i className="ri-palette-line me-1"></i> Customizable
                                </span>
                                <span className="badge bg-primary-custom px-3 py-2">
                                    <i className="ri-rocket-line me-1"></i> Fast & Scalable
                                </span>
                            </div>

                            <Link href="/products/laravel-website" className="btn btn-primary-custom w-100">
                                <i className="ri-arrow-right-line me-2"></i>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
