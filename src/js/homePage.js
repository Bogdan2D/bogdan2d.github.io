let randomNumber = Math.floor(Math.random() * 2);
const chooseRandom = false; //set to false if you want to force a certain image

const bannerImage = document.createElement('img');
bannerImage.id = "banner";
bannerImage.alt = "homePageImage";
bannerImage.style.borderRadius = '25px';

if(chooseRandom){
    bannerImage.src = "../images/homeImages/" + randomNumber + ".png";
    bannerImage.alt = "homePageImage" + randomNumber;
}else{
    bannerImage.src = "../images/homeImages/force.png";
    bannerImage.alt = "homePageImage";
}

console.log(randomNumber);

const placedDiv = document.getElementById('homePageItems');
//placedDiv.appendChild(bannerImage);