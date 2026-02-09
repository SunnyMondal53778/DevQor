import ScrollReveal from '../components/ScrollReveal'
import './Privacy.css'

function PrivacyPolicy() {
    return (
        <div className="privacy-page">
            {/* Hero Section */}
            <section className="privacy-hero">
                <div className="privacy-hero__bg">
                    <div className="privacy-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="privacy-hero__content">
                        <h1 className="privacy-hero__title animate-fadeInUp">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="privacy-hero__description animate-fadeInUp delay-200">
                            Your privacy is important to us. Learn how we collect, use, and protect your data.
                        </p>
                        <p className="privacy-hero__date animate-fadeInUp delay-300">
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="privacy-content section">
                <div className="container">
                    <div className="privacy-container">
                        <ScrollReveal animation="fadeUp">
                            <div className="policy-section">
                                <h2>1. Introduction</h2>
                                <p>
                                    DevQor ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                                    Policy explains how we collect, use, disclose, and safeguard your information when
                                    you visit our website or engage our services.
                                </p>
                                <p>
                                    Please read this privacy policy carefully. By using our services, you consent to
                                    the practices described in this policy.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={100}>
                            <div className="policy-section">
                                <h2>2. Information We Collect</h2>
                                <h3>Personal Information</h3>
                                <p>We may collect the following personal information:</p>
                                <ul>
                                    <li>Name and contact details (email, phone number)</li>
                                    <li>Company name and job title</li>
                                    <li>Project requirements and related communications</li>
                                    <li>Payment and billing information</li>
                                </ul>
                                <h3>Automatically Collected Information</h3>
                                <p>When you visit our website, we may automatically collect:</p>
                                <ul>
                                    <li>IP address and browser type</li>
                                    <li>Device information</li>
                                    <li>Pages visited and time spent</li>
                                    <li>Referring website addresses</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={200}>
                            <div className="policy-section">
                                <h2>3. How We Use Your Information</h2>
                                <p>We use the collected information for:</p>
                                <ul>
                                    <li>Providing and improving our services</li>
                                    <li>Communicating with you about projects and support</li>
                                    <li>Processing payments and invoicing</li>
                                    <li>Sending newsletters and marketing communications (with consent)</li>
                                    <li>Analyzing website usage to improve user experience</li>
                                    <li>Complying with legal obligations</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={300}>
                            <div className="policy-section">
                                <h2>4. Data Sharing and Disclosure</h2>
                                <p>We do not sell your personal information. We may share data with:</p>
                                <ul>
                                    <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (hosting, payment processing, analytics)</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={400}>
                            <div className="policy-section">
                                <h2>5. Data Security</h2>
                                <p>
                                    We implement appropriate technical and organizational measures to protect your
                                    personal information against unauthorized access, alteration, disclosure, or
                                    destruction. These measures include:
                                </p>
                                <ul>
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Secure access controls and authentication</li>
                                    <li>Regular security assessments and updates</li>
                                    <li>Employee training on data protection</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={500}>
                            <div className="policy-section">
                                <h2>6. Cookies and Tracking</h2>
                                <p>
                                    We use cookies and similar tracking technologies to enhance your browsing experience.
                                    You can control cookie preferences through your browser settings.
                                </p>
                                <p>Types of cookies we use:</p>
                                <ul>
                                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={600}>
                            <div className="policy-section">
                                <h2>7. Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access your personal data we hold</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to or restrict processing</li>
                                    <li>Data portability</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                                <p>
                                    To exercise these rights, please contact us at{' '}
                                    <a href="mailto:contact@devqor.in">contact@devqor.in</a>.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={700}>
                            <div className="policy-section">
                                <h2>8. Data Retention</h2>
                                <p>
                                    We retain your personal information for as long as necessary to fulfill the
                                    purposes outlined in this policy, unless a longer retention period is required
                                    by law. Project-related data is typically retained for 3 years after project
                                    completion.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={800}>
                            <div className="policy-section">
                                <h2>9. Changes to This Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any
                                    changes by posting the new policy on this page and updating the "Last updated"
                                    date. We encourage you to review this policy periodically.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={900}>
                            <div className="policy-section">
                                <h2>10. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="contact-info">
                                    <p><strong>Email:</strong> <a href="mailto:contact@devqor.in">contact@devqor.in</a></p>
                                    <p><strong>Phone:</strong> +91 9804804973</p>
                                    <p><strong>Address:</strong> Kolkata, West Bengal, India</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
