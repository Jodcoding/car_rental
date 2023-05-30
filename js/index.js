const search_by_type_buttons = document.querySelectorAll('.search-buttons .btn');
const search_by_price_buttons = document.querySelectorAll('.search-buttons .btn-price');

const filterByType = (filter) => {
    let car_types = document.querySelectorAll('.car-card');

    if (filter == 'all') {
        car_types.forEach(car_type => {
            if (car_type.classList.contains('hide-content'))
                car_type.classList.remove('hide-content')
        });
    }
    else
        car_types.forEach(car_type => {
            if (car_type.getAttribute('data-type-car') !== filter)
                car_type.classList.add('hide-content')
            else
                if (car_type.classList.contains('hide-content'))
                    car_type.classList.remove('hide-content');
        });
}

const filterByPrice = (filter) => {

    let car_types = document.querySelectorAll('.car-card');

    if (filter == 'all') {
        car_types.forEach(car_type => {
            if (car_type.classList.contains('hide-content'))
                car_type.classList.remove('hide-content')
        });
    }
    else
        car_types.forEach(car_type => {
            if (car_type.getAttribute('data-price') !== filter)
                car_type.classList.add('hide-content')
            else
                if (car_type.classList.contains('hide-content'))
                    car_type.classList.remove('hide-content');
        });
}

search_by_type_buttons.forEach(button => button.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.getAttribute('data-filter'))
    filterByType(e.currentTarget.getAttribute('data-filter'));
}));

search_by_price_buttons.forEach(button => button.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.getAttribute('data-filter'))
    filterByPrice(e.currentTarget.getAttribute('data-filter'));
}));

