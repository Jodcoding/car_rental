/*GESTION DES FORMULAIRES */
const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', e =>{
    e.preventDefault();
    const name = new FormData(contactForm).get('nom')
    const email = new FormData(contactForm).get('email')
    const message = new FormData(contactForm).get('message')

    if((name == null || name == '') ||(email == null || email == '') || (message == null || message == ''))
        alert('please, fill the all fields!')
    else{
        alert('Message sent successfully!')
        contactForm.reset();
    }  
})