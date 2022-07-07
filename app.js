//Select the section with an id of container without using querySelector.
const c = document.getElementById('container');
//Select the section with an id of container using querySelector.
const cQuery = document.querySelector('#container');
//Select all of the list items with a class of “second”.
const sec = document.querySelectorAll('.second');
//Select a list item with a class of third, 
//but only the list item inside of the ol tag.
const olThird = document.querySelector('ol .third');
//Give the section with an id of container the text “Hello!”.
// Or c.innerText = 'Hello' not sure which was requested. 
c.prepend('Hello!');
//Add the class main to the div with a class of footer.
const divFoot = document.querySelector('.footer');
divFoot.classList.add('main');
//Remove the class main on the div with a class of footer.
divFoot.classList.remove('main');
//Create a new li element.
const newLi = document.createElement('li');
//Give the li the text “four”.
newLi.innerText = 'four';
//Append the li to the ul element.
document.querySelector('ul').append(newLi);
//Loop over all of the lis inside the ol tag 
//and give them a background color of “green”.
const olLi = document.querySelectorAll('ol li');
for(let item of olLi){
    item.style.backgroundColor = 'green'
}
//Remove the div with a class of footer
divFoot.remove();