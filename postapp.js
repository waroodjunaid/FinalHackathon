// Select DOM Elements
const postForm = document.getElementById('postForm');
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');

// Event Listener for Form Submission
postForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // Get Form Data
    const title = postTitle.value.trim();
    const content = postContent.value.trim();

    if (title === '' || content === '') {
        alert('Please fill in both fields!');
        return;
    }

    // Create a New Post Element
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    // Add the Post to the Posts Container
    postsContainer.prepend(post); // Adds new posts at the top

    // Clear Form Inputs
    postTitle.value = '';
    postContent.value = '';
});