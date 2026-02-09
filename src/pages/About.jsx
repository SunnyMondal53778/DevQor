import ScrollReveal from '../components/ScrollReveal'
import './About.css'

function About() {
    const team = [
        {
            name: 'Sunny Mondal',
            role: 'Founder and CEO',
            image: '/Sunny_DP.jpeg',
            description: 'Visionary leader with 4 years of experience in software engineering',
        },
        {
            name: 'Sujal Shaw',
            role: 'Co-Founder and COO',
            image: '/Sujal_DP.jpeg',
            description: 'Operations expert with 2 years of experience in business management',
        },
        
    ]

    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'We deliver nothing but the best. Every line of code, every pixel, every solution is crafted with precision and care.',
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'We work as partners, not vendors. Your success is our success, and we build lasting relationships.',
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We stay ahead of the curve, constantly learning and implementing cutting-edge technologies.',
        },
        {
            icon: '🔒',
            title: 'Integrity',
            description: 'Transparency and honesty guide everything we do. We communicate openly and deliver on our promises.',
        },
    ]

    const timeline = [
        { year: 'Dec 2025', title: 'Founded', description: 'Started with a vision to revolutionize software development and deliver engineering excellence.' },
        { year: 'Jan 2026', title: 'The Beginning', description: 'Started our journey with 3 passionate friends united by a shared dream.' },
        { year: 'Feb 2026', title: 'Team Expansion', description: 'Grew rapidly to 22 talented team members, building a strong foundation for the future.' },
    ]

    const cultureHighlights = [
        { icon: '📚', label: 'Continuous Learning' },
        { icon: '🏠', label: 'Remote-First' },
        { icon: '🎮', label: 'Fun Activities' },
        { icon: '💪', label: 'Health & Wellness' },
    ]

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero__bg">
                    <div className="about-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="about-hero__content">
                        <h1 className="about-hero__title animate-fadeInUp">
                            About <span className="text-gradient">DevQor</span>
                        </h1>
                        <p className="about-hero__description animate-fadeInUp delay-200">
                            We're a team of passionate engineers, designers, and innovators dedicated to
                            delivering engineering excellence. Our mission is to transform businesses through
                            cutting-edge technology solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats">
                <div className="container">
                    <div className="about-stats__grid">
                        <ScrollReveal animation="fadeUp" delay={0}>
                            <div className="about-stats__item hover-lift">
                                <span className="about-stats__number">10+</span>
                                <span className="about-stats__label">Projects</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeUp" delay={100}>
                            <div className="about-stats__item hover-lift">
                                <span className="about-stats__number">6+</span>
                                <span className="about-stats__label">Happy Clients</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeUp" delay={200}>
                            <div className="about-stats__item hover-lift">
                                <span className="about-stats__number">22+</span>
                                <span className="about-stats__label">Team Members</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeUp" delay={300}>
                            <div className="about-stats__item hover-lift">
                                <span className="about-stats__number">99%</span>
                                <span className="about-stats__label">Client Satisfaction</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission section">
                <div className="container">
                    <div className="mission__grid">
                        <ScrollReveal animation="fadeLeft">
                            <div className="mission__card hover-lift hover-glow">
                                <div className="mission__icon">🚀</div>
                                <h3>Our Mission</h3>
                                <p>
                                    To empower businesses with world-class software solutions that drive growth,
                                    efficiency, and innovation. We believe great technology should be accessible
                                    to companies of all sizes.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeRight" delay={200}>
                            <div className="mission__card hover-lift hover-glow">
                                <div className="mission__icon">🌟</div>
                                <h3>Our Vision</h3>
                                <p>
                                    To become the most trusted software development partner globally, known for
                                    our unwavering commitment to quality, innovation, and client success.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values section">
                <div className="container">
                    <ScrollReveal animation="fadeUp">
                        <h2 className="section-title">
                            Our <span className="highlight">Core Values</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeUp" delay={100}>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </ScrollReveal>

                    <div className="values__grid">
                        {values.map((value, index) => (
                            <ScrollReveal key={index} animation="fadeUp" delay={index * 100}>
                                <div className="values__card hover-lift hover-border-glow">
                                    <div className="values__icon hover-bounce">{value.icon}</div>
                                    <h3 className="values__title">{value.title}</h3>
                                    <p className="values__description">{value.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            {/* <section className="timeline section">
                <div className="container">
                    <ScrollReveal animation="fadeUp">
                        <h2 className="section-title">
                            Our <span className="highlight">Journey</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeUp" delay={100}>
                        <p className="section-subtitle">
                            From a small startup to a global software development agency
                        </p>
                    </ScrollReveal>

                    <div className="timeline__container">
                        {timeline.map((item, index) => (
                            <ScrollReveal
                                key={index}
                                animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                                delay={index * 100}
                            >
                                <div className="timeline__item hover-lift">
                                    <div className="timeline__marker">
                                        <span>{item.year}</span>
                                    </div>
                                    <div className="timeline__content">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Team */}
            <section className="team section">
                <div className="container">
                    <ScrollReveal animation="fadeUp">
                        <h2 className="section-title">
                            Meet Our <span className="highlight">Leadership</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeUp" delay={100}>
                        <p className="section-subtitle">
                            The talented individuals driving our success
                        </p>
                    </ScrollReveal>

                    <div className="team__grid">
                        {team.map((member, index) => (
                            <ScrollReveal key={index} animation="scale" delay={index * 100}>
                                <div className="team__card hover-lift hover-glow">
                                    <div className="team__avatar">
                                        {member.image.startsWith('/') || member.image.startsWith('http') ? (
                                            <img src={member.image} alt={member.name} />
                                        ) : (
                                            member.image
                                        )}
                                    </div>
                                    <h3 className="team__name">{member.name}</h3>
                                    <span className="team__role">{member.role}</span>
                                    <p className="team__description">{member.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture */}
            <section className="culture section">
                <div className="container">
                    <ScrollReveal animation="scale">
                        <div className="culture__content">
                            <h2 className="culture__title">
                                Our <span className="text-gradient animate-textGlow">Culture</span>
                            </h2>
                            <p className="culture__description">
                                At DevQor, we believe in creating an environment where innovation thrives.
                                We foster a culture of continuous learning, collaboration, and work-life balance.
                                Our team is our greatest asset, and we invest in their growth and well-being.
                            </p>
                            <div className="culture__highlights">
                                {cultureHighlights.map((item, index) => (
                                    <div key={index} className="culture__highlight hover-scale">
                                        <span className="culture__highlight-icon">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

export default About

