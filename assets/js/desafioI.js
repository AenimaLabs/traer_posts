const postContainer = document.getElementById('post-data');

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    postContainer.innerHTML = ''; // Clear previous data

    const postList = document.createElement('ul');
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.textContent = `${post.title} - ${post.body}`;
      postList.appendChild(listItem);
    });
    postContainer.appendChild(postList);

  } catch (error) {
    console.error('Error fetching posts:', error);
    postContainer.innerHTML = '<p>Error fetching posts. Please try again later.</p>';
  }
}