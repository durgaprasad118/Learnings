// document.querySelector("#images").addEventListener("click",function(e){
//    console.log("images clicked");
// });

// document.querySelector("#icecream").addEventListener("click",function(e){
//    console.log("icecream clicked");
// });

document.querySelector("#images").addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();
  }
});
