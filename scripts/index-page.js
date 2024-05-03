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
  (c.likes >= 1) ? commentLikeDisplayEle.innerText = c.likes : commentLikeDisplayEle.innerText = '';
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
// the section to include the new comment
const removeComments = () => {
  const parent = document.getElementById('previous-comments');
  parent.innerHTML = '';
  return;
};

// function to clear all the of the values from the form input fields
const removeInputValues = () => {
  const inputFullName = document.getElementsByTagName('input');
  inputFullName.name.value = '';
  const inputTextArea = document.getElementsByTagName('textarea');
  inputTextArea.comment.value = '';
  return;
};

// check if name input field contains numbers
const containsNumbers = (event) => {
  let str = event.target.name.value;
  return /\d/.test(str);
}

const nameField = document.getElementById('full-name');
const commentField = document.getElementById('comment-area');
// submit eventhandler function
function submitHandler(event) {
  
  event.preventDefault(); // prevent page reload
  
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

  
  if (event.target.name.value === '') {
    nameField.classList.add('form-error');
  } else if (containsNumbers(event) === true) {
    nameField.classList.add('form-error');
  } else if (event.target.comment.value === '') {
    commentField.classList.add('form-error');
  } else {
  const newComment = new Comment(event.target.name.value, event.target.comment.value); // new comment to send through API
  removeComments();
  removeInputValues();
  postCommentData(newComment)
  .then(result => populateComments()); // post the new comments, when the promise resolves, populate the updated comments.
  }
}

// function to watch for form submit event
const watchFormSubmit = () => {
  const commentForm = document.getElementById('commentForm');
  commentForm.addEventListener('submit', submitHandler);
}

// Function to handle the like button click event
const likeButtonHandler = (event) => {
  
  let tempStr = event.target.className.split(' ');
  let idExtraction = tempStr[1];

  // paas the extracted id to the likeComment API function, wait for the promise
  // then pass the result and id to the update likes function
  likeComment(idExtraction).then(result => updateLikes(result, idExtraction));
}

// function to update the span element that contains the likes count
const updateLikes = (result, id) => {
  const likeContainerEle = document.getElementById(id);
  likeContainerEle.innerText = result.likes;
  return;
}

// function to watch for click event on heart icon
const watchForLikes = (classNameStr) => {
  const parent = document.querySelectorAll(classNameStr);

  parent.forEach((value, index) => {
    parent[index].addEventListener('click', likeButtonHandler)}
)};


// Function to handle the delete button click event
const deleteButtonHandler = (event) => {

  // put event className in a temp string so we can extract the id with .split string method looking for the 
  // first empty space and then extracting the id
  // instead of using .slice, where we would have to make sure that we remembered to count the number of char before the id
  const tempStr = event.target.className.split(' ');
  let idExtraction = tempStr[1];
  
  // paas the extracted id to the likeComment API function, wait for the promise
  // then pass the result and id to the update likes function
  deleteComment(idExtraction)
  .then(result => removeComments())
  .then(result => populateComments());
}

// function to watch for click event on trash icon
const watchForTrash = (classNameStr) => {
  const parent = document.querySelectorAll(classNameStr);

  parent.forEach((value, index) => {
    parent[index].addEventListener('click', deleteButtonHandler)}
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
  return response;
}

// function to delete a comment, pass the comment id to the api
// and wait for the response back from the server.
async function deleteComment(id) {
  const api = new BandSiteApi(API_KEY);
  const response = await api.deleteComment(id);
  return response;
}

// async function to populate the comments retrieved from the getCommentData async function
async function populateComments() {
  const newComments = await getCommentData();
  newComments.forEach(c => {
    const commentSection = document.querySelector('#previous-comments');
    commentSection.append(createComment(c));
  });
  watchForLikes('.past-comments__icon--heart');
  watchForTrash('.past-comments__icon--trash-can');
}

// initiate on page load
watchFormSubmit();
populateComments();
