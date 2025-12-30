"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
    return (
        <>
            <Navbar />
            <main className="pt-5 mt-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h1 className="display-4 fw-bold mb-4">Terms of Service</h1>
                            <p className="text-muted mb-5" suppressHydrationWarning>Last updated: {new Date().toLocaleDateString()}</p>

                            <div className="glass-card p-5">
                                <section className="mb-5">
                                    <h3 className="mb-3">1. Acceptance of Terms</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                                        In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable
                                        to such services.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h3 className="mb-3">2. Use License</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        Permission is granted to temporarily download one copy of the materials (information or software) on kTechSolutions'
                                        website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                                        and under this license you may not:
                                    </p>
                                    <ul style={{ color: 'var(--text-gray)' }}>
                                        <li>modify or copy the materials;</li>
                                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                        <li>attempt to decompile or reverse engineer any software contained on kTechSolutions' website;</li>
                                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                                    </ul>
                                </section>

                                <section className="mb-5">
                                    <h3 className="mb-3">3. Disclaimer</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        The materials on kTechSolutions' website are provided on an 'as is' basis. kTechSolutions makes no warranties,
                                        expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                                        implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                                        intellectual property or other violation of rights.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h3 className="mb-3">4. Limitations</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        In no event shall kTechSolutions or its suppliers be liable for any damages (including, without limitation,
                                        damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                                        the materials on kTechSolutions' website, even if kTechSolutions or a kTechSolutions authorized representative
                                        has been notified orally or in writing of the possibility of such damage.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="mb-3">5. Governing Law</h3>
                                    <p style={{ color: 'var(--text-gray)' }}>
                                        These terms and conditions are governed by and construed in accordance with the laws of the country and you
                                        irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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
