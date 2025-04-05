export function renderPost(post) {
  return `
      <div class="post-item" data-id="${post.id}">
        <h3>${post.name || "Unnamed"}</h3>
        <p><strong>Species:</strong> ${post.species || "N/A"}</p>
        <p><strong>Breed:</strong> ${post.breed || "N/A"}</p>
        <p><strong>Age:</strong> ${post.age || "N/A"}</p>
        <p><strong>Gender:</strong> ${post.gender || "N/A"}</p>
        <p><strong>Color:</strong> ${post.color || "N/A"}</p>
        <p><strong>Location:</strong> ${post.location || "N/A"}</p>
        <p><strong>Status:</strong> ${post.adoptionStatus || "N/A"}</p>
        ${
          post.image?.url
            ? `<img src="${post.image.url}" alt="${post.image.alt || "Pet image"}" width="200" />`
            : ""
        }
      </div>
      <hr/>
    `;
}

export function setupPostClickNavigation() {
  const container = document.getElementById("postsContainer");
  if (!container) return;

  container.addEventListener("click", (event) => {
    const postElement = event.target.closest(".post-item");
    if (!postElement) return;

    const postId = postElement.dataset.id;
    if (postId) {
      window.location.href = `/pets/?id=${postId}`;
    }
  });
}

export function renderMultiplePosts(posts) {
  const container = document.getElementById("postsContainer");
  if (!container) {
    console.error(`Container with ID '${postsContainer}' not found.`);
    return;
  }

  container.innerHTML = posts.map(renderPost).join("");
}
