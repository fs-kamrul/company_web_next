"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="pt-5 mt-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>
                            <p className="text-muted mb-5" suppressHydrationWarning>Last updated: {new Date().toLocaleDateString()}</p>

                            <div className="glass-card p-5">
                                <section className="mb-5">
                                    <h3 className="mb-3">1. Introduction</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        Welcome to kTechSolutions. We respect your privacy and are committed to protecting your personal data.
                                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                                        and tell you about your privacy rights and how the law protects you.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h3 className="mb-3">2. Data We Collect</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                    </p>
                                    <ul style={{ color: 'var(--text-gray)' }}>
                                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                                    </ul>
                                </section>

                                <section className="mb-5">
                                    <h3 className="mb-3">3. How We Use Your Data</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                    </p>
                                    <ul style={{ color: 'var(--text-gray)' }}>
                                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                                    </ul>
                                </section>

                                <section className="mb-5">
                                    <h3 className="mb-3">4. Data Security</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="mb-3">5. Contact Us</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                    </p>
                                    <p className="mb-0">
                                        <strong>Email:</strong> info@ktechsolutions.com<br />
                                        <strong>Address:</strong> 123 Tech Street, Digital City
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
