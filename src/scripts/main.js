import '../styles/main.scss'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
window.Fancybox = Fancybox;

import 'slick-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .header__top-btn, .footer__go-top, .footer__top-col a").on("click",function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault()
		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500)
	});



    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClassClass('burger--follow')
        }
    }, 0); 
    $('.burger, .overlay, .header__top a').on('click', function(e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    }) 

    $('.footer__top-title--slide').on('click', function () {
        $(this).next().slideToggle('')
    })
})