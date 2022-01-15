console.log("Application!");
const reviews = document.querySelectorAll(".review");
const active = document.querySelector(".active");
const hiddens = document.querySelectorAll(".hidden");
const rightArrow = document.querySelectorAll("fa-chevron-right");
const leftArrow = document.querySelector("fa-chevron-left");

// rightArrow.forEach((ra) => {
//   ra.addEventListener("click", function () {
//     for (let i = 0; i < hiddens.length; i++) {
//       if (hiddens[i].classList.contains("show")) {
//         hiddens[i].classList.remove("show");
//         i++;
//         hiddens[i].classList.add("show");
//       }
//     }
//   });
// });

// leftArrow.addEventListener("click", () => {});

document.querySelector(".right1").addEventListener("click", () => {
  hiddens[0].classList.remove("active");
  hiddens[1].classList.add("active");
});

document.querySelector(".right2").addEventListener("click", () => {
  hiddens[1].classList.remove("active");
  hiddens[2].classList.add("active");
});

document.querySelector(".right3").addEventListener("click", () => {
  hiddens[2].classList.remove("active");
  hiddens[0].classList.add("active");
});

// LEFT ARROW START

document.querySelector(".left1").addEventListener("click", () => {
  hiddens[0].classList.remove("active");
  hiddens[2].classList.add("active");
});

document.querySelector(".left2").addEventListener("click", () => {
  hiddens[1].classList.remove("active");
  hiddens[0].classList.add("active");
});

document.querySelector(".left3").addEventListener("click", () => {
  hiddens[2].classList.remove("active");
  hiddens[1].classList.add("active");
});
