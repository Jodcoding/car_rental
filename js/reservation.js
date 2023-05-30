const reservationForm = document.getElementById('reservation-form')
reservationForm.addEventListener('submit', e =>{
    e.preventDefault();
    const name = new FormData(reservationForm).get('nom')
    const email = new FormData(reservationForm).get('email')
    const model = new FormData(reservationForm).get('modele')
    const reservation_date = new FormData(reservationForm).get('date-location')
    const number_of_days = new FormData(reservationForm).get('qte-jours')
    
    if((name == null || name == '') ||(email == null || email == '') || (model == null || model == '') || 
    (reservation_date == null || reservation_date == '') || (number_of_days == null || number_of_days == '')){
        alert('Veuillez remplir tous les champs!')
    }
    else{
        alert('Reservation reussie, '+name+'!')
        reservationForm.reset();
    }  
})