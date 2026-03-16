const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
    // Ativa animações apenas quando o elemento entra em viewport.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}
