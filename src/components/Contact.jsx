import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    // Input handling
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit with EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(() => {
                setSent(true);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                alert("Failed to send! Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-desc">
                    Have questions or feedback about Pustak Ghar? We’d love to hear from you!
                </p>

                {sent ? (
                    <div className="contact-success">✅ Your message has been sent! Thank you.</div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="contact-input"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="contact-textarea"
                            rows={4}
                        />
                        <button type="submit" className="contact-btn" disabled={loading}>
                            {loading ? (
                                <span className="contact-spinner"></span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
