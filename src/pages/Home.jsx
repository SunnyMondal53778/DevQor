import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    const services = [
        {
            icon: '🚀',
            title: 'Full Stack Development',
            description: 'End-to-end solutions from database to deployment, built with modern technologies.',
        },
        {
            icon: '🎨',
            title: 'Frontend Development',
            description: 'Stunning, responsive interfaces that captivate users and drive engagement.',
        },
        {
            icon: '⚙️',
            title: 'Backend Development',
            description: 'Robust, scalable server architectures that power your applications.',
        },
        {
            icon: '☁️',
            title: 'Cloud Solutions',
            description: 'AWS, Azure, GCP - we deploy and manage your infrastructure with precision.',
        },
        {
            icon: '🎯',
            title: 'UI/UX Design',
            description: 'User-centered designs that transform complex problems into elegant solutions.',
        },
        {
            icon: '⚡',
            title: 'Digital Transformation',
            description: 'Modernize your business with cutting-edge technology and processes.',
        },
    ]

    const stats = [
        { value: '150+', label: 'Projects Delivered' },
        { value: '50+', label: 'Happy Clients' },
        { value: '25+', label: 'Team Members' },
        { value: '99%', label: 'Client Satisfaction' },
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__bg">
                    <div className="hero__glow hero__glow--1"></div>
                    <div className="hero__glow hero__glow--2"></div>
                    <div className="hero__grid"></div>
                </div>

                <div className="hero__container container">
                    <div className="hero__content">
                        <div className="hero__badge animate-fadeInDown">
                            <span className="hero__badge-dot"></span>
                            Engineering Excellence, Delivered
                        </div>

                        <h1 className="hero__title animate-fadeInUp">
                            <span className="hero__title-line">We</span>
                            <span className="hero__title-words">
                                <span className="hero__title-word text-gradient">Code.</span>
                                <span className="hero__title-word text-gradient delay-100">Create.</span>
                                <span className="hero__title-word text-gradient delay-200">Conquer.</span>
                            </span>
                        </h1>

                        <p className="hero__description animate-fadeInUp delay-300">
                            Transform your digital vision into reality with Developer's Den.
                            We're your strategic partner in building world-class software solutions
                            that drive growth and innovation.
                        </p>

                        <div className="hero__actions animate-fadeInUp delay-400">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <span>Start Your Project</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link to="/services" className="btn btn-secondary btn-lg">
                                <span>Explore Services</span>
                            </Link>
                        </div>
                    </div>

                    <div className="hero__visual animate-fadeIn delay-500">
                        <div className="hero__code-window">
                            <div className="hero__code-header">
                                <div className="hero__code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="hero__code-title">developer.js</span>
                            </div>
                            <div className="hero__code-body">
                                <pre><code><span className="code-keyword">const</span> <span className="code-variable">developersDen</span> = {'{'}<br />
                                    <span className="code-property">  mission</span>: <span className="code-string">"Engineering Excellence"</span>,<br />
                                    <span className="code-property">  motto</span>: [<span className="code-string">"Code"</span>, <span className="code-string">"Create"</span>, <span className="code-string">"Conquer"</span>],<br />
                                    <span className="code-property">  deliver</span>: () =&gt; <span className="code-string">"Success"</span> 🚀<br />
                                    {'}'}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll">
                    <div className="hero__scroll-mouse">
                        <div className="hero__scroll-wheel"></div>
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <div className="stats__grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stats__item">
                                <span className="stats__value">{stat.value}</span>
                                <span className="stats__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="home-services section">
                <div className="container">
                    <h2 className="section-title">
                        Our <span className="highlight">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive software solutions tailored to accelerate your business growth
                    </p>

                    <div className="home-services__grid">
                        {services.map((service, index) => (
                            <div key={index} className="card" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="card-icon">{service.icon}</div>
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-description">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="home-services__cta">
                        <Link to="/services" className="btn btn-primary">
                            <span>View All Services</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-us section">
                <div className="container">
                    <div className="why-us__grid">
                        <div className="why-us__content">
                            <h2 className="why-us__title">
                                Why Choose <span className="highlight">Developer's Den?</span>
                            </h2>
                            <p className="why-us__description">
                                We don't just write code – we architect solutions that transform businesses.
                                Our team of seasoned engineers brings decades of combined experience to every project.
                            </p>

                            <ul className="why-us__list">
                                <li>
                                    <div className="why-us__check">✓</div>
                                    <div>
                                        <strong>Expert Team</strong>
                                        <p>Senior developers with 10+ years of industry experience</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-us__check">✓</div>
                                    <div>
                                        <strong>Agile Methodology</strong>
                                        <p>Iterative development with continuous feedback loops</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-us__check">✓</div>
                                    <div>
                                        <strong>24/7 Support</strong>
                                        <p>Round-the-clock maintenance and technical support</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-us__check">✓</div>
                                    <div>
                                        <strong>Scalable Solutions</strong>
                                        <p>Architectures designed to grow with your business</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="why-us__visual">
                            <div className="why-us__card">
                                <div className="why-us__card-icon">🏆</div>
                                <h4>Industry Leaders</h4>
                                <p>Trusted by startups and enterprises alike</p>
                            </div>
                            <div className="why-us__card">
                                <div className="why-us__card-icon">⚡</div>
                                <h4>Fast Delivery</h4>
                                <p>Efficient processes for quick turnaround</p>
                            </div>
                            <div className="why-us__card">
                                <div className="why-us__card-icon">🔒</div>
                                <h4>Secure Code</h4>
                                <p>Security-first development practices</p>
                            </div>
                            <div className="why-us__card">
                                <div className="why-us__card-icon">💡</div>
                                <h4>Innovation</h4>
                                <p>Cutting-edge technologies and solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-cta section">
                <div className="container">
                    <div className="home-cta__content">
                        <h2 className="home-cta__title">
                            Ready to <span className="text-gradient">Transform</span> Your Ideas?
                        </h2>
                        <p className="home-cta__description">
                            Let's build something extraordinary together. Get in touch and let's discuss
                            how we can bring your vision to life.
                        </p>
                        <div className="home-cta__actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <span>Get Started Today</span>
                            </Link>
                            <Link to="/about" className="btn btn-secondary btn-lg">
                                <span>Learn More About Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
