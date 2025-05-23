const cardRatesContainer = document.getElementById('card-rates-container');
const cardStarsContainer = document.getElementById('card-star-container');
const cardRates = document.getElementById('card-rates');
const buttonSubmit = document.getElementById('button-submit');
const cardResultsContainer = document.getElementById('card-results-container');
const rating = document.getElementById('rating');

cardRates.addEventListener('click', (event)=>{
    Array.from(cardRates.children).forEach(element => {
        element.classList.remove('active');
    });
    event.target.closest('button').classList.toggle('active');
    buttonSubmit.removeAttribute('disabled');
    buttonSubmit.classList.remove('disabled');
    updatestars(event.target.value);
});

cardRates.addEventListener('focusin', (event) =>{
    const button = event.target.closest('button');
    if (!button) return;
    Array.from(cardRates.children).forEach(element => element.classList.remove('active'));
    button.classList.add('active');
    buttonSubmit.removeAttribute('disabled');
    buttonSubmit.classList.remove('disabled');
    updatestars(button.value);
});

cardRates.addEventListener('keydown', (event) =>{
   if(event.key === 'Enter'){
        let button = Array.from(cardRates.children).find(element =>
            element.classList.contains('active')
        );
        if (!button) return;
        showThankYou(button.value);   
    }
});

function updatestars(totalStars){
    cardStarsContainer.innerHTML = '';
    for(let i = 0; i < totalStars; i++){
        let newStar = document.createElement('div');
        newStar.classList.add('card__star');
        let newStarImg = document.createElement('img');
        newStarImg.setAttribute('src', './images/icon-star.svg');
        newStarImg.setAttribute('alt', 'star');
        newStar.appendChild(newStarImg);
        cardStarsContainer.appendChild(newStar); 
    }
}

buttonSubmit.addEventListener('click',() =>{
    console.log(buttonSubmit)
    let button = Array.from(cardRates.children).find(element => {
       return element.classList.contains('active');
    });
    if (!button) return;
    showThankYou(button.value);    
});

function showThankYou(result){
    cardRatesContainer.classList.toggle('hide');
    cardResultsContainer.classList.toggle('hide');
    rating.innerText = result;
}

