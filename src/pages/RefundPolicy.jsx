import ScrollReveal from '../components/ScrollReveal'
import './RefundPolicy.css'

function RefundPolicy() {
    return (
        <div className="refund-page">
            {/* Hero Section */}
            <section className="refund-hero">
                <div className="refund-hero__bg">
                    <div className="refund-hero__glow"></div>
                </div>
                <div className="container">
                    <div className="refund-hero__content">
                        <h1 className="refund-hero__title animate-fadeInUp">
                            Refund <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="refund-hero__description animate-fadeInUp delay-200">
                            Understanding our refund and cancellation policies.
                        </p>
                        <p className="refund-hero__date animate-fadeInUp delay-300">
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="refund-content section">
                <div className="container">
                    <div className="refund-container">
                        <ScrollReveal animation="fadeUp">
                            <div className="policy-section">
                                <h2>1. Overview</h2>
                                <p>
                                    At DevQor, we are committed to delivering high-quality software development services.
                                    We understand that circumstances may change, and we have established this refund policy
                                    to ensure fairness for both parties. Please read this policy carefully before engaging
                                    our services.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={100}>
                            <div className="policy-section">
                                <h2>2. Project Cancellation</h2>
                                <h3>Before Project Commencement</h3>
                                <p>
                                    If you decide to cancel your project before work has commenced, you are eligible for
                                    a full refund of any advance payment made, minus a 5% processing fee to cover
                                    administrative costs.
                                </p>
                                <h3>During Discovery/Planning Phase</h3>
                                <p>
                                    If cancellation occurs during the discovery or planning phase (typically the first
                                    1-2 weeks), a refund of 70% of the advance payment will be provided. The remaining
                                    30% covers the work completed during this phase.
                                </p>
                                <h3>During Development Phase</h3>
                                <p>
                                    Once development has begun, refunds will be calculated based on the work completed.
                                    You will receive all deliverables for the amount paid, and any unused portion of
                                    milestone payments may be refunded at our discretion.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={200}>
                            <div className="policy-section">
                                <h2>3. Milestone-Based Projects</h2>
                                <p>
                                    For projects structured around milestones:
                                </p>
                                <ul>
                                    <li>Payments for completed and approved milestones are non-refundable.</li>
                                    <li>If a milestone is in progress, the refund will be prorated based on the percentage of work completed.</li>
                                    <li>Any unused milestone payments can be applied to future projects within 6 months.</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={300}>
                            <div className="policy-section">
                                <h2>4. Hourly/Retainer Engagements</h2>
                                <p>
                                    For hourly or retainer-based engagements:
                                </p>
                                <ul>
                                    <li>Hours already worked are non-refundable and will be billed accordingly.</li>
                                    <li>Unused hours in a monthly retainer can be carried forward for up to 2 months.</li>
                                    <li>Cancellation of retainer agreements requires 15 days written notice.</li>
                                    <li>Refunds for unused retainer hours will be processed within 7-10 business days.</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={400}>
                            <div className="policy-section">
                                <h2>5. Quality Guarantee</h2>
                                <p>
                                    We stand behind the quality of our work:
                                </p>
                                <ul>
                                    <li>If deliverables do not meet the agreed-upon specifications, we will work to resolve the issues at no additional cost.</li>
                                    <li>If we are unable to deliver the agreed functionality after reasonable attempts, a partial or full refund may be provided.</li>
                                    <li>All claims must be made within 14 days of deliverable submission.</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={500}>
                            <div className="policy-section">
                                <h2>6. Non-Refundable Items</h2>
                                <p>
                                    The following are non-refundable:
                                </p>
                                <ul>
                                    <li>Third-party software licenses or subscriptions purchased on your behalf</li>
                                    <li>Domain registrations and hosting fees</li>
                                    <li>Rush/expedited service fees</li>
                                    <li>Consultation fees for completed sessions</li>
                                    <li>Custom design work that has been approved</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={600}>
                            <div className="policy-section">
                                <h2>7. Refund Process</h2>
                                <p>
                                    To request a refund:
                                </p>
                                <ol>
                                    <li>Email us at <a href="mailto:contact@devqor.in">contact@devqor.in</a> with your refund request.</li>
                                    <li>Include your project details and reason for the refund request.</li>
                                    <li>Our team will review your request within 3-5 business days.</li>
                                    <li>If approved, refunds will be processed within 7-10 business days.</li>
                                    <li>Refunds will be issued via the original payment method when possible.</li>
                                </ol>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={700}>
                            <div className="policy-section">
                                <h2>8. Dispute Resolution</h2>
                                <p>
                                    If you have concerns about a refund decision:
                                </p>
                                <ul>
                                    <li>Contact our management team directly for escalation.</li>
                                    <li>We are committed to finding a fair resolution for all parties.</li>
                                    <li>If necessary, we may engage a neutral third-party mediator.</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeUp" delay={800}>
                            <div className="policy-section">
                                <h2>9. Contact Us</h2>
                                <p>
                                    If you have any questions about our refund policy, please contact us:
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

export default RefundPolicy
