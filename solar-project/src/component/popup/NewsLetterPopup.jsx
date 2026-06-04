import "./Popup.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const NewsletterPopup = () => {

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isSubmitted ? "auto" : "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSubmitted]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            formData.name.trim() === "" ||
            formData.address.trim() === "" ||
            formData.email.trim() === "" ||
            formData.phone.trim() === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        const btn = document.getElementById("button");
        btn.value = "Sending...";

        const serviceID = "service_byqrqt9";
        const templateID = "template_pjbu30q";

        // alert("Form submitted successfully! We will get back to you soon.");

        var templateParams = {
            name: formData.name,
            address: formData.address,
            email: formData.email,
            phone: formData.phone,
        };

        emailjs.send(serviceID, templateID, templateParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitted(true);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    };

    if (isSubmitted) return null;

    return (

        <div className="popup-overlay">

            <div className="popup">

                <h2>
                    Get Free Solar Consultation
                </h2>

                <p className="popup-text">
                    Fill the form below before accessing the website.
                </p>

                <form id="newsletterForm" onSubmit={handleSubmit}>
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

                    <button
                        id="button"
                        type="submit"
                        className="submit-btn"
                    >
                        Continue To Website
                    </button>

                </form>

            </div>

        </div>
    );
};

export default NewsletterPopup;
