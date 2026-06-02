import {
    FaSolarPanel,
    FaCamera,
    FaHome,
    FaBolt,
    FaBatteryFull,
    FaTools,
} from "react-icons/fa";

const servicesData = [
    {
        icon: <FaSolarPanel className="service-icon" />,
        title: "Solar Installation",
        description: "Reliable solar systems for homes and businesses.",
        details: "We provide end-to-end solar installation services including site assessment, system design, panel mounting, inverter setup, and grid connection. Our team handles both residential rooftop and commercial ground-mounted systems, ensuring maximum energy yield with high-efficiency panels and professional-grade mounting structures.",
    },
    {
        icon: <FaCamera className="service-icon" />,
        title: "CCTV Surveillance",
        description: "Advanced security camera systems for total protection.",
        details: "We install high-definition CCTV systems with night vision, motion detection, and remote monitoring via mobile app. Our solutions include indoor and outdoor cameras, DVR/NVR recorders, and optional cloud storage — tailored for homes, offices, and commercial properties with 24/7 recording capability.",
    },
    {
        icon: <FaHome className="service-icon" />,
        title: "Smart Automation",
        description: "Control lighting, security and appliances smartly.",
        details: "Transform your property with smart switches, automated lighting schedules, motorized blinds, smart locks, and voice-controlled assistants. We integrate everything into a single hub so you can manage your entire home or office from your phone or tablet.",
    },
    {
        icon: <FaBolt className="service-icon" />,
        title: "Electrical Wiring",
        description: "Professional electrical wiring and maintenance services.",
        details: "We handle new installations, rewiring, circuit breaker upgrades, lighting design, and electrical troubleshooting for residential and commercial clients. All work is done to code with proper earthing, surge protection, and safety certifications.",
    },
    {
        icon: <FaBatteryFull className="service-icon" />,
        title: "Inverter Systems",
        description: "Efficient inverter and battery backup solutions.",
        details: "We design and install inverter systems with lithium-ion or deep-cycle batteries to keep your home or business running during outages. Our solutions include automatic transfer switches, pure sine wave inverters, and scalable battery banks for extended backup time.",
    },
    {
        icon: <FaTools className="service-icon" />,
        title: "Maintenance & Support",
        description: "24/7 maintenance and technical support services.",
        details: "We offer annual maintenance contracts, emergency repairs, panel cleaning, system diagnostics, and firmware updates for all installed systems. Our support team is available around the clock to ensure your solar and electrical systems operate at peak performance.",
    },
];

export default servicesData;
