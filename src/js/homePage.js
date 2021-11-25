let randomNumber = Math.floor(Math.random() * 2);
const chooseRandom = true;

const bannerImage = document.createElement('img');
bannerImage.id = "banner";
bannerImage.alt = "homePageImage";

if(chooseRandom){
    bannerImage.src = "images/homeImages/" + randomNumber + ".png";
    bannerImage.alt = "homePageImage" + randomNumber;
}else{
    bannerImage.src = "images/homeImages/0.png";
}

console.log(randomNumber);

const placedDiv = document.getElementById('homePageItems');
placedDiv.appendChild(bannerImage);