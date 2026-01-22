import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitted(true)
    }

    const contactInfo = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            title: 'Email',
            value: 'hello@developersden.com',
            link: 'mailto:hello@developersden.com',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
            ),
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            ),
            title: 'Location',
            value: 'San Francisco, CA, USA',
            link: '#',
        },
    ]

    const services = [
        'Full Stack Development',
        'Frontend Development',
        'Backend Development',
        'Cloud Solutions',
        'UI/UX Design',
        'Digital Transformation',
        'Maintenance & Support',
        'Other',
    ]

    const budgetRanges = [
        'Less than $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000+',
    ]

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero__bg">
                    <div className="contact-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="contact-hero__content">
                        <h1 className="contact-hero__title">
                            Get in <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="contact-hero__description">
                            Ready to start your next project? We'd love to hear from you.
                            Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="contact-info__title">Let's Start a Conversation</h2>
                            <p className="contact-info__description">
                                Whether you have a question about our services, pricing, or just want to chat
                                about your project ideas, our team is ready to answer all your questions.
                            </p>

                            <div className="contact-info__list">
                                {contactInfo.map((info, index) => (
                                    <a key={index} href={info.link} className="contact-info__item">
                                        <div className="contact-info__icon">{info.icon}</div>
                                        <div>
                                            <span className="contact-info__label">{info.title}</span>
                                            <span className="contact-info__value">{info.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="contact-info__hours">
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                                <p>Weekend: By appointment only</p>
                            </div>

                            <div className="contact-info__social">
                                <h3>Follow Us</h3>
                                <div className="contact-info__social-links">
                                    <a href="#" aria-label="LinkedIn">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Twitter">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="GitHub">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            {submitted ? (
                                <div className="contact-success">
                                    <div className="contact-success__icon">✓</div>
                                    <h3>Thank You!</h3>
                                    <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setSubmitted(false)
                                            setFormData({
                                                name: '',
                                                email: '',
                                                company: '',
                                                service: '',
                                                budget: '',
                                                message: '',
                                            })
                                        }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h2 className="contact-form__title">Send us a Message</h2>

                                    <div className="contact-form__row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form__row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="company">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="form-input"
                                                placeholder="Your Company Name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="service">Service Interested In</label>
                                            <select
                                                id="service"
                                                name="service"
                                                className="form-input"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="budget">Budget Range</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            className="form-input"
                                            value={formData.budget}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select your budget range</option>
                                            {budgetRanges.map((range, index) => (
                                                <option key={index} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">Project Details *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-input form-textarea"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg contact-form__submit"
                                        disabled={isSubmitting}
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        {!isSubmitting && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                            </svg>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-placeholder__content">
                        <div className="map-placeholder__icon">📍</div>
                        <h3>San Francisco, CA</h3>
                        <p>United States of America</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
