function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');

    allContents.forEach(content => {
        if (content !== element.nextElementSibling) {
            content.style.display = 'none';
        }
    });

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
