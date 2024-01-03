// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
let liker = document.querySelectorAll(".like-glyph");
// Your JavaScript code goes here!iker
function likerApp(e) {
  let like = e.target;
  mimicServerCall()
    .then((serverMessage) => {
      alert(serverMessage);
      like.classList.toggle("activated-heart"),
        like.innerText = like.innerText === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
    })
    .catch((error) => {
      let errorText = document.querySelector(".hidden");
      errorText.remove();
      let p = document.querySelector("#modal-message");
      document.body.append(p);
    });
}
//console.log(liker)
for (i = 0; i < liker.length; i++) {
  liker[i].addEventListener("click", likerApp);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

