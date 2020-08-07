
import $ from "jquery";
import Rellax from "rellax";


$(document).ready(function () {

    $('#choose-tarif').on('click', function () {
        document.querySelector('.section-6').scrollIntoView({ behavior: 'smooth' });
    })
    $('#one-time-work').on('click', function () {
        document.querySelector('.section-8').scrollIntoView({ behavior: 'smooth' });
    })
})

var rellax__one = new Rellax('.rellax__one', {});

var rellax__two = new Rellax('.rellax__two', {});


