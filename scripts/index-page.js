/* Index Page Javascript */
// Module imports
import { heroImage } from './functions.js';
import { makeElement } from './functions.js';
import { API_KEY, BandSiteApi } from './band-site-api.js';

// call hero image function and display the image at the path passed into the function
heroImage('./assets/Images/hero-bio.jpg');

// Comment class declaration
const Comment = function (username, comment) {
  this.name = username;
  this.comment = comment;
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
  commentUsername.innerText = c.name;
  const commentTimestamp = makeElement('h3', 'past-comments__timestamp');
  commentTimestamp.innerText = new Date(c.timestamp).toLocaleDateString();

  const userComment = makeElement('p', 'past-comments__user-comment');
  userComment.innerText = c.comment;

  const commentIconWrapper = makeElement('div', 'past-comments__icon-container');

  const commentLikeDisplayEle = makeElement('span', 'past-comments__likes');
  commentLikeDisplayEle.id = c.id;
  const commentLikeIconAnchor = makeElement('a', 'past-comments__icon');
  const commentLikeSVG = makeElement('img', 'past-comments__icon--heart');
  commentLikeSVG.classList.add(c.id);
  commentLikeSVG.src = './assets/Icons/SVG/heart.svg';


  const commentDeleteIconAnchor = makeElement('a', 'past-comments__icon');
  const commentDeleteSVG = makeElement('img', 'past-comments__icon--trash-can');
  commentDeleteSVG.classList.add(c.id);
  commentDeleteSVG.src = './assets/Icons/SVG/icon-delete.svg';


  // Build component
  parent.appendChild(commentAvatar);
  parent.appendChild(commentUser);

  commentAvatar.appendChild(commentAvatarImg);

  commentUser.appendChild(commentUserInfo);
  commentUser.appendChild(userComment);
  commentUser.appendChild(commentIconWrapper);

  commentUserInfo.appendChild(commentUsername);
  commentUserInfo.appendChild(commentTimestamp);

  commentIconWrapper.appendChild(commentLikeDisplayEle);
  commentIconWrapper.appendChild(commentLikeIconAnchor);
  commentLikeIconAnchor.appendChild(commentLikeSVG);
  commentIconWrapper.appendChild(commentDeleteIconAnchor);
  commentDeleteIconAnchor.appendChild(commentDeleteSVG);

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

function formValidation(event) {
  const nameField = document.getElementById('full-name');
  const commentField = document.getElementById('comment-area');

  // check all input fields for 'form-error' class, remove if present
  nameField.classList.contains('form-error') ? nameField.classList.remove('form-error') : false;
  commentField.classList.contains('form-error') ? commentField.classList.remove('form-error') : false;

  event.target.name.value === ''
    ? nameField.classList.add('form-error')
    : event.target.comment.value === ''
    ? commentField.classList.add('form-error')
    : true;
}

// submit eventhandler function
function submitHandler(event) {
  event.preventDefault(); // prevent page reload

  formValidation(event);

  const newComment = new Comment(event.target.name.value, event.target.comment.value); // new comment to send through API
  removeComments();
  postCommentData(newComment).then(result => populateComments()); // post the new comments, when the promise resolves, populate the updated comments.
}

const commentForm = document.getElementById('commentForm');
commentForm.addEventListener('submit', submitHandler);

const likeButtonHandler = (event) => {
  let stringExtraction = event.target.className;
  let newString = stringExtraction.slice(27);
  likeComment(newString).then(result => updateLikes(result, newString));
}

const updateLikes = (result, id) => {
  const likeContainerEle = document.getElementById(id);
  likeContainerEle.innerText = result.likes;
}

const watchForLikes = () => {
  const pastCommentsContainer = document.querySelectorAll('.past-comments__container');

  pastCommentsContainer.forEach((value, index) => {
    pastCommentsContainer[index].addEventListener('click', likeButtonHandler)}
)};




/**Async Functions */

// function to call the postComment API, pass in the new comment
// and wait for response back from server
async function postCommentData(comment) {
  const api = new BandSiteApi(API_KEY);
  const response = await api.postComment(comment);
  return response;
}

// function to get the comments through the API
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

// function to like a comment, pass the comment id to the api
// and wait for the response back from the server.
async function likeComment(id) {
  const api = new BandSiteApi(API_KEY);
  const response = await api.likeComment(id);
  return response
}

// async function to populate the comments retrieved from the getCommentData async function
async function populateComments() {
  const newComments = await getCommentData();
  newComments.forEach(c => {
    const commentSection = document.querySelector('#previous-comments');
    commentSection.append(createComment(c));
  });
  watchForLikes();
}

// populate comments on page load
populateComments();
