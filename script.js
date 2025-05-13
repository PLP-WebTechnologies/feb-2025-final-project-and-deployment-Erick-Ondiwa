// Load posts from localStorage
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Load posts on page load
window.onload = () => displayPosts();

function displayPosts() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';
  posts.forEach((post, index) => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.substring(0, 100)}...</p>
    `;
    div.onclick = () => viewFullPost(index);
    postList.appendChild(div);
  });
}

function openPostForm() {
  document.getElementById('post-form-modal').style.display = 'block';
}

function closePostForm() {
  document.getElementById('post-form-modal').style.display = 'none';
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
}

function addPost() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (!title || !content) {
    alert('Please fill in all fields!');
    return;
  }

  const post = { title, content };
  posts.unshift(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  closePostForm();
  displayPosts();
}

function viewFullPost(index) {
  const post = posts[index];
  alert(`Title: ${post.title}\n\n${post.content}`);
}
