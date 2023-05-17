let all = document.querySelector(".all");
console.log(all)
const webdesign = document.querySelector(".webd");
console.log('hi')
const mobile = document.querySelector(".mobilee");
const front = document.querySelector(".logoo");
const img = document.querySelectorAll(".imgg");
const webimg = document.querySelectorAll(".web");
const mobileimg = document.querySelectorAll(".mobile");
const logo = document.querySelectorAll(".logo");
console.log(logo)
all.addEventListener("click", function () {
  img.forEach((e) => {
    e.removeAttribute('class',"active");
     e.style.width = "400px ";
  });
});

webdesign.addEventListener("click", function () {
  mobileimg.forEach((e) => {
    // console.log(e);
e.setAttribute('class','active');


    // e.style.display = "none";
  });
  logo.forEach((e) => {
    e.setAttribute('class',"active");
    //   console.log(e);
    // e.style.display = "none";
  });
  webimg.forEach((e) => {
    e.removeAttribute('class',"active");
    e.style.width = "400px ";
  });
});
mobile.addEventListener("click", function () {
 mobileimg.forEach((e) => {
   // console.log(e);
   e.removeAttribute("class", "active");
      e.style.width = "400px ";
   // e.style.display = "none";
 });
 logo.forEach((e) => {
   e.setAttribute("class", "active");
   //   console.log(e);
   // e.style.display = "none";
 });
 webimg.forEach((e) => {
   e.setAttribute("class", "active");

 });
});
front.addEventListener("click", function () {
  mobileimg.forEach((e) => {
    // console.log(e);
    e.setAttribute("class", "active");

    // e.style.display = "none";
  });
  logo.forEach((e) => {
    e.removeAttribute("class", "active");
    e.style.width = "400px ";
    //   console.log(e);
    // e.style.display = "none";
  });
  webimg.forEach((e) => {
    e.setAttribute("class", "active");
  });
});
console.log("hihhhhhhhhhhhhhhhhhhhhhhhhhhhhh");