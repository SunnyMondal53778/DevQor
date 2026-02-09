import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
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
        { value: '10+', label: 'Projects' },
        { value: '6+', label: 'Happy Clients' },
        { value: '22+', label: 'Team Members' },
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
                            Transform your digital vision into reality with DevQor.
                            We're your strategic partner in building world-class software solutions
                            that drive growth and innovation.
                        </p>

                        <div className="hero__actions animate-fadeInUp delay-400">
                            <Link to="/contact" className="btn btn-primary btn-lg hover-shine">
                                <span>Start Your Project</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link to="/services" className="btn btn-secondary btn-lg hover-lift">
                                <span>Explore Services</span>
                            </Link>
                        </div>
                    </div>

                    <div className="hero__visual animate-fadeIn delay-500">
                        <div className="hero__code-window hover-tilt">
                            <div className="hero__code-header">
                                <div className="hero__code-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="hero__code-title">developer.js</span>
                            </div>
                            <div className="hero__code-body">
                                <pre><code><span className="code-keyword">const</span> <span className="code-variable">devQor</span> = {'{'}<br />
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
                            <ScrollReveal
                                key={index}
                                animation="fadeUp"
                                delay={index * 100}
                                className="stats__item-wrapper"
                            >
                                <div className="stats__item hover-scale">
                                    <span className="stats__value">{stat.value}</span>
                                    <span className="stats__label">{stat.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="home-services section">
                <div className="container">
                    <ScrollReveal animation="fadeUp">
                        <h2 className="section-title">
                            Our <span className="highlight">Services</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeUp" delay={100}>
                        <p className="section-subtitle">
                            Comprehensive software solutions tailored to accelerate your business growth
                        </p>
                    </ScrollReveal>

                    <div className="home-services__grid">
                        {services.map((service, index) => (
                            <ScrollReveal
                                key={index}
                                animation="fadeUp"
                                delay={index * 100}
                            >
                                <div className="card hover-lift hover-border-glow">
                                    <div className="card-icon hover-bounce">{service.icon}</div>
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-description">{service.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal animation="fadeUp" delay={600}>
                        <div className="home-services__cta">
                            <Link to="/services" className="btn btn-primary hover-shine">
                                <span>View All Services</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-us section">
                <div className="container">
                    <div className="why-us__grid">
                        <ScrollReveal animation="fadeLeft" className="why-us__content">
                            <h2 className="why-us__title">
                                Why Choose <span className="highlight">DevQor?</span>
                            </h2>
                            <p className="why-us__description">
                                We don't just write code – we architect solutions that transform businesses.
                                Our team of seasoned engineers brings decades of combined experience to every project.
                            </p>

                            <ul className="why-us__list">
                                {[
                                    { title: 'Expert Team', desc: 'Senior developers with 10+ years of industry experience' },
                                    { title: 'Agile Methodology', desc: 'Iterative development with continuous feedback loops' },
                                    { title: '24/7 Support', desc: 'Round-the-clock maintenance and technical support' },
                                    { title: 'Scalable Solutions', desc: 'Architectures designed to grow with your business' },
                                ].map((item, index) => (
                                    <ScrollReveal key={index} animation="fadeUp" delay={index * 100}>
                                        <li>
                                            <div className="why-us__check">✓</div>
                                            <div>
                                                <strong>{item.title}</strong>
                                                <p>{item.desc}</p>
                                            </div>
                                        </li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeRight" delay={200}>
                            <div className="why-us__visual">
                                {[
                                    { icon: '🏆', title: 'Industry Leaders', desc: 'Trusted by startups and enterprises alike' },
                                    { icon: '⚡', title: 'Fast Delivery', desc: 'Efficient processes for quick turnaround' },
                                    { icon: '🔒', title: 'Secure Code', desc: 'Security-first development practices' },
                                    { icon: '💡', title: 'Innovation', desc: 'Cutting-edge technologies and solutions' },
                                ].map((card, index) => (
                                    <div key={index} className="why-us__card hover-lift hover-glow">
                                        <div className="why-us__card-icon">{card.icon}</div>
                                        <h4>{card.title}</h4>
                                        <p>{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-cta section">
                <div className="container">
                    <ScrollReveal animation="scale">
                        <div className="home-cta__content">
                            <h2 className="home-cta__title">
                                Ready to <span className="text-gradient animate-textGlow">Transform</span> Your Ideas?
                            </h2>
                            <p className="home-cta__description">
                                Let's build something extraordinary together. Get in touch and let's discuss
                                how we can bring your vision to life.
                            </p>
                            <div className="home-cta__actions">
                                <Link to="/contact" className="btn btn-primary btn-lg hover-shine">
                                    <span>Get Started Today</span>
                                </Link>
                                <Link to="/about" className="btn btn-secondary btn-lg hover-lift">
                                    <span>Learn More About Us</span>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

export default Home

