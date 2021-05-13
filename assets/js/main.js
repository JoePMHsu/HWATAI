$(function () {
    $(window).scroll(onScrollStatus);
    $(window).resize(window_resize);
    window_resize();
    setNav();
    init();
    setSlick();
});

window.onload = function () {
    // _isDomLoaded = true;
    toHideLoading();
}

function toHideLoading() {

    var $loadPage = $('.loadingPage');

    // homeInitAni();
    gsap.to($loadPage, {
        duration: 1,
        autoAlpha: 0,
        onComplete: function () {
            $loadPage.css({
                'display': 'none',
                // 'visibility': 'visible',
                // 'opacity': '1',
                // 'z-index': '0'
            });
        }
    });
}


var DW, DH;

function window_resize() {

    DW = window.innerWidth;
    DH = window.innerHeight;

}
function onScrollStatus() {
    var getScrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    //console.log(getScrollTop);

    if (getScrollTop > 500) {
        gsap.to('.btnTop', { duration: 0.3, autoAlpha: 1, ease: "power2.inOut" });
    }else{
        gsap.to('.btnTop', { duration: 0.3, autoAlpha: 0, ease: "power2.inOut" });
    }
}

function init() {

    // LEARN

    for (var i = 0; i < 5; i++) {
        $('.learnNav_' + i).off('click').on('click', { id: i }, function (e) {
            var id = e.data.id;
            console.log('LEARN_ID:', id);

            for (var j = 0; j < 5; j++) {
                if (id == j) {
                    $('.slick_' + id).css('display', 'block');
                    $('.slick_' + id).css('position', 'relative');
                } else {
                    $('.slick_' + j).css('display', 'none');
                    $('.slick_' + j).css('position', 'absolute');
                }
            }
        });
    }

    // QA

    $('.QA-cont-box-item-A').slideUp();

    $('.QA-cont-box-item').data('isOpen', false);

    $('.QA-cont-box-item-Q').off('click').on('click', function () {

        var $item = $(this).parent('.QA-cont-box-item');
        var activeLine = $item.find(".item-line");

        if ($item.data('isOpen')) {
            $item.data('isOpen', false);
            $item.children(".QA-cont-box-item-A").slideUp();
            gsap.to(activeLine, { duration: 0.3, rotation: 0, ease: "power2.inOut" })
        } else {
            $item.data('isOpen', true);
            $item.children(".QA-cont-box-item-A").slideDown();
            gsap.to(activeLine, { duration: 0.3, rotation: 90, ease: "power2.inOut" })
        }
    });

    for (var x = 0; x < 5; x++) {
        $('.qaNav_' + x).off('click').on('click', { id: x }, function (e) {
            var id = e.data.id;
            console.log('QA_ID:', id);

            $('.QA-cont-box-item-A').slideUp();
            $('.QA-cont-box-item').data('isOpen', false);
            gsap.set(".item-line", { rotation: 0 });


            for (var y = 0; y < 5; y++) {
                if (id == y) {
                    $('.qaNav_' + id).css({
                        'color': '#fff',
                        'background-color': '#d04e71'
                    });
                    $('.qaBox_' + id).css('display', 'block');
                } else {
                    $('.qaNav_' + y).css({
                        'color': '#d04e71',
                        'background-color': '#fff'
                    });
                    $('.qaBox_' + y).css('display', 'none');
                }
            }
        });
    }

    // BTN_TOP

    $('.btnTop').off('click').on('click', function () {
        gsap.to(window, { duration: 0.6, scrollTo: { y: 0 } });
    });

}

//----------------------------------------PAGE_STATUS

//----------------------------------------NAV

var isNavOpen = false;

function setNav() {
    for (var i = 0; i < 5; i++) {
        $('.btnNav' + i).on('click', { id: i }, function (e) {
            setNavStatus(e.data.id);
        });
    }

    $('.nav__mobile-btn').on('click', function () {
        if (!isNavOpen) {
            setMobileNavOpen();
        } else {
            setMobileNavClose();
        }
    });
}

function setMobileNavOpen() {
    isNavOpen = true;
    gsap.to('.nav__mobile-page', { duration: 0.6, css: { 'right': '0%' }, ease: "power4.inOut" });

    gsap.to('.HBLine0', { duration: 0.3, y: 6, rotation: -135, ease: "power2.inOut" });
    gsap.to('.HBLine1', { duration: 0.3, scaleX: 0, ease: "power2.inOut" });
    gsap.to('.HBLine2', { duration: 0.3, y: -6, rotation: 135, ease: "power2.inOut" });
}

function setMobileNavClose() {
    isNavOpen = false;
    gsap.to('.nav__mobile-page', 0.6, { css: { 'right': '-100%' }, ease: "power4.inOut" });

    gsap.to('.HBLine0', { duration: 0.3, y: 0, rotation: 0, ease: "power2.inOut" });
    gsap.to('.HBLine1', { duration: 0.3, scaleX: 1, ease: "power2.inOut" });
    gsap.to('.HBLine2', { duration: 0.3, y: 0, rotation: 0, ease: "power2.inOut" });
}
var nowPageId = 0;
function setNavStatus(_id) {

    console.log(_id);
    for (var i = 0; i < 5; i++) {
        if (_id == i) {
            $('.btnNav' + _id + ' p').css('color', '#cf4b6f');
        } else {
            $('.btnNav' + i + ' p').css('color', '#000');
        }
    }
    setMobileNavClose();
    // if (_id == nowPageId) {
    //     return false;
    // } else {
    //     setMobileNavClose();
    //     // switchPage(_id, nowPageId);
    // }

    var pageArray = ['.kv', '.how', '.learn', '.QA', '.join'];

    gsap.to(window, { duration: 0.6, scrollTo: { y: pageArray[_id], offsetY: 50 } });

}

//----------------------------------------SLICK

function setSlick() {


    var $learn_slick = $('.learn-slick');

    $learn_slick.slick({
        // autoplay: true,
        // autoplaySpeed: 1000,
        // centerMode: true,
        // variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        adaptiveHeight: true,
        prevArrow: '<img class="sliderBtns sliderBtn_L" src="assets/images/arrow_L.svg">',
        nextArrow: '<img class="sliderBtns sliderBtn_R" src="assets/images/arrow_R.svg">',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    setTimeout(function () {
        $('.learnNav_0').trigger('click');
    }, 600);
    // 

    // $lifeStyle__doctor.on('afterChange', function (event, slick, target) {
    //     console.log('event:', event);
    //     console.log('slick:', slick);
    //     console.log('target:', target);
    //     //
    //     console.log('total:', slick.$slides.length);


    //     for (var i = 0; i < slick.$slides.length; i++) {

    //         if (DW > 768) {
    //             if (target == i) {
    //                 gsap.to($('.doctor' + target), { duration: 0.3, scale: 1, ease: "power4.inOut" })
    //             } else {
    //                 gsap.to($('.doctor' + i), { duration: 0.3, scale: 0.8, ease: "power4.inOut" })
    //             }
    //         } else {
    //             gsap.set($('.doctor' + i), { scale: 1 })
    //         }

    //         if (target == i) {
    //             $('.QA_box_' + target).css('display', 'block');
    //         } else {
    //             $('.QA_box_' + i).css('display', 'none');
    //         }
    //     }
    // });

}
