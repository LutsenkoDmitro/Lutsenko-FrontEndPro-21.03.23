function fetchPostById(postId) {
    return new Promise((resolve, reject) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const post = JSON.parse(xhr.responseText);
                resolve(post);
            } else {
                reject(new Error('Failed to fetch post'));
            }
        };
        xhr.onerror = function () {
            reject(new Error('Network error'));
        };
        xhr.send();
    });
}

function fetchCommentsByPostId(postId) {
    return new Promise((resolve, reject) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const comments = JSON.parse(xhr.responseText);
                resolve(comments);
            } else {
                reject(new Error('Failed to fetch comments'));
            }
        };
        xhr.onerror = function () {
            reject(new Error('Network error'));
        };
        xhr.send();
    });
}

function renderPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="commentsButton">Get Comments</button>
        <div id="commentsContainer"></div>
      `;

    const commentsButton = document.getElementById('commentsButton');
    commentsButton.addEventListener('click', () => {
        fetchCommentsByPostId(post.id)
            .then((comments) => {
                const commentsContainer = document.getElementById('commentsContainer');
                commentsContainer.innerHTML = '';
                comments.forEach((comment) => {
                    const commentElement = document.createElement('div');
                    commentElement.innerHTML = `
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
              `;
                    commentsContainer.appendChild(commentElement);
                });
            })
            .catch((error) => {
                console.error('Failed to fetch comments:', error);
            });
    });
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
    const postIdInput = document.getElementById('postIdInput');
    const postId = parseInt(postIdInput.value);
    if (!isNaN(postId) && postId >= 1 && postId <= 100) {
        fetchPostById(postId)
            .then((post) => {
                renderPost(post);
            })
            .catch((error) => {
                console.error('Failed to fetch post:', error);
            });
    } else {
        console.error('Invalid post ID');
    }
});