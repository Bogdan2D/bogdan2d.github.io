//-----[HEADER]-----\\
const myName = document.createElement('h1');
myName.id = "myName";
myName.innerHTML = "Bogdan2D";

const subText = document.createElement('p') //i should make the text random :>
subText.id = "subText";
subText.innerHTML = "I make stuff"
//--------------------\\

const options = ['Home', 'Games', 'About', 'Contact'];
const optionsRedirects = ['home', 'games', 'about', 'contact'];

const navBar = document.createElement('div');
navBar.id = "navBar";


for(let i = 0; i < options.length; i++){
    const newOptionSpan = document.createElement('span');
    const newOptionText = document.createElement('p');
    const newOptionRedirect = document.createElement('a');

    newOptionRedirect.innerHTML = options[i];
    newOptionRedirect.href = optionsRedirects[i] + ".html";
    
    newOptionSpan.appendChild(newOptionText);
    newOptionText.appendChild(newOptionRedirect);
    

    if(i != 0){
        newOptionText.style.marginLeft = '1rem';
    }

    navBar.appendChild(newOptionSpan);
}

document.body.appendChild(myName);
document.body.appendChild(subText);
document.body.appendChild(navBar);
document.body.appendChild(document.createElement('hr'));