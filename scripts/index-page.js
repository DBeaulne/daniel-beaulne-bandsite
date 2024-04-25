/* Index Page Javascript */
// Object declaration
/* let comment = {
  username: 'username', // User's Full Name
  timestamp: 'mm/dd/year', // date of comment
  comment: 'comment-text', // comment text
}; */

const Comment = function (username, comment) {
  this.name = username;
  this.comment = comment;
};

let comments = [
  // hard-coded array of objects containing the comments
  {
    username: 'Victor Pinto',
    timestamp: '11/02/2023',
    comment:
      'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
  },
  {
    username: 'Christina Cabrera',
    timestamp: '10/28/2023',
    comment:
      'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
  },
  {
    username: 'Isaac Tadesse',
    timestamp: '10/20/2023',
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
];

// Function to create a comment component
const createComment = c => {
  // props to Hugo Stahelin for setting me on the right path with this code
  // Create elements
  const parent = makeElement('div', 'past-comments__container');
  const commentAvatar = makeElement('div', 'past-comments__avatar');
  const commentAvatarImg = makeElement('span', 'past-comments__avatar--avatar-img');
  const commentUser = makeElement('div', 'past-comments__user');
  const commentUserInfo = makeElement('div', 'past-comments__user-info');
  const commentUsername = makeElement('h3', 'past-comments__user-name');
  commentUsername.innerText = c.name;
  const commentTimestamp = makeElement('h3', 'past-comments__timestamp');
  commentTimestamp.innerText = new Date(c.timestamp).toLocaleDateString();

  const userComment = makeElement('p', 'past-comments__user-comment');
  userComment.innerText = c.comment;

  // Build component
  parent.appendChild(commentAvatar);
  parent.appendChild(commentUser);

  commentAvatar.appendChild(commentAvatarImg);

  commentUser.appendChild(commentUserInfo);
  commentUser.appendChild(userComment);

  commentUserInfo.appendChild(commentUsername);
  commentUserInfo.appendChild(commentTimestamp);

  return parent;
};

// A function to clear all the comments from the page before we re-render
// the comments to include the new comment
const removeComments = () => {
  const parent = document.getElementById('previous-comments');
  parent.innerHTML = '';
  const inputFullName = document.getElementsByTagName('input');
  inputFullName.name.value = '';
  const inputTextArea = document.getElementsByTagName('textarea');
  inputTextArea.comment.value = '';
};

// Function to popluate the comments section
// first get the section ID as the section is empty save for <section id="previous-comments"
// then call createComment(), passing in the index of the loop, and then append
// the created element to the section
/* const populateComments = () => {
  for (const c of comments) {
    const commentSection = document.querySelector('#previous-comments');
    commentSection.append(createComment(c));
  }
}; */

const commentForm = document.getElementById('commentForm');
const nameField = document.getElementById('full-name');
const commentField = document.getElementById('comment-area');

// submit eventhandler function
function submitHandler(e) {
  e.preventDefault(); // prevent page reload

  // check all input fields for 'form-error' class, remove if present
  if (nameField.classList.contains('form-error')) {
    nameField.classList.remove('form-error');
  }
  if (commentField.classList.contains('form-error')) {
    commentField.classList.remove('form-error');
  }

  // Form validation
  if (e.target.name.value === '') {
    nameField.classList.add('form-error');
  } else if (e.target.comment.value === '') {
    commentField.classList.add('form-error');
  } else {
    const newComment = new Comment(e.target.name.value, e.target.comment.value); // new comment to send through API
    removeComments();
    postCommentData(newComment).then(result => newPopulateComments());
    // newPopulateComments();
  }
}

commentForm.addEventListener('submit', submitHandler);

async function postCommentData(comment) {
  const api = new BandSiteApi(API_KEY);
  const response = await api.postComment(comment);
  console.log(api);
  console.log(comment);
}

// call hero image function and display the image at the path passed into the function
heroImage('./assets/Images/hero-bio.jpg');

// async function to get the comments through the API
// sort the fetched comments by most recent
// return the comments
async function getCommentData() {
  const api = new BandSiteApi(API_KEY);
  let newComments = await api.getComments();

  newComments.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });

  return newComments;
}

// async function to populate the comments retrieved from the getCommentData async function
async function newPopulateComments() {
  const newComments = await getCommentData();
  newComments.forEach(c => {
    const commentSection = document.querySelector('#previous-comments');
    commentSection.append(createComment(c));
  });
}

// populate comments on page load
// populateComments();
newPopulateComments();
