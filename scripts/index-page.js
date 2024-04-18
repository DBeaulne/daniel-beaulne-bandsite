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

// Function to create any element and attach a class to it
const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);
  return element;
};

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
  commentUsername.innerText = c.username;
  const commentTimestamp = makeElement('h3', 'past-comments__timestamp');
  commentTimestamp.innerText = c.timestamp;
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

const removeComments = () => {
  /** A function to clear all the comments from the page before we re-render
the comments to include the new comment */
  const parent = document.getElementById('previous-comments');
  parent.innerHTML = '';
  const inputFullName = document.getElementsByTagName('input');
  inputFullName.username.value = '';
  const inputTextArea = document.getElementsByTagName('textarea');
  inputTextArea.comment.value = '';
};

const populateComments = () => {
  /** Functional loop to popluate the comments section */
  for (const c of comments) {
    const commentSection = document.querySelector('#previous-comments'); // get the section ID
    /** call createCommen() passing in the index of the loop, and
     * append the created comment element to the section */
    commentSection.append(createComment(c));
  }
};

// Function to submit the comment
const commentForm = document.getElementById('commentForm');
const nameField = document.getElementById('full-name');
const commentField = document.getElementById('comment-area');

commentForm.addEventListener('submit', e => {
  e.preventDefault(); // prevent page reload

  if (nameField.classList.contains('form-error')) {
    // check name input to see if it has 'form-error' class
    nameField.classList.remove('form-error'); // attached. if present, remove it.
  }
  if (commentField.classList.contains('form-error')) {
    // check textares to see if it has 'form-error' class
    commentField.classList.remove('form-error'); // attached. if present, remove it.
  }

  /*** Form validation
   * if the name input field or comment textarea is empty, attach 'form-error' class to the field or textarea
   * otherwiser, if the validation passes, post the new comment
   */

  if (e.target.username.value === '') {
    nameField.classList.add('form-error');
  } else if (e.target.comment.value === '') {
    commentField.classList.add('form-error');
  } else {
    const newComment = new Comment(e.target.username.value, e.timeStamp, e.target.comment.value); // comment Object
    comments.splice(0, 0, newComment);
    removeComments();
    populateComments();
  }
});

const heroImage = url => {
  // a function to display the desired image for the hero section of the page
  const heroSection = document.querySelector('.hero');
  const showsHeroSectionImgUrl = url;
  heroSection.style.backgroundImage = 'url(' + showsHeroSectionImgUrl + ')';
};

// call hero image function and display the image at the path passed into the function
heroImage('./assets/Images/hero-bio.jpg');

// populate comments on page load
populateComments();
