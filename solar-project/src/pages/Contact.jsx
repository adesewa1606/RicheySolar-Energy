import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";
import "../pages/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        text: "",
    });

    async function handleSubmit(event) {
        event.preventDefault();
        // alert("triggered")

        var templateParams = {
            name: formData.name,
            address: formData.address,
            email: formData.email,
            phone: formData.phone,
            text: formData.text,
        };

        const serviceID = "service_byqrqt9";
        const templateID = "template_pjbu30q";

        emailjs.send(serviceID, templateID, templateParams).then(
            (response) => {
                toast.success("Message sent successfully! We'll get back to you soon.");
                setFormData({ name: "", address: "", email: "", phone: "", text: "" });
            },
            (error) => {
                toast.error("Failed to send message. Please try again.");
            },
        );

    }



    return (

        <div id="contact" className="contact-page">

            <div className="contact-container">

                <div className="contact-heading">

                    <h2>Get In Touch</h2>

                    <p>
                        We would love to hear from you. Send us a message
                        and we'll respond as soon as possible.
                    </p>

                </div>

                <form id="contactForm" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        name="user_address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                address: e.target.value,
                            })
                        }
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                    />

                    <input
                        type="text"
                        name="user_phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                phone: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        name="user_text"
                        placeholder="Your Message"
                        value={formData.text}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                text: e.target.value,
                            })
                        }
                    />


                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </div>

    );

};

export default Contact;