document.addEventListener("DOMContentLoaded", () => {
    const servicesLink = document.querySelector('nav ul li a[href="#services"]');
    const servicesSection = document.querySelector("#services");

    servicesLink.addEventListener("click", (event) => {
        event.preventDefault();
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });

    const appointmentLink = document.querySelector('nav ul li a[href="#appointment"]');
    const appointmentSection = document.querySelector("#appointment");
    appointmentLink.addEventListener("click", (e) => {
        e.preventDefault();
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
    });

    const doctorsLink = document.querySelector('nav ul li a[href="#doctors"]');
    const doctorsSection = document.querySelector("#doctors");
    doctorsLink.addEventListener("click", (e) => {
        e.preventDefault();
        doctorsSection.scrollIntoView({ behavior: 'smooth' });
    });

    const contactLink = document.querySelector('nav ul li a[href="#contact"]');
    const contactSection = document.querySelector("#contact");
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
