import ScrollReveal from '../components/ScrollReveal'
import './FAQ.css'

function FAQ() {
    const faqs = [
        {
            question: 'What services does DevQor offer?',
            answer: 'DevQor offers a comprehensive range of software development services including Full Stack Development, Frontend Development, Backend Development, Cloud Solutions (AWS, Azure, GCP), UI/UX Design, and Digital Transformation services. We specialize in building custom web applications, mobile apps, and enterprise software solutions.',
        },
        {
            question: 'How do I get started with a project?',
            answer: 'Getting started is easy! Simply fill out our contact form or schedule a free consultation. We\'ll discuss your project requirements, goals, and timeline. After understanding your needs, we\'ll provide a detailed proposal with scope, timeline, and pricing.',
        },
        {
            question: 'What is your typical project timeline?',
            answer: 'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-6 months. During our initial consultation, we\'ll provide a detailed timeline specific to your project requirements.',
        },
        {
            question: 'Do you provide ongoing support and maintenance?',
            answer: 'Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We believe in long-term partnerships and are committed to keeping your applications running smoothly.',
        },
        {
            question: 'What technologies do you work with?',
            answer: 'Our team is proficient in modern technologies including React, Next.js, Node.js, Python, Java, .NET, AWS, Azure, Google Cloud, MongoDB, PostgreSQL, and more. We choose the best technology stack based on your project requirements.',
        },
        {
            question: 'How do you ensure project quality?',
            answer: 'We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and agile development methodology. Our QA team conducts thorough testing at every stage to ensure high-quality deliverables.',
        },
        {
            question: 'Can I see progress during development?',
            answer: 'Absolutely! We follow an agile methodology with regular sprint demos. You\'ll have access to our project management tools and receive weekly progress updates. We believe in transparent communication throughout the development process.',
        },
        {
            question: 'Do you sign NDAs and confidentiality agreements?',
            answer: 'Yes, we take confidentiality seriously. We\'re happy to sign NDAs and confidentiality agreements before discussing your project details. Your intellectual property and business information are always protected.',
        },
        {
            question: 'What are your payment terms?',
            answer: 'We typically work with a milestone-based payment structure. This usually involves an initial deposit (30-40%), followed by payments tied to project milestones. We accept bank transfers, UPI, and other standard payment methods.',
        },
        {
            question: 'Can you work with our existing team?',
            answer: 'Yes! We offer team augmentation services where our developers can seamlessly integrate with your existing team. We can also work alongside your in-house developers on specific modules or features.',
        },
    ]

    return (
        <div className="faq-page">
            {/* Hero Section */}
            <section className="faq-hero">
                <div className="faq-hero__bg">
                    <div className="faq-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="faq-hero__content">
                        <h1 className="faq-hero__title animate-fadeInUp">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h1>
                        <p className="faq-hero__description animate-fadeInUp delay-200">
                            Find answers to common questions about our services, processes, and policies.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="faq-content section">
                <div className="container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index} animation="fadeUp" delay={index * 50}>
                                <div className="faq-item hover-lift">
                                    <h3 className="faq-item__question">
                                        <span className="faq-item__icon">❓</span>
                                        {faq.question}
                                    </h3>
                                    <p className="faq-item__answer">{faq.answer}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="faq-cta section">
                <div className="container">
                    <ScrollReveal animation="scale">
                        <div className="faq-cta__content">
                            <h2 className="faq-cta__title">
                                Still have <span className="text-gradient">questions?</span>
                            </h2>
                            <p className="faq-cta__description">
                                Can't find what you're looking for? Our team is here to help.
                            </p>
                            <a href="/contact" className="btn btn-primary btn-lg hover-shine">
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

export default FAQ
