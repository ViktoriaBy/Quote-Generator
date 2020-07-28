const qBtn = document.querySelector('#qBtn');
const quote = document.querySelector('#quote');
const qAuthor = document.querySelector('#qAuthor');
const img = document.getElementById('img');


// LIST OF QUOTES
const quotes = [
    {
        name:'Orhan Pamuk',
        quote: 'Dogs do speak, but only to those who know how to listen.'
    },
    {
        name: 'Agnes Sligh Turnbull',
        quote: 'Dogs’ lives are too short. Their only fault, really.'
},
{

        name: ' Roger Caras',
        quote: 'Dogs are not our whole life, but they make our lives whole.'
},
{
    name: 'Charles De Gaulle',
    quote: 'The better I get to know men, the more I find myself loving dogs.'
},
{
    name: ' Marilyn Monroe',
    quote: 'Dogs never bite me. Just Humans.'
},
{
    name: ' Mark Twain',
    quote: 'The dog is a gentleman; I hope to go to his heaven not man’s.'
},
{
    name: ' Charles Shultz',
    quote: 'Happiness is a warm puppy.'
},
{
    name: ' W. Bruce Cameron',
    quote: 'You can usually tell that a man is good if he has a dog who loves him.'
},
{
    name: 'Andy Rooney',
    quote: 'The average dog is a nicer person than the average person.'
},
{
    name: 'Kinky Friedman',
    quote: 'Money can buy you a fine dog, but only love can make him wag his tail.'
}

]

// MAKE BUTTON WORK
qBtn.addEventListener('click', displayQuote); 


//GENERATE QUOTE
    function displayQuote(){
     let number = Math.floor(Math.random()*quotes.length);
     qAuthor.innerHTML = quotes[number].name;
     quote.innerHTML = quotes[number].quote;
 
 }


const newImages = [
{
src:'img/dog1.png',

},
{
 src:'img/dog2.png',

},
{
src:'img/dog3.png',

},
{
src:'img/dog4.png',

}];

qBtn.addEventListener('click', function(e){changeImages(e)});

function changeImages(e){
    let random = Math.floor(Math.random()*newImages.length);
    img.style.backgroundImage = `url(${newImages[random].src})`;

    img.style.backgroundSize = `${newImages[random].backgroundSize}`;
    img.style.backgroundPosition = `${newImages[random].backgroundPosition}`;
    e.preventDefault();
}
