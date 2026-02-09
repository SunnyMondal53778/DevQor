import ScrollReveal from '../components/ScrollReveal'
import './TermsOfService.css'

function TermsOfService() {
    return (
        <div className="terms-page">
            {/* Hero Section */}
            <section className="terms-hero">
                <div className="terms-hero__bg">
                    <div className="terms-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="terms-hero__content">
                        <h1 className="terms-hero__title animate-fadeInUp">
                            Terms of <span className="text-gradient">Service</span>
                        </h1>
                        <p className="terms-hero__description animate-fadeInUp delay-200">
                            Please read these terms carefully before using our services.
                        </p>
                        <p className="terms-hero__date animate-fadeInUp delay-300">
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="terms-content section">
                <div className="container">
                    <div className="terms-container">
                        <ScrollReveal animation="fadeUp">
                            <div className="policy-section">
                                <h2>1. Agreement to Terms</h2>
                                <p>
                                    By accessing or using DevQor's services, you agree to be bound by these Terms of
                                    Service. If you disagree with any part of these terms, you may not access our services.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={100}>
                            <div className="policy-section">
                                <h2>2. Services Description</h2>
                                <p>
                                    DevQor provides software development services including but not limited to:
                                </p>
                                <ul>
                                    <li>Full Stack Web Development</li>
                                    <li>Frontend and Backend Development</li>
                                    <li>Cloud Solutions and DevOps</li>
                                    <li>UI/UX Design</li>
                                    <li>Digital Transformation Consulting</li>
                                    <li>Maintenance and Support Services</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={200}>
                            <div className="policy-section">
                                <h2>3. Client Responsibilities</h2>
                                <p>As a client, you agree to:</p>
                                <ul>
                                    <li>Provide accurate and complete project requirements</li>
                                    <li>Respond to communications in a timely manner</li>
                                    <li>Provide necessary materials, content, and access credentials</li>
                                    <li>Review and provide feedback on deliverables within agreed timeframes</li>
                                    <li>Make payments according to the agreed schedule</li>
                                    <li>Ensure all provided content does not infringe on third-party rights</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={300}>
                            <div className="policy-section">
                                <h2>4. Project Terms</h2>
                                <h3>Proposals and Agreements</h3>
                                <p>
                                    All projects will be governed by a separate Statement of Work (SOW) or proposal
                                    that outlines scope, timeline, deliverables, and pricing. These project-specific
                                    terms supplement these general Terms of Service.
                                </p>
                                <h3>Changes and Scope Creep</h3>
                                <p>
                                    Any changes to the agreed scope may result in adjustments to timeline and cost.
                                    Such changes will require written agreement from both parties before implementation.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={400}>
                            <div className="policy-section">
                                <h2>5. Payment Terms</h2>
                                <ul>
                                    <li>Payment terms will be specified in the project proposal</li>
                                    <li>Typically, projects require an advance payment of 30-40%</li>
                                    <li>Remaining payments are tied to project milestones</li>
                                    <li>Invoices are due within 15 days of issuance unless otherwise agreed</li>
                                    <li>Late payments may incur interest charges of 1.5% per month</li>
                                    <li>We reserve the right to pause work if payments are significantly overdue</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={500}>
                            <div className="policy-section">
                                <h2>6. Intellectual Property</h2>
                                <h3>Client Materials</h3>
                                <p>
                                    You retain all rights to content, materials, and intellectual property you provide to us.
                                </p>
                                <h3>Developed Work</h3>
                                <p>
                                    Upon full payment, you will own all custom code and designs developed specifically
                                    for your project. We retain the right to use general frameworks, libraries, and
                                    reusable components in other projects.
                                </p>
                                <h3>Portfolio Rights</h3>
                                <p>
                                    Unless otherwise agreed, we may showcase completed projects in our portfolio and
                                    marketing materials.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={600}>
                            <div className="policy-section">
                                <h2>7. Confidentiality</h2>
                                <p>
                                    Both parties agree to maintain confidentiality of proprietary information shared
                                    during the project. This includes business strategies, technical specifications,
                                    source code, and any information marked as confidential.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={700}>
                            <div className="policy-section">
                                <h2>8. Warranties and Disclaimers</h2>
                                <p>
                                    We warrant that our services will be performed with reasonable skill and care.
                                    However:
                                </p>
                                <ul>
                                    <li>We do not guarantee that software will be error-free</li>
                                    <li>We provide a 30-day warranty period for bug fixes after project completion</li>
                                    <li>Third-party integrations are subject to their respective terms and availability</li>
                                    <li>We are not responsible for issues arising from unauthorized modifications</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={800}>
                            <div className="policy-section">
                                <h2>9. Limitation of Liability</h2>
                                <p>
                                    To the maximum extent permitted by law, DevQor shall not be liable for any indirect,
                                    incidental, special, consequential, or punitive damages. Our total liability shall
                                    not exceed the total amount paid by you for the specific service in question.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={900}>
                            <div className="policy-section">
                                <h2>10. Termination</h2>
                                <p>
                                    Either party may terminate the service agreement with written notice. Upon termination:
                                </p>
                                <ul>
                                    <li>All outstanding payments become immediately due</li>
                                    <li>Work completed up to termination will be delivered</li>
                                    <li>You will receive access to all work paid for</li>
                                    <li>Confidentiality obligations survive termination</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={1000}>
                            <div className="policy-section">
                                <h2>11. Governing Law</h2>
                                <p>
                                    These Terms of Service shall be governed by and construed in accordance with the
                                    laws of India. Any disputes shall be subject to the exclusive jurisdiction of the
                                    courts in Kolkata, West Bengal.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={1100}>
                            <div className="policy-section">
                                <h2>12. Contact Us</h2>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService
