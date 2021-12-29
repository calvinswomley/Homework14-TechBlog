//add post
const addPostHandler = async (event) => {
    event.preventDefault();

    //define values
    const post_title = document.querySelector('#title-post').value.trim();
    const post_content = document.querySelector('#content-post').value.trim();

    //if then POST
    if (post_title && post_content) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ post_title, post_content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to add post.');
        }
    }
};

//delete post
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete Post.');
        }
    }
};

document
  .querySelector('.form-post')
  .addEventListener('submit', addPostHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

