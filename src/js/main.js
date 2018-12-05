const init = () => {
    const age = document.querySelector('#age');
    const ageVolunteer = document.querySelector('#age-volunteer');

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