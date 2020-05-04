const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') { //When Search Box is out
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else { //When inside
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto'; //clickable
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") { //When slidemenu in
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else { //when out
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})