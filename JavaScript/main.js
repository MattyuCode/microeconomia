//--------------------Navbar------------------------
$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
})

$(document).on('click', 'li.nav-item', function () {
    $(this).addClass('active').siblings().removeClass('active')
});
//-------------------------------ScrollReveal--------------------

window.sr = ScrollReveal();
sr.reveal('.scrolling-navbar', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.landingtext', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('#', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

// sr.reveal('#', { bottom
//     duration: 2000,
//     origin: 'right',
//     distance: '300px'
// });

sr.reveal('.whapps', {
    duration: 1200,
    origin: 'right',
    distance: '300px'
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//--------------Buttom--UP----------------------------

$(document).ready(function () {
    $('.up').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.up').fadeIn(200);
        } else {
            $('.up').fadeOut(200);
        }
    });

    $('.up').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);

    });

});

//---------------------------- La parte de WhatsApp----------------------------
popupWhatsApp = () => {

    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');

    btnClosePopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
    })

    btnOpenPopup.addEventListener("click", () => {
        popup.classList.toggle('is-active-whatsapp-popup')
        popup.style.animation = "fadeIn .6s 0.0s both";
    })

    sendBtn.addEventListener("click", () => {
        let msg = document.getElementById('whats-in').value;
        let relmsg = msg.replace(/ /g, "%20");

        window.open('https://wa.me/50245412844?text=' + relmsg, '_blank');

    });

    setTimeout(() => {
        popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
}

popupWhatsApp();