// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.querySelector('#modal')
  const modalMessage = document.querySelector('#modal-message')
  const likes = [...document.getElementsByClassName('like-glyph')]


  likes.forEach( like => {
    like.addEventListener('click', () => {
      mimicServerCall()
      .then( () => {
        if (like.innerText === EMPTY_HEART){
          like.innerText = FULL_HEART
          like.classList.add('activated-heart')
        } else {
          like.innerText = EMPTY_HEART
          like.classList.remove('activated-heart')
        }
      })
      .catch(error => {
        errorModal.classList.remove('hidden')
        modalMessage.innerText = error
        setTimeout(() => {
          errorModal.classList.add('hidden')
          modalMessage.innerText = ''
        }, 3000)
      })
    })
  })
  /*
    grab the error modal and modal message
    get array of all likes
    iterate through and create event listeners for each like
      mimicServerCall acts as a fetch
        .catch failure status
          remove hidden from error modal
          display message in the modal
          setTimeout to hide the modal after 3 seconds
        if success and heart is empty
          change heart glyph to a full heart
          add .activated-heart class
        else
          change heart glyph to empty
          remove .activated-heart class
  */
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
