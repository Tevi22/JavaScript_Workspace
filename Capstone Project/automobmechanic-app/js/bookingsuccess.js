window.onload = function() {
    // Delay the rating prompt by 1 minute (in milliseconds)
    const delayDuration = 60 * 1000;
  
    setTimeout(promptRating, delayDuration);
  };
  
  function promptRating() {
    const rating = prompt('On a scale of 1-10, how likely are you to share our website with your family and friends?');
  
    if (rating >= 1 && rating <= 10) {
      alert('Thank you for your feedback');
    } else {
      alert('Invalid rating. Please provide a rating between 1 and 10 .');
    }
  }