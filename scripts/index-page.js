/* Index Page Javascript */
// Object declaration
let comment = {
  username: 'username', // User's Full Name
  timestamp: 'mm/dd/year', // date of comment
  comment: 'comment-text', // comment text
};

let comments = [
  {
    username: 'Victor Pinto',
    timestamp: '11/02/2023',
    comment:
      'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    username: 'Christina Cabrera',
    timestamp: '10/28/2023',
    comment:
      'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },
  {
    username: 'Isaac Tadesse',
    timestamp: '10/20/2023',
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Function to submit the comment
const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', e => {
  e.preventDefault();
  const fullnameInputVal = e.target.username.value;
  const commentInputVal = e.target.comment.value;
  console.log(fullnameInputVal);
  console.log(commentInputVal);
});

// Function to create any element and attach a class to it
const makeElement = (elem, className) => {
  const element = document.createElement(elem);
  element.classList.add(className);

  return element;
};

// Function to create a comment component
const createComment = comment => {
  // props to Hugo Stahelin for setting me on the right path with this code
  // Create elements
  const commentContainer = makeElement('div', 'past-comments__container');
  const commentAvatar = makeElement('div', 'past-comments__avatar');
  const commentAvatarImg = makeElement('span', 'past-comments__avatar--avatar-img');
  const commentUser = makeElement('div', 'past-comments__user');
  const commentUserInfo = makeElement('div', 'past-comments__user-info');
  const commentUsername = makeElement('h3', 'past-comments__user-name');
  commentUsername.innerText = comment.username;
  const commentTimestamp = makeElement('h3', 'past-comments__timestamp');
  commentTimestamp.innerText = comment.timestamp;
  const userComment = makeElement('p', 'past-comments__user-comment');
  userComment.innerText = comment.comment;

  // Build component
  commentContainer.appendChild(commentAvatar);
  commentContainer.appendChild(commentUser);

  commentAvatar.appendChild(commentAvatarImg);

  commentUser.appendChild(commentUserInfo);
  commentUser.appendChild(userComment);

  commentUserInfo.appendChild(commentUsername);
  commentUserInfo.appendChild(commentTimestamp);

  return commentContainer;
};

for (const c of comments) {
  const commentSection = document.querySelector('#previous-comments');
  commentSection.append(createComment(c));
  commentSection.append(makeElement('div', 'divider'));
}
