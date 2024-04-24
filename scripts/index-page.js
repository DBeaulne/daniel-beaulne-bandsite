/* Index Page Javascript */
// Object declaration
/* let comment = {
  username: 'username', // User's Full Name
  timestamp: 'mm/dd/year', // date of comment
  comment: 'comment-text', // comment text
}; */

const Comment = function (username, timestamp, comment) {
  this.username = username;
  this.timestamp = new Date().toLocaleDateString();
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
  inputFullName.username.value = '';
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

// Function to submit the comment
commentForm.addEventListener('submit', e => {
  e.preventDefault(); // prevent page reload

  if (nameField.classList.contains('form-error')) {
    nameField.classList.remove('form-error'); // check name input for 'form-error' class, if present, remove it.
  }
  if (commentField.classList.contains('form-error')) {
    commentField.classList.remove('form-error'); // check textarea for 'form-error' class, if present, remove it.
  }

  /*** Form validation
   * if the name input field or comment textarea is empty, attach 'form-error' class to the field or textarea
   * if the validation passes, post the new comment
   */

  if (e.target.username.value === '') {
    nameField.classList.add('form-error');
  } else if (e.target.comment.value === '') {
    commentField.classList.add('form-error');
  } else {
    const newComment = new Comment(e.target.username.value, e.timeStamp, e.target.comment.value); // comment Object
    comments.splice(0, 0, newComment);
    removeComments();
    newPopulateComments();
  }
});

// test data
let testComment = {
  name: 'Daniel Beaulne',
  comment: 'this is an amazing band!'
};

async function postCommentData(testComment) {
  const api = new BandSiteApi(API_KEY);
  console.log(api);
  console.log(testComment);
}

postCommentData(testComment);

// call hero image function and display the image at the path passed into the function
heroImage('./assets/Images/hero-bio.jpg');

// async function to get the comments through the API
async function getCommentData() {
  const api = new BandSiteApi(API_KEY);
  const newComments = await api.getComments();
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
