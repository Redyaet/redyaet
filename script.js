document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            // If the link is an anchor link, prevent default and scroll smoothly
            e.preventDefault();
            const targetID = href.substring(1);
            const targetSection = document.getElementById(targetID);
        if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const jsonData = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch(form.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset(); // Clear the form inputs
        } else {
            const errorText = await response.text();
            console.error("Error:", errorText);
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error occurred:", error);
        alert("An error occurred. Please try again.");
    }
});
