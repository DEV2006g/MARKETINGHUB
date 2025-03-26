document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "All fields are required!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
    });

    // Smooth scroll for CTA button
    document.querySelector(".cta-btn").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    // GSAP Animations
    gsap.from("header h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("header p", { opacity: 0, y: 20, delay: 0.5, duration: 1 });
    gsap.from(".cta-btn", { opacity: 0, scale: 0.8, delay: 1, duration: 0.5 });

    gsap.from(".services h2", { opacity: 0, y: -20, duration: 1, scrollTrigger: ".services" });
    gsap.from(".service", { opacity: 0, x: -30, duration: 1, stagger: 0.2, scrollTrigger: ".services" });

    gsap.from("#contact h2", { opacity: 0, y: -20, duration: 1, scrollTrigger: "#contact" });
});

