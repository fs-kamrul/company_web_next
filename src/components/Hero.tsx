"use client";

export default function Hero() {
    return (
        <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
            {/* Animated Background Elements */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25">
                <div className="position-absolute animate-float" style={{ top: '10%', left: '10%' }}>
                    <i className="ri-code-box-line" style={{ fontSize: '4rem', color: 'var(--primary-light)' }}></i>
                </div>
                <div className="position-absolute animate-float" style={{ top: '60%', right: '15%', animationDelay: '1s' }}>
                    <i className="ri-database-2-line" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}></i>
                </div>
                <div className="position-absolute animate-float" style={{ top: '30%', right: '25%', animationDelay: '2s' }}>
                    <i className="ri-cloud-line" style={{ fontSize: '3.5rem', color: 'var(--accent-color)' }}></i>
                </div>
            </div>

            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-7 animate-fade-in-up">
                        <h1 className="display-3 display-md-2 fw-bold mb-4">
                            Welcome to <span className="text-gradient-primary">kTechSolutions</span>
                        </h1>
                        <p className="lead mb-4 text-gray-responsive">
                            Empowering Education and Business with Cutting-Edge Technology Solutions
                        </p>
                        <p className="fs-5 mb-5 text-gray-responsive">
                            We specialize in delivering innovative software solutions that transform how institutions and businesses operate.
                            From comprehensive school management to dynamic web platforms, we bring your digital vision to life.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <a href="#products" className="btn btn-primary-custom btn-lg">
                                <i className="ri-eye-line me-2"></i>
                                Explore Products
                            </a>
                            <a href="#contact" className="btn btn-outline-custom btn-lg">
                                <i className="ri-message-3-line me-2"></i>
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="position-relative">
                            <div className="glass-card p-5 text-center">
                                <i className="ri-window-line" style={{ fontSize: '8rem', color: 'var(--primary-color)' }}></i>
                                <h4 className="mt-4 mb-3">Innovation Driven</h4>
                                <p style={{ color: 'var(--text-gray)' }}>
                                    Building tomorrow's solutions today
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-float">
                <a href="#products" className="text-white">
                    <i className="ri-arrow-down-s-line" style={{ fontSize: '2rem' }}></i>
                </a>
            </div>
        </section>
    );
}
