/*GESTION DES FORMULAIRES */
const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', e =>{
    e.preventDefault();
    const name = new FormData(contactForm).get('nom')
    const email = new FormData(contactForm).get('email')
    const message = new FormData(contactForm).get('message')

    if((name == null || name == '') ||(email == null || email == '') || (message == null || message == ''))
        alert('Veuillez remplir tous les champs!')
    else{
        alert('Message envoye avec succes!')
        contactForm.reset();
    }  
})