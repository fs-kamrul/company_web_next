"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LaravelWebsite() {
    const features = [
        {
            icon: "ri-code-box-line",
            title: "Laravel Framework",
            description: "Built on the robust Laravel framework, ensuring clean code, security, and scalability for your business."
        },
        {
            icon: "ri-layout-grid-line",
            title: "Custom CMS",
            description: "User-friendly content management system tailored to your needs. Update content without technical knowledge."
        },
        {
            icon: "ri-shopping-cart-line",
            title: "E-Commerce Integration",
            description: "Full-featured online store with product management, shopping cart, and multiple payment gateway integration."
        },
        {
            icon: "ri-seo-line",
            title: "SEO Optimized",
            description: "Built-in SEO best practices, meta tag management, sitemap generation, and analytics integration."
        },
        {
            icon: "ri-smartphone-line",
            title: "Responsive Design",
            description: "Fully responsive layouts that look perfect on all devices - desktop, tablet, and mobile."
        },
        {
            icon: "ri-global-line",
            title: "Multi-Language",
            description: "Support for multiple languages and currencies to reach global audiences effectively."
        },
        {
            icon: "ri-shield-keyhole-line",
            title: "Advanced Security",
            description: "Built-in protection against SQL injection, XSS, CSRF attacks, and encrypted data transmission."
        },
        {
            icon: "ri-database-2-line",
            title: "Database Management",
            description: "Efficient database architecture with migration support and backup systems."
        },
        {
            icon: "ri-user-settings-line",
            title: "User Management",
            description: "Complete user authentication, role-based access control, and permission management."
        },
        {
            icon: "ri-plug-line",
            title: "API Integration",
            description: "RESTful API support for integrating third-party services and mobile applications."
        },
        {
            icon: "ri-mail-line",
            title: "Email System",
            description: "Automated email notifications, newsletters, and transactional email capabilities."
        },
        {
            icon: "ri-dashboard-line",
            title: "Admin Dashboard",
            description: "Powerful admin panel for managing all aspects of your website with analytics and reports."
        }
    ];

    const useCases = [
        {
            icon: "ri-store-2-line",
            title: "E-Commerce Stores",
            description: "Build feature-rich online stores with inventory management"
        },
        {
            icon: "ri-article-line",
            title: "Corporate Websites",
            description: "Professional business websites with CMS capabilities"
        },
        {
            icon: "ri-community-line",
            title: "Community Portals",
            description: "Interactive platforms with user profiles and forums"
        },
        {
            icon: " ri-calendar-event-line",
            title: "Booking Systems",
            description: "Appointment and reservation management systems"
        },
        {
            icon: "ri-newspaper-line",
            title: "News Portals",
            description: "Dynamic news and media publishing platforms"
        },
        {
            icon: "ri-building-line",
            title: "Real Estate",
            description: "Property listing and management websites"
        }
    ];

    return (
        <>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="min-vh-100 d-flex align-items-center position-relative" style={{ background: 'var(--gradient-hero)', paddingTop: '100px' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="mb-3">
                                    <span className="badge bg-primary-custom px-3 py-2">
                                        <i className="ri-code-s-slash-line me-2"></i>Web Development
                                    </span>
                                </div>
                                <h1 className="display-3 fw-bold mb-4">
                                    Laravel Dynamic <span className="text-gradient-primary">Website</span>
                                </h1>
                                <p className="lead mb-4" style={{ color: 'var(--text-gray)' }}>
                                    Build powerful, scalable, and feature-rich websites with our Laravel-based dynamic platform.
                                    Perfect for businesses looking for custom web solutions that grow with their needs.
                                </p>
                                <div className="d-flex gap-3 flex-wrap mb-4">
                                    <a href="#features" className="btn btn-primary-custom btn-lg">
                                        <i className="ri-eye-line me-2"></i>Explore Features
                                    </a>
                                    <a href="#portfolio" className="btn btn-outline-custom btn-lg">
                                        <i className="ri-gallery-line me-2"></i>View Portfolio
                                    </a>
                                </div>
                                <div className="d-flex gap-4 flex-wrap">
                                    <div>
                                        <i className="ri-checkbox-circle-fill text-success me-2"></i>
                                        <span style={{ color: 'var(--text-gray)' }}>SEO Ready</span>
                                    </div>
                                    <div>
                                        <i className="ri-checkbox-circle-fill text-success me-2"></i>
                                        <span style={{ color: 'var(--text-gray)' }}>Fast Performance</span>
                                    </div>
                                    <div>
                                        <i className="ri-checkbox-circle-fill text-success me-2"></i>
                                        <span style={{ color: 'var(--text-gray)' }}>Customizable</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="glass-card p-4">
                                    <div className="bg-dark-lighter rounded-3 p-5 text-center">
                                        <i className="ri-layout-5-line" style={{ fontSize: '10rem', color: 'var(--primary-color)', opacity: 0.8 }}></i>
                                        <h4 className="mt-4 mb-2">Professional Web Solutions</h4>
                                        <p style={{ color: 'var(--text-gray)' }}>Custom-built for your business success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-4 fw-bold mb-3">
                                Comprehensive <span className="text-gradient-primary">Features</span>
                            </h2>
                            <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                Everything you need for a modern, professional website
                            </p>
                        </div>

                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="feature-card">
                                        <div className="icon-box">
                                            <i className={feature.icon}></i>
                                        </div>
                                        <h4 className="mb-3">{feature.title}</h4>
                                        <p style={{ color: 'var(--text-gray)' }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="py-5" style={{ background: 'var(--dark-card)' }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold mb-3">
                                Perfect For <span className="text-gradient-accent">Any Business</span>
                            </h2>
                            <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                Our Laravel websites are versatile and can be customized for various industries
                            </p>
                        </div>

                        <div className="row g-4">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="glass-card p-4 text-center h-100">
                                        <i className={useCase.icon} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
                                        <h4 className="my-3">{useCase.title}</h4>
                                        <p style={{ color: 'var(--text-gray)' }}>
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold mb-3">
                                Built With <span className="text-gradient-primary">Modern Technology</span>
                            </h2>
                            <p style={{ color: 'var(--text-gray)' }}>
                                We use industry-leading technologies to deliver exceptional results
                            </p>
                        </div>

                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="feature-card text-center">
                                    <i className="ri-code-s-slash-line" style={{ fontSize: '4rem', color: '#FF2D20' }}></i>
                                    <h5 className="mt-3">Laravel 10</h5>
                                    <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>PHP Framework</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="feature-card text-center">
                                    <i className="ri-database-2-line" style={{ fontSize: '4rem', color: '#4479A1' }}></i>
                                    <h5 className="mt-3">MySQL</h5>
                                    <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>Database</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="feature-card text-center">
                                    <i className="ri-bootstrap-line" style={{ fontSize: '4rem', color: '#7952B3' }}></i>
                                    <h5 className="mt-3">Bootstrap 5</h5>
                                    <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>CSS Framework</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="feature-card text-center">
                                    <i className="ri-html5-line" style={{ fontSize: '4rem', color: '#E34F26' }}></i>
                                    <h5 className="mt-3">HTML5/CSS3</h5>
                                    <p className="mb-0 small" style={{ color: 'var(--text-gray)' }}>Modern Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="portfolio" className="py-5" style={{ background: 'var(--dark-card)' }}>
                    <div className="container">
                        <div className="glass-card p-5 text-center">
                            <h2 className="display-5 fw-bold mb-4">
                                Ready to Build Your <span className="text-gradient-primary">Dream Website</span>?
                            </h2>
                            <p className="lead mb-4" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                Let's discuss your project and create a custom web solution that exceeds your expectations.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <Link href="/contact" className="btn btn-primary-custom btn-lg">
                                    <i className="ri-message-3-line me-2"></i>Start Your Project
                                </Link>
                                <Link href="/" className="btn btn-outline-custom btn-lg">
                                    <i className="ri-home-line me-2"></i>Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
