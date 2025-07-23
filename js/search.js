// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

// If no query is provided, just stop execution
if (!query) {
    document.getElementById('results').textContent = 'Please provide a search query.';
    throw new Error('No search query provided.');
}

// Fetch result offset from the URL
const offset = parseInt(urlParams.get('offset')) || 0;

const padding = 10; // Number of words before and after the query to show in the summary

function findSubarrayIndex(mainArray, subArray) {
  for (let i = 0; i <= mainArray.length - subArray.length; i++) {
    if (mainArray.slice(i, i + subArray.length).join() === subArray.join()) {
      return i; // Return the starting index
    }
  }
  return -1; // Return -1 if not found
}

makeElementForPosts = (post) => {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    // Create a title link for the post
    const titleLink = document.createElement('a');
    const titleText = document.createElement('h3');
    titleText.textContent = post.title;
    titleLink.href = post.url;
    titleLink.appendChild(titleText);
    postElement.appendChild(titleLink);

    // Create a summary of the words just before and after the query
    const summary = document.createElement('p');
    const words = post.content.split(' ');
    let queryIndex;
    // Find the index of the query in the words array, taking into account if the query is multiple words
    if (query.includes(' ')) {
        const queryWords = query.toLowerCase().split(' ');
        queryIndex = findSubarrayIndex(words.map(word => word.toLowerCase()), queryWords);
    } else {
        queryIndex = words.findIndex(word => word.toLowerCase().includes(query.toLowerCase()));
    }
    if (queryIndex !== -1) {
        const start = Math.max(0, queryIndex - padding);
        const end = Math.min(words.length, queryIndex + padding);
        let excerpt = words.slice(start, queryIndex).join(' ') + ' <strong>' + words.slice(queryIndex, queryIndex + (query.includes(' ') ? query.split(' ').length : 1)).join(' ') + '</strong> ' + words.slice(queryIndex + (query.includes(' ') ? query.split(' ').length : 1), end).join(' ');
        summary.innerHTML = excerpt;
    } else {
        summary.textContent = "No excerpt available.";
    }
    postElement.appendChild(summary);

    return postElement;
}

// Set the title of the page to the search query
document.title = `TWABL;DR | Search results for "${query}"`;

// Set the search box value to the search query
const searchBox = document.getElementById('search-box');
if (searchBox) {
    searchBox.value = query;
}

// Fetch posts.json
fetch('/posts.json')
    .then(response => response.json())
    .then(data => {
        const resultsContainer = document.getElementById('results');
        const results = data.filter(post => {
            // Check if the post content includes the query
            return post.content.toLowerCase().includes(query.toLowerCase());
        });

        // Display the first 10 results starting from the offset
        const start = offset;
        const end = start + 10;
        const paginatedResults = results.slice(start, end);
        if (paginatedResults.length > 0) {
            paginatedResults.forEach(post => {
                const postElement = makeElementForPosts(post);
                resultsContainer.appendChild(postElement);
            });
        } else {
            resultsContainer.textContent = 'No results found.';
        }

        // If there is an offset, provide a link to go back to the previous page
        if (offset > 0) {
            const backButton = document.createElement('button');
            backButton.textContent = 'Previous';
            backButton.style.marginRight = '10px';
            backButton.onclick = () => {
                const newOffset = Math.max(0, offset - 10);
                window.location.href = `?query=${encodeURIComponent(query)}&offset=${newOffset}`;
            };
            resultsContainer.appendChild(backButton);
        }

        // If there are more results, add a "Load More" button
        if (end < results.length) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Next Page';
            loadMoreButton.style.marginLeft = '10px';
            loadMoreButton.onclick = () => {
                const newOffset = offset + 10;
                window.location.href = `?query=${encodeURIComponent(query)}&offset=${newOffset}`;
            };
            resultsContainer.appendChild(loadMoreButton);
        }
    });