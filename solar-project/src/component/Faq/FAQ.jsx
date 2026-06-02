import "../../component/Faq/FAQ.css";
import { useState } from "react";

const FAQ = () => {

    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "How long do solar panels last?",
            answer:
                "Most solar panels last between 25 to 30 years.",
        },

        {
            question: "Do CCTV cameras work without light?",
            answer:
                "Yes, modern CCTV systems include infrared night vision.",
        },

        {
            question: "What smart devices do you install?",
            answer:
                "We install smart locks, lighting, sensors and automation systems.",
        },

        {
            question: "Can solar panels power my whole house?",
            answer:
                "Yes, depending on your energy consumption and system size.",
        },

        {
            question: "Do you offer maintenance services?",
            answer:
                "Yes, we provide full maintenance and technical support.",
        },

        {
            question: "How long does installation take?",
            answer:
                "Most installations are completed within 1 to 3 days.",
        },

        {
            question: "Can I monitor my CCTV remotely?",
            answer:
                "Yes, all our CCTV systems support mobile monitoring.",
        },

        {
            question: "Do smart systems work with Alexa?",
            answer:
                "Yes, many of our automation systems integrate with Alexa and Google Home.",
        },

    ];


    return (
        <section className="faq">

            <h2>Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (

                <div
                    className="faq-item"
                    key={index}
                >

                    <div
                        className="faq-question"
                        onClick={() =>
                            setActive(active === index ? null : index)
                        }
                    >
                        {faq.question}
                    </div>

                    {active === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}

                </div>

            ))}

        </section>
    );
};

export default FAQ;
