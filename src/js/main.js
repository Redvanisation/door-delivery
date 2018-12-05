const init = () => {

    // VARIABLES
        // NAVIGATION VARIABLES
        const nav = document.querySelector('.navigation__nav');
        const checkbox = document.querySelector('#navigation-checkbox');
        const button = document.querySelector('#navigation-button');
        
        
        // DATE INPUT VARIABLES:
        const age = document.querySelector('#age');
        const ageVolunteer = document.querySelector('#age-volunteer');


    // CHANGING THE NAV BUTTON FUNCTIONALITY
    button.addEventListener('click', () => {
        button.classList.toggle('change');
    });


    // NAV CLOSING FUNCTIONALITY
    nav.addEventListener('click', () => {
        checkbox.checked = false;
        button.classList.toggle('change');           
    });

    // DATE INPUT FUNCTIONALITY:
    age.addEventListener('click', () => {
        age.setAttribute('type', 'date');
    });
    
    age.addEventListener('blur', () => {
        age.setAttribute('type', 'text');
    });

    ageVolunteer.addEventListener('click', () => {
        ageVolunteer.setAttribute('type', 'date');
    });
    
    ageVolunteer.addEventListener('blur', () => {
        ageVolunteer.setAttribute('type', 'text');
    });
}