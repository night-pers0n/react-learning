import React, { useState } from 'react';

function LikeButton() {
  
  const [likes, setLikes] = useState(0);
  
  function handleLike() {
    setLikes(likes + 1);
  }
  
  return (
    <div>
      <button onclick={handleLike}>Like</button>
      <p>{likes} Likes</p>
    </div>
  );
  
}

export default LikeButton;