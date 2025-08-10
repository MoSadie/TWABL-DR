function updateHeaders(postContentDivId, postURL) {
    const postContentDiv = document.getElementById(postContentDivId);

    if (!postContentDiv) {
        console.warn("Post content div not found");
        return;
    }

    if (!postURL) {
        console.warn("Post URL not found");
        return;
    }

    // For each header, add a small clipboard icon after the header that copies the postURL#headerId
    // The icon only appears when hovering over the header

    const headers = postContentDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headers.forEach(header => {
        const headerId = header.id || header.textContent.toLowerCase().replace(/\s+/g, '-');
        header.id = headerId;  // Ensure header has an ID

        const linkIcon = document.createElement("a");
        linkIcon.innerHTML = "📋";
        linkIcon.style.marginLeft = "8px";
        linkIcon.style.display = "none"; // Hide initially
        linkIcon.style.textDecoration = "none";

        // Copy the link to the clipboard when clicked
        header.addEventListener("click", () => {
            navigator.clipboard.writeText(`${postURL}#${headerId}`);
            linkIcon.innerHTML = "✅";
            setTimeout(() => {
                linkIcon.innerHTML = "📋";
            }, 2000);
        });

        // Show the icon on hover
        header.addEventListener("mouseover", () => {
            linkIcon.style.display = "inline";
        });
        
        header.addEventListener("mouseout", () => {
            linkIcon.style.display = "none";
        });

        header.appendChild(linkIcon);
    });
}