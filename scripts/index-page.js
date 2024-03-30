/* Index Page Javascript */
// Object declaration
let comment = {
  username: 'username', // User's Full Name
  avatar_present: true,
  avatar: 'avatar-path', // path to user's avatar. Blank avatar's have placeholder color of Mercury
  timestamp: 'mm/dd/year', // date of comment
  comment: 'comment-text', // comment text
};

let comments = [
  {
    username: 'Victor Pinto',
    avatar_present: false,
    avatar: 'avatar-path',
    timestamp: '11/02/2023',
    comment:
      'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    username: 'Christina Cabrera',
    avatar_present: false,
    avatar: 'avatar-path',
    timestamp: '10/28/2023',
    comment:
      'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },
  {
    username: 'Isaac Tadesse',
    avatar_present: false,
    avatar: 'avatar-path',
    timestamp: '10/20/2023',
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const createComment = comment => {
  // Create elements
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('past_comments__container');

  const commentAvatar = document.createElement('div');
  commentAvatar.classList.add('past-comments__avatar');

  const commentAvatarImg = document.createElement('span');
  commentAvatarImg.classList.add('past-comments__avatar--avatar-img');

  const commentUser = document.createElement('div');
  commentUser.classList.add('past-comments__user');

  const commentUserInfo = document.createElement('div');
  commentUserInfo.classList.add('past-comments__user-info');

  const commentUsername = document.createElement('h3');
  commentUsername.classList.add('past-comments__user-name');
  commentUsername.innerText = comment.username;

  const commentTimestamp = document.createElement('h3');
  commentTimestamp.classList.add('past-comments__timestamp');
  commentTimestamp.innerText = comment.timestamp;

  const userComment = document.createElement('p');
  userComment.classList.add('past-comments__user-comment');
  userComment.innerText = comment.comment;

  const commentDivider = document.createElement('div');
  commentDivider.classList.add('divider');

  // Build component
  commentContainer.appendChild(commentAvatar);
  commentContainer.appendChild(commentUser);
  commentContainer.append(commentDivider);

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
}
