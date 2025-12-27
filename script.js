document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".container2 h1, .container2 h2, .container2 p");
    const imageElement = document.querySelector(".container2 img");

    // Initially apply hidden styles
    textElements.forEach(el => el.classList.add("hidden"));
    imageElement.classList.add("hidden-image");

    // Observer to trigger animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.remove("visible");
                entry.target.classList.add("hidden");
            }
        });
    }, { threshold: 0.3 });

    textElements.forEach(el => observer.observe(el));
    observer.observe(imageElement);

    // Ensure animations happen on first visit
    setTimeout(() => {
        textElements.forEach(el => el.classList.add("visible"));
        imageElement.classList.add("visible-image");
    }, 500); // Delays animation slightly for smoother effect
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".main h1");
    const leftSection = document.querySelector(".left2");
    const imageElement = document.querySelector(".right2 img");

    const myWorkHeading = document.querySelector(".mywrk h1");
    const formHeading = document.querySelector(".head h1");

    // Ensure correct initial states
    heading.classList.add("hidden", "slide-top");
    leftSection.classList.add("hidden", "slide-left");
    imageElement.classList.add("hidden-image");

    myWorkHeading.classList.add("hidden", "slide-top"); // Slide my work heading up
    formHeading.classList.add("hidden", "slide-top"); // Slide form heading up

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target === imageElement) {
                    entry.target.classList.add("visible-image");
                    entry.target.classList.remove("hidden-image");
                } else {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden");
                }
            } else {
                if (entry.target === imageElement) {
                    entry.target.classList.remove("visible-image");
                    entry.target.classList.add("hidden-image");
                } else {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("hidden");
                }
            }
        });
    }, { threshold: 0.3 });

    observer.observe(heading);
    observer.observe(leftSection);
    observer.observe(imageElement);
    observer.observe(myWorkHeading);
    observer.observe(formHeading);
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const deleteIcon = document.querySelector(".delete");
    const navContainer = document.querySelector(".nhead");

    burger.addEventListener("click", function () {
        navContainer.classList.add("visibal");
    });

    deleteIcon.addEventListener("click", function () {
        navContainer.classList.remove("visibal");
    });
});
