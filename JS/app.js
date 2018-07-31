console.log("Siema");

var mobile = window.matchMedia("screen and (max-width: 760px)");
var menu = document.querySelector('nav');
var menuTrigger = document.getElementById('menuTrigger');

if (mobile.matches) {
    menu.classList.add('hidden');
    menuTrigger.classList.remove('hidden');
} else  {
    menuTrigger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.remove('mobile-menu');
}

mobile.addListener( function(mobile) {
    if (mobile.matches) {
        menu.classList.add('hidden');
        menuTrigger.classList.remove('hidden');
    } else  {
        menuTrigger.classList.add('hidden');
        menu.classList.remove('hidden');
        menu.classList.remove('mobile-menu');
    }
});

menuTrigger.addEventListener('click', function () {
   menu.classList.toggle('hidden');
   menu.classList.toggle('mobile-menu')
});