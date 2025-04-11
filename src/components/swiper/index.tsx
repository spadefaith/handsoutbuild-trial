import { $, component$, useOnDocument } from "@builder.io/qwik";
import swiper from 'swiper/bundle';

export const Swiper = component$(() => {

    useOnDocument("DOMContentLoaded", $(() => {
        new swiper('.swiper', {
            autoplay: {
                delay: 2000,
            },
            effect: 'fade',
            loop: true,
            speed: 1500,
            fadeEffect: {
                crossFade: true
            },
        });
    }))

    return (
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/images/banner/banner_1.png" class="h-[100vh] object-cover" alt="banner_1" loading="lazy" />
                    <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide">
                    <img src="/images/banner/banner_2.jpg" class="h-[100vh] object-cover" alt="banner_1" loading="lazy" />
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
        </div>
    )
})