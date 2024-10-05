let menu = document.querySelector(".hb");
const dark = document.querySelector(".dark__body");
const menuExit = document.querySelector(".menu-exit");
menu.addEventListener("click", openList);
function openList() {
  menu.classList.add("hb--open");
  dark.style.display = 'block';
  setTimeout(function() {
    dark.style.backgroundColor = "rgba(0,0,0,0.75)";
  }, 250);
}
dark.addEventListener('click', closeList)
menuExit.addEventListener("click", closeList);
function closeList() {
  menu.classList.remove("hb--open");
  dark.style.backgroundColor = "transparent";
  setTimeout(function() {
    dark.style.display= 'none';
  },100)
}
1
2
3
4
5
6
7
8
9
10
11
12