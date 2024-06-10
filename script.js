let h = document.querySelector(".hamburger").style;
let e = document.querySelectorAll(".lines");
let c = 1;
let l = document.querySelectorAll(".links");
let t = document.querySelectorAll(".topics");
let al = document.querySelectorAll(".u");
let f = () => {
  for (let i = 0; i < 6; i++) {
    l[i].style.display = "flex";
    l[i].style.width = "100%";
    // l[i].style.backgroundColor = "red";
    l[i].style.justifyContent = "flex-start";
    l[i].style.alignItems = "center";
    t[i].style.fontSize = "14px";
    // l[i].style.border = "solid 2px red";
    t[i].style.marginLeft = "0.25rem";
  }
};
let u = () => {
  for (let i = 0; i < 6; i++) {
    l[i].style.display = "grid";
    l[i].style.placeContent = "center";
    l[i].style.textAlign = "center";
    t[i].style.fontSize = "0.55rem";
    t[i].style.marginLeft = "0";
    l[i].style.margin = "0.25rem auto";
    // l[i].style.padding = "0.5rem";
  }
};

let menu = () => {
  if (c % 2 === 1) {
    e[0].style.transform = "translateY(7.5px) rotate(45deg)";
    e[1].style.opacity = "0";
    e[2].style.transform = "translateY(-7.5px) rotate(-45deg)";
    f();
    // console.log(t, l);
  } else {
    e[0].style.transform = "translateY(0) rotate(0deg)";
    e[1].style.opacity = "1";
    e[2].style.transform = "translateY(0) rotate(0deg)";
    u();
  }
  c++;
};