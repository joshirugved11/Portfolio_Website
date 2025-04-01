document.addEventListener("DOMContentLoaded", function () {
    // Define your blog content
    const blogs = {
        1: { title: "Blog Title 1", content: "Full content of Blog 1..." },
        2: { title: "Blog Title 2", content: "Full content of Blog 2..." },
        3: { title: "Blog Title 3", content: "Full content of Blog 3..." },
        // Add more blogs here as needed
    };

    // Get the blog ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id");

    // Check if the blog ID exists in the data
    if (blogId && blogs[blogId]) {
        document.getElementById("blog-title").textContent = blogs[blogId].title;
        document.getElementById("blog-content").textContent = blogs[blogId].content;
    } else {
        // Display a message if the blog is not found
        document.getElementById("blog-title").textContent = "Blog Not Found";
        document.getElementById("blog-content").textContent = "Oops! The blog you're looking for doesn't exist.";
    }
});
