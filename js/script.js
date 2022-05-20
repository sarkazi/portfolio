



//var menu_item_xmpls = document.getElementById('item-menu-xmpls');
//var xmpls_submenu = document.getElementById('item-menu-xmpls-submenu');
//var nohover = document.getElementById('no-hover');






//menu_item_xmpls.onmouseup = function (e) {
//   xmpls_submenu.style.display = 'flex';
//   xmpls_submenu.style.position = 'absolute';
//   xmpls_submenu.style.top = '120%';
//   xmpls_submenu.style.flexDirection = 'column';
//   xmpls_submenu.style.rowGap = '10px';

//}


$(".item-menu-xmpls").on("click", function () {
   $(".item-menu-xmpls__list").toggle();
});















function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('design__head-show');
      }
   });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.design__head');
for (let elm of elements) {
   observer.observe(elm);
};





















$(document).ready(function () {
   $(window).scroll(function () {
      if ($(window).scrollTop() > 700) {
         $('#up-button').fadeIn(900)
      } else {
         $('#up-button').fadeOut(700)
      }
   });
});





$(document).ready(function ($) {
   $('#menu').fadeIn(0);
   $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
         $('#menu').fadeOut(900);
      } else {
         $('#menu').fadeIn(700);
      }
   });
});
$(document).ready(function ($) {
   $('#burger').fadeIn(0);
   $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
         $('#burger').fadeOut(900);
      } else {
         $('#burger').fadeIn(700);
      }
   });
});








