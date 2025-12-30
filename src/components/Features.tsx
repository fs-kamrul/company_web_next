"use client";

export default function Features() {
    const features = [
        {
            icon: "ri-lightbulb-flash-line",
            title: "Innovation First",
            description: "Cutting-edge solutions using the latest technologies and best practices"
        },
        {
            icon: "ri-customer-service-2-line",
            title: "24/7 Support",
            description: "Dedicated support team available round the clock to assist you"
        },
        {
            icon: "ri-shield-check-line",
            title: "Secure & Reliable",
            description: "Bank-level security with 99.9% uptime guarantee"
        },
        {
            icon: "ri-dashboard-3-line",
            title: "User-Friendly",
            description: "Intuitive interfaces designed for ease of use and efficiency"
        },
        {
            icon: "ri-line-chart-line",
            title: "Scalable Solutions",
            description: "Grow your operations without worrying about system limitations"
        },
        {
            icon: "ri-team-line",
            title: "Expert Team",
            description: "Experienced developers and consultants committed to your success"
        }
    ];

    return (
        <section id="features" className="py-5" style={{ background: 'var(--dark-card)' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">
                        Why Choose <span className="text-gradient-primary">Us</span>
                    </h2>
                    <p className="lead" style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
                        We combine technical excellence with a customer-first approach to deliver outstanding results
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

                {/* Technology Stack */}
                <div className="mt-5 pt-5">
                    <div className="text-center mb-4">
                        <h3 className="mb-3">Our <span className="text-gradient-accent">Technology Stack</span></h3>
                        <p style={{ color: 'var(--text-gray)' }}>
                            Built with modern, industry-leading technologies
                        </p>
                    </div>

                    <div className="row justify-content-center g-3">
                        <div className="col-auto">
                            <div className="glass-card px-4 py-3">
                                <i className="ri-reactjs-line me-2" style={{ fontSize: '1.5rem', color: '#61DAFB' }}></i>
                                <strong>React</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="glass-card px-4 py-3">
                                <i className="ri-pages-line me-2" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                                <strong>Next.js</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="glass-card px-4 py-3">
                                <i className="ri-code-s-slash-line me-2" style={{ fontSize: '1.5rem', color: '#FF2D20' }}></i>
                                <strong>Laravel</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="glass-card px-4 py-3">
                                <i className="ri-fire-line me-2" style={{ fontSize: '1.5rem', color: '#EF4223' }}></i>
                                <strong>CodeIgniter</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="glass-card px-4 py-3">
                                <i className="ri-database-2-line me-2" style={{ fontSize: '1.5rem', color: '#4479A1' }}></i>
                                <strong>MySQL</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="glass-card px-4 py-3">
                                <i className="ri-bootstrap-line me-2" style={{ fontSize: '1.5rem', color: '#7952B3' }}></i>
                                <strong>Bootstrap</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
