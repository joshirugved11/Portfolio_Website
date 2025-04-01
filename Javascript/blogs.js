document.addEventListener("DOMContentLoaded", function () {
    // Your blog data
    const blogs = [
        { id: 1, title: "Blog Title 1", summary: "Short description of blog 1...", content: "Full content of Blog 1." },
        { id: 2, title: "Blog Title 2", summary: "Short description of blog 2...", content: "Full content of Blog 2." },
        { id: 3, title: "Blog Title 3", summary: "Short description of blog 3...", content: "Full content of Blog 3." },
        // Add more blogs here...
    ];

    const blogContainer = document.getElementById("blog-container");

    blogs.forEach(blog => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.summary}</p>
                <a href="blog.html?id=${blog.id}" class="read-more">Read More</a>
            </div>
        `;
        blogContainer.appendChild(blogCard);
    });
});
