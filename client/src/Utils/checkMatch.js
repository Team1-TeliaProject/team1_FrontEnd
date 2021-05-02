export const checkMatch = (userId, userType, guest, userlikes, userSuperlikes, jobList, jobId) => {
  const guestLikes = guest.likes;
  const guestSuperlikes = guest.superLikes;

  if (userType === 'talent') {
    if (guestLikes.includes(userId) && userlikes.includes(jobId)) {
      return 'match';
    } else if (guestSuperlikes.includes(userId) && userSuperlikes.includes(jobId)) {
      return 'supermatch';
    } else if (guestLikes.includes(userId) && userSuperlikes.includes(jobId)) {
      return 'match';
    } else if (guestSuperlikes.includes(userId) && userlikes.includes(jobId)) {
      return 'match';
    } else {
      return null;
    }
  } else {
    if (guestLikes.includes(...jobList) && userlikes.includes(guest.id)) {
      return 'match';
    } else if (guestSuperlikes.includes(...jobList) && userSuperlikes.includes(guest.id)) {
      return 'supermatch';
    } else if (guestLikes.includes(...jobList) && userSuperlikes.includes(guest.id)) {
      return 'match';
    } else if (guestSuperlikes.includes(...jobList) && userlikes.includes(guest.id)) {
      return 'match';
    } else {
      return null;
    }
  }
};
