let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[
{
    quote:'Our doubts are traitors, and make us lose the good we oft might win by fearing to attempt' ,
    person:' William Shakespeare'
},

{
    quote:'The menu is not the meal',
    person:'Alan Watts'
},

{
    quote:'Success is not final; failure is not fatal: It is the courage to continue that counts.' ,
    person:'Neil Armstrong'
},

{
    quote:'The only thing we have to fear is fear itself.',
    person:'Franklin D. Roosevelt'
},
];
btn.addEventListener('click',function(){
let random=Math.floor(Math.random() * quotes.length);
quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;
})
