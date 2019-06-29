$(document).ready(function () {
    var link = $('.menu-link');
    var linkActive = $('.menu-link_active');
    var menu = $('.menu');
    var navLink = $('.menu a');

    link.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    navLink.click(function(){
        link.removeClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
});