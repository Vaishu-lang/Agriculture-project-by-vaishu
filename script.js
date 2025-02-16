function navigate(section) {
    let content = document.getElementById("content");

    let images = {
        home: "background 2.avif",
        crops: "crops & farming.webp",
        organic: "organic practices.webp",
        fertilizer: "organic fertilizer.webp",
        weather: "weather and soil.webp",
        contact: "contact.avif"
    };

    document.body.style.background = `url('${images[section]}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "100vw 100vh"; // Ensure it fits perfectly

    let texts = {
        home: "<h2>🌱 Welcome to Agriculture Hub</h2><p>Explore the beauty of farming and nature.</p>",
        crops: "<h2>🌾 Crops & Farming</h2><p>Learn about different crops and best farming practices.</p>",
        organic: "<h2>🌍 Organic Practices</h2><p>Discover eco-friendly and sustainable farming techniques.</p>",
        fertilizer: "<h2>🧑‍🌾 Organic Fertilizer</h2><p>Find out about natural fertilizers that enrich soil health.</p>",
        weather: "<h2>🌤️ Weather & Soil Info</h2><p>Understand how climate and soil affect agriculture.</p>",
        contact: `<h2>📩 Contact & Resources</h2>
                  <p>Get in touch with experts and find useful resources.</p>
                  <p>Email: <a href="mailto:vaishnavi.m1304@gmail.com">vaishnavi.m1304@gmail.com</a></p>`
    };

    content.innerHTML = `<div class="info-box floating">${texts[section]}</div>`;
}

// ✅ Show Home Page by Default When the Page Loads
window.onload = function () {
    navigate('home');
};