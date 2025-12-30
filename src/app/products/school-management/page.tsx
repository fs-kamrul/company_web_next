"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SchoolManagement() {
    const features = [
        {
            icon: "ri-user-3-line",
            title: "Student Management",
            description: "Comprehensive student profiles with admission records, personal information, academic history, and attendance tracking all in one place."
        },
        {
            icon: "ri-user-star-line",
            title: "Teacher Management",
            description: "Manage teacher profiles, schedules, performance evaluations, and payroll efficiently with our intuitive system."
        },
        {
            icon: "ri-calendar-check-line",
            title: "Attendance System",
            description: "Automated attendance tracking with real-time updates, reports, and notifications to parents."
        },
        {
            icon: "ri-file-list-3-line",
            title: "Student Result Management",
            description: "Digital result cards, mark sheets, grade calculation, and comprehensive academic performance tracking with graphical analytics."
        },
        {
            icon: "ri-award-line",
            title: "Testimonial & Certificates",
            description: "Generate and manage school testimonials, character certificates, bonafide certificates, and transfer certificates instantly."
        },
        {
            icon: "ri-id-card-line",
            title: "Admit Card Generation",
            description: "Automated admit card/hall ticket generation for examinations with student photos, exam schedules, and barcodes for verification."
        },
        {
            icon: "ri-money-dollar-circle-line",
            title: "Fee Management",
            description: "Integrated fee collection, payment tracking, invoice generation, online payment gateway, and financial reporting system."
        },
        {
            icon: "ri-calendar-line",
            title: "Timetable Management",
            description: "Create and manage class schedules, exam timetables, and resource allocation with conflict detection."
        },
        {
            icon: "ri-parent-line",
            title: "Parent Portal",
            description: "Real-time access for parents to view student progress, attendance, fees, and communicate with teachers."
        },
        {
            icon: "ri-book-open-line",
            title: "Library Management",
            description: "Complete library system with book cataloging, issue/return tracking, and fine management."
        },
        {
            icon: "ri-bus-line",
            title: "Transport Management",
            description: "Manage school transportation with route planning, vehicle tracking, GPS integration, and student allocation."
        },
        {
            icon: "ri-mail-send-line",
            title: "Communication Hub",
            description: "Send announcements, SMS notifications, emails, and messages to students, parents, and staff instantly."
        },
        {
            icon: "ri-file-text-line",
            title: "Examination Management",
            description: "Schedule exams, generate hall tickets, manage seating arrangements, and publish results seamlessly."
        },
        {
            icon: "ri-bar-chart-box-line",
            title: "Analytics & Reports",
            description: "Comprehensive reports and analytics for data-driven decision making and performance insights."
        },
        {
            icon: "ri-hospital-line",
            title: "Health & Medical Records",
            description: "Maintain student health records, vaccination details, medical history, and emergency contact information."
        },
        {
            icon: "ri-user-add-line",
            title: "Online Admission",
            description: "Streamlined online admission process with form submission, document upload, and fee payment integration."
        }
    ];

    const benefits = [
        "Reduce administrative workload by 70%",
        "Improve parent-teacher communication",
        "Eliminate paperwork and manual processes",
        "Real-time data access from anywhere",
        "Enhanced security and data privacy",
        "Scalable for institutions of any size"
    ];

    const screenshots = [
        {
            image: "/images/system-overview.png",
            title: "System Overview Dashboard",
            description: "Complete administrative dashboard with real-time statistics and quick actions"
        },
        {
            image: "/images/student-result.png",
            title: "Student Result Management",
            description: "Digital mark sheets with grades, subject-wise performance tracking"
        },
        {
            image: "/images/admit-card.png",
            title: "Admit Card Generation",
            description: "Professional admit cards with student details, exam schedule, and barcode"
        },
        {
            image: "/images/testimonial.png",
            title: "Testimonial Management",
            description: "Generate and manage school testimonials and certificates"
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
                                        <i className="ri-school-line me-2"></i>Education Technology
                                    </span>
                                </div>
                                <h1 className="display-3 fw-bold mb-4">
                                    School Management <span className="text-gradient-primary">System</span>
                                </h1>
                                <p className="lead mb-4" style={{ color: 'var(--text-gray)' }}>
                                    Transform your educational institution with our comprehensive, cloud-based management solution.
                                    Streamline operations, enhance communication, and improve student outcomes.
                                </p>
                                <div className="d-flex gap-3 flex-wrap mb-4">
                                    <a href="#features" className="btn btn-primary-custom btn-lg">
                                        <i className="ri-eye-line me-2"></i>Explore Features
                                    </a>
                                    <a href="#screenshots" className="btn btn-outline-custom btn-lg">
                                        <i className="ri-image-line me-2"></i>View Screenshots
                                    </a>
                                </div>
                                <div className="d-flex gap-4 flex-wrap">
                                    <div>
                                        <i className="ri-checkbox-circle-fill text-success me-2"></i>
                                        <span style={{ color: 'var(--text-gray)' }}>Cloud-Based</span>
                                    </div>
                                    <div>
                                        <i className="ri-checkbox-circle-fill text-success me-2"></i>
                                        <span style={{ color: 'var(--text-gray)' }}>Mobile Responsive</span>
                                    </div>
                                    <div>
                                        <i className="ri-checkbox-circle-fill text-success me-2"></i>
                                        <span style={{ color: 'var(--text-gray)' }}>Secure</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="glass-card p-4">
                                    <div className="bg-dark-lighter rounded-3 p-5 text-center">
                                        <i className="ri-school-line" style={{ fontSize: '10rem', color: 'var(--primary-color)', opacity: 0.8 }}></i>
                                        <h4 className="mt-4 mb-2">Complete School Solution</h4>
                                        <p style={{ color: 'var(--text-gray)' }}>All-in-one platform for modern education</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section id="screenshots" className="py-5" style={{ background: 'var(--dark-card)' }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-4 fw-bold mb-3">
                                System <span className="text-gradient-primary">Screenshots</span>
                            </h2>
                            <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                See our powerful features in action
                            </p>
                        </div>

                        <div className="row g-4">
                            {screenshots.map((screenshot, index) => (
                                <div key={index} className="col-lg-6">
                                    <div className="feature-card">
                                        <div className="mb-3 overflow-hidden rounded-3">
                                            <Image
                                                src={screenshot.image}
                                                alt={screenshot.title}
                                                width={600}
                                                height={400}
                                                className="w-100"
                                                style={{ borderRadius: '8px', height: '400px', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <h4 className="mb-2">{screenshot.title}</h4>
                                        <p style={{ color: 'var(--text-gray)' }}>
                                            {screenshot.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-4 fw-bold mb-3">
                                Powerful <span className="text-gradient-primary">Features</span>
                            </h2>
                            <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                Everything you need to manage your educational institution efficiently
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

                {/* Benefits Section */}
                <section className="py-5" style={{ background: 'var(--dark-card)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="display-5 fw-bold mb-4">
                                    Why Choose Our <span className="text-gradient-accent">School System</span>
                                </h2>
                                <p className="mb-4" style={{ color: 'var(--text-gray)' }}>
                                    Our School Management System is designed to address the unique challenges faced by educational institutions,
                                    providing a comprehensive solution that grows with your needs.
                                </p>
                                <div className="row g-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="col-12">
                                            <div className="d-flex align-items-start">
                                                <i className="ri-check-double-line text-success me-3 mt-1" style={{ fontSize: '1.5rem' }}></i>
                                                <p className="mb-0" style={{ color: 'var(--text-light)' }}>{benefit}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="glass-card p-5">
                                    <div className="text-center">
                                        <i className="ri-line-chart-line mb-4" style={{ fontSize: '6rem', color: 'var(--secondary-color)' }}></i>
                                        <h3 className="mb-3">Proven Results</h3>
                                        <div className="row g-4 mt-4">
                                            <div className="col-6">
                                                <h2 className="text-gradient-primary mb-2">500+</h2>
                                                <p style={{ color: 'var(--text-gray)' }}>Schools Using</p>
                                            </div>
                                            <div className="col-6">
                                                <h2 className="text-gradient-primary mb-2">100K+</h2>
                                                <p style={{ color: 'var(--text-gray)' }}>Active Students</p>
                                            </div>
                                            <div className="col-6">
                                                <h2 className="text-gradient-primary mb-2">99.9%</h2>
                                                <p style={{ color: 'var(--text-gray)' }}>Uptime</p>
                                            </div>
                                            <div className="col-6">
                                                <h2 className="text-gradient-primary mb-2">24/7</h2>
                                                <p style={{ color: 'var(--text-gray)' }}>Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="demo" className="py-5">
                    <div className="container">
                        <div className="glass-card p-5 text-center">
                            <h2 className="display-5 fw-bold mb-4">
                                Ready to Transform Your <span className="text-gradient-primary">Institution</span>?
                            </h2>
                            <p className="lead mb-4" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                                Join hundreds of schools already using our system. Schedule a demo today and see how we can help.
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <Link href="/contact" className="btn btn-primary-custom btn-lg">
                                    <i className="ri-message-3-line me-2"></i>Contact Sales
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
