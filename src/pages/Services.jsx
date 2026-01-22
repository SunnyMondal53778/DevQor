import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
    const services = [
        {
            id: 'fullstack',
            icon: '🚀',
            title: 'Full Stack Development',
            tagline: 'End-to-End Solutions',
            description: 'Comprehensive web and mobile application development from concept to deployment. We handle everything from database architecture to user interfaces.',
            features: [
                'Custom Web Applications',
                'Mobile App Development (iOS & Android)',
                'Progressive Web Apps (PWA)',
                'API Development & Integration',
                'Database Design & Optimization',
                'Real-time Applications',
            ],
            technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL'],
        },
        {
            id: 'frontend',
            icon: '🎨',
            title: 'Frontend Development',
            tagline: 'Stunning User Experiences',
            description: 'Create beautiful, responsive, and performant user interfaces that engage and delight your users across all devices.',
            features: [
                'Responsive Web Design',
                'Single Page Applications (SPA)',
                'Component Libraries',
                'Performance Optimization',
                'Accessibility (WCAG)',
                'Animation & Micro-interactions',
            ],
            technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind', 'Framer Motion'],
        },
        {
            id: 'backend',
            icon: '⚙️',
            title: 'Backend Development',
            tagline: 'Powerful & Scalable',
            description: 'Build robust, secure, and scalable server-side solutions that power your applications and handle millions of requests.',
            features: [
                'RESTful API Development',
                'Microservices Architecture',
                'Database Management',
                'Authentication & Security',
                'Message Queues & Workers',
                'Serverless Functions',
            ],
            technologies: ['Node.js', 'Python', 'Java', 'Go', 'Redis', 'Kafka'],
        },
        {
            id: 'cloud',
            icon: '☁️',
            title: 'Cloud Solutions & Deployment',
            tagline: 'Scale Without Limits',
            description: 'Leverage the power of cloud computing to deploy, scale, and manage your applications with enterprise-grade infrastructure.',
            features: [
                'Cloud Architecture Design',
                'CI/CD Pipeline Setup',
                'Container Orchestration',
                'Infrastructure as Code',
                'Cost Optimization',
                'Multi-Cloud Strategy',
            ],
            technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
        },
        {
            id: 'maintenance',
            icon: '🔧',
            title: 'Maintenance & Support',
            tagline: '24/7 Peace of Mind',
            description: 'Keep your applications running smoothly with our comprehensive maintenance and support services, available around the clock.',
            features: [
                '24/7 Monitoring & Alerts',
                'Bug Fixes & Updates',
                'Performance Optimization',
                'Security Patches',
                'Backup & Recovery',
                'SLA-Based Support',
            ],
            technologies: ['Datadog', 'Grafana', 'PagerDuty', 'Sentry', 'New Relic', 'Prometheus'],
        },
        {
            id: 'uiux',
            icon: '🎯',
            title: 'UI/UX Design',
            tagline: 'Design That Converts',
            description: 'Create intuitive, user-centered designs that solve real problems and deliver exceptional user experiences that drive conversions.',
            features: [
                'User Research & Analysis',
                'Wireframing & Prototyping',
                'Visual Design Systems',
                'Usability Testing',
                'Interaction Design',
                'Design Handoff',
            ],
            technologies: ['Figma', 'Sketch', 'Adobe XD', 'Principle', 'Zeplin', 'Miro'],
        },
        {
            id: 'digital',
            icon: '⚡',
            title: 'Digital Transformation',
            tagline: 'Future-Ready Business',
            description: 'Modernize your business processes and technology stack to stay competitive in the digital age and drive innovation.',
            features: [
                'Technology Assessment',
                'Legacy System Modernization',
                'Process Automation',
                'Data Analytics & BI',
                'Change Management',
                'Digital Strategy Consulting',
            ],
            technologies: ['AI/ML', 'RPA', 'IoT', 'Blockchain', 'Big Data', 'Analytics'],
        },
    ]

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We dive deep into your requirements, goals, and challenges to understand your vision.',
        },
        {
            step: '02',
            title: 'Planning',
            description: 'We create a detailed roadmap, architecture, and project plan tailored to your needs.',
        },
        {
            step: '03',
            title: 'Development',
            description: 'Our expert team brings your vision to life using agile methodologies.',
        },
        {
            step: '04',
            title: 'Delivery',
            description: 'We deploy, test, and ensure everything works perfectly before handoff.',
        },
    ]

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero__bg">
                    <div className="services-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="services-hero__content">
                        <h1 className="services-hero__title">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className="services-hero__description">
                            From concept to deployment, we offer comprehensive software development services
                            to help your business thrive in the digital landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-list section">
                <div className="container">
                    <div className="services-list__grid">
                        {services.map((service, index) => (
                            <div key={service.id} id={service.id} className="service-card">
                                <div className="service-card__header">
                                    <div className="service-card__icon">{service.icon}</div>
                                    <div className="service-card__meta">
                                        <span className="service-card__tagline">{service.tagline}</span>
                                        <h3 className="service-card__title">{service.title}</h3>
                                    </div>
                                </div>

                                <p className="service-card__description">{service.description}</p>

                                <div className="service-card__features">
                                    <h4>What we offer:</h4>
                                    <ul>
                                        {service.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="service-card__check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-card__tech">
                                    <h4>Technologies:</h4>
                                    <div className="service-card__tech-tags">
                                        {service.technologies.map((tech, i) => (
                                            <span key={i} className="service-card__tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process section">
                <div className="container">
                    <h2 className="section-title">
                        Our <span className="highlight">Process</span>
                    </h2>
                    <p className="section-subtitle">
                        A proven methodology for delivering successful projects
                    </p>

                    <div className="process__grid">
                        {process.map((item, index) => (
                            <div key={index} className="process__card">
                                <span className="process__step">{item.step}</span>
                                <h3 className="process__title">{item.title}</h3>
                                <p className="process__description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta section">
                <div className="container">
                    <div className="services-cta__content">
                        <h2 className="services-cta__title">
                            Ready to Build Something <span className="text-gradient">Amazing?</span>
                        </h2>
                        <p className="services-cta__description">
                            Let's discuss your project and create a solution that exceeds your expectations.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            <span>Get a Free Consultation</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
