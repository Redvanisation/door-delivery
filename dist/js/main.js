'use strict';

var init = function init() {

    // VARIABLES
    // NAVIGATION VARIABLES
    var nav = document.querySelector('.navigation__nav');
    var checkbox = document.querySelector('#navigation-checkbox');
    var button = document.querySelector('#navigation-button');

    // DATE INPUT VARIABLES:
    var age = document.querySelector('#age');
    var ageVolunteer = document.querySelector('#age-volunteer');

    // CHANGING THE NAV BUTTON FUNCTIONALITY
    button.addEventListener('click', function () {
        button.classList.toggle('change');
    });

    // NAV CLOSING FUNCTIONALITY
    nav.addEventListener('click', function () {
        checkbox.checked = false;
        button.classList.toggle('change');
    });

    // DATE INPUT FUNCTIONALITY:
    age.addEventListener('click', function () {
        age.setAttribute('type', 'date');
    });

    age.addEventListener('blur', function () {
        age.setAttribute('type', 'text');
    });

    ageVolunteer.addEventListener('click', function () {
        ageVolunteer.setAttribute('type', 'date');
    });

    ageVolunteer.addEventListener('blur', function () {
        ageVolunteer.setAttribute('type', 'text');
    });
};