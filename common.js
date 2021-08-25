window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    console.log('Hello GUYs!');
    //Mobile Menu Srcipt

        const sideBar = document.querySelector('.m-m-menu'),
        sideBarOverlay = document.querySelector('.m-menu_overlay'),
        sideBarBtn = document.querySelector('.m-humburger');

        sideBarBtn.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                sideBar.classList.remove('open');
                sideBarOverlay.classList.remove('open');
                sideBarOverlay.style.display = 'none'
                document.documentElement.style.overflow = ''
            }
            else {
                this.classList.add('active');
                sideBar.classList.add('open');
                sideBarOverlay.classList.add('open');
                sideBarOverlay.style.display = '';
                document.documentElement.style.overflow = 'hidden'
            }
        });

        //ScrollTop Fixed menu
        const navMobile = document.querySelector('.m-mobile-nav');

        window.addEventListener('scroll', ()=>{
            if (document.documentElement.scrollTop > 80) {
                navMobile.classList.add('fix');
            }else {
                navMobile.classList.remove('fix')
            }
        })
});
