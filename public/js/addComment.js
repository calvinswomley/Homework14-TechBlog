//add comment
const addCommentHandler = async (event) => {
    event.preventDefault();

    //define values
    const comment_content = document.querySelector('#content-comment').value.trim();

    //if then POST
    if (comment_content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to add comment.');
        }
    }
};

document
  .querySelector('.form-comment')
  .addEventListener('submit', addCommentHandler);