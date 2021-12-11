
const games = [
    {
        "gameImage": "../images/DashOVERLORD.png",
        "gameTitle": "Dash OVERLORD",
        "description": "Pass a few levels.Sounds<br>easy, right?"        
    },
    {
        "gameImage": "../images/HxJamHuh.png",
        "gameTitle": "?????????????",
        "description": "2021 (December 17-19)"        
    }
];

const baseContent = document.getElementById('baseContent')


for(let i = 0; i < games.length; i++){

    const img = document.createElement('img');
    const gameTitle = document.createElement('h1');
    const gameDesc = document.createElement('p');

    const newDiv = document.createElement('div');

    //img.alt = gameImage;
    img.src = games[i].gameImage;
    gameTitle.innerHTML = games[i].gameTitle;
    gameTitle.id = "gameTitle"
    gameTitle.style.color = 'white';

    gameDesc.innerHTML = games[i].description;
    gameDesc.id = "gameDesc";
    gameDesc.style.color = 'white';

    img.onload = function(){
        img.width = 330;
        img.height = 262;
        //img.style.display = 'flex';
        //img.style.justifyContent = 'center';
        img.style.marginTop = '1rem';
        img.style.borderRadius = '25px';
        img.style.border = '5px solid #555';
    }

    if(i != 0){
        const distance = '2rem';
        img.style.marginLeft += distance;
        gameTitle.style.marginLeft += distance;
        gameDesc.style.marginLeft += distance;
    }

    
    img.onclick = function(){
        switch(gameTitle.innerHTML){
            case 'Dash OVERLORD':
                window.open('https://www.newgrounds.com/portal/view/819901', '_blank');
            case '?????????????':
                window.open('https://itch.io/jam/haxejam-2021-winter-editon', '_blank');
        }
    }

    newDiv.appendChild(img);
    newDiv.appendChild(gameTitle);
    newDiv.appendChild(gameDesc);

    baseContent.appendChild(newDiv);
}
