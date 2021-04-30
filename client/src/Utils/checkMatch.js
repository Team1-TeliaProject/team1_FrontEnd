import { useState, useEffect } from 'react';

export const checkMatch = (userId, guest) => {
  const [isMatched, setIsMatched] = useState(false);

  const guestLikes = guest.likes;

  console.log('test-at-func', guest);

  return isMatched;
};
