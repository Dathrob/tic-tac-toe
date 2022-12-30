const boxes = Array.from(document.getElementsByClassName("box")) 
const firstplayer = 'X';
const secondplayer = '0';
const places = [];
const outbox = document.getElementById("outbox")
let currentplayer = firstplayer;
let gamefinished = false
const restartbutton = document.getElementById("restart")
const draw = () =>{
    boxes.forEach((box,index) =>{
        let styleString = '';
        if(index < 3){
            styleString += `border-bottom:3px solid;`
        }
        if(index % 3 === 0){
            styleString += `border-right:3px solid;`
        }
        if(index % 3 === 2){
            styleString += `border-left:3px solid;`
        }
        if(index >5){
            styleString += `border-top:3px solid;`
        }
        box.style = styleString;
        box.addEventListener('click',boxclicked);
    })
    
} 
const boxclicked = (e) =>{
    const id = e.target.id;
    if(!gamefinished){
    if (!places[id]){
        e.target.innerText = currentplayer;
         places[id] = currentplayer;
        if(haswon()){
            outbox.innerText = `${currentplayer } has won`
            outbox.style = "color:green;font-size = 60px;"
            gamefinished = true
        }
        currentplayer = currentplayer === firstplayer ? secondplayer : firstplayer;
        
    }
}
    
    
    
}
const haswon = () => {
    if(places[0]=== currentplayer && places[1] == currentplayer && places[2] == currentplayer){
        return true
    }
    else if(places[0]=== currentplayer && places[3] == currentplayer && places[6] == currentplayer){
        return true
    }
    else if(places[0]=== currentplayer && places[4] == currentplayer && places[8] == currentplayer){
        return true
    }
    else if(places[1]=== currentplayer && places[0] == currentplayer && places[2] == currentplayer){
        return true
    }
    else if(places[1]=== currentplayer && places[4] == currentplayer && places[7] == currentplayer){
        return true
    }
    else if(places[2]=== currentplayer && places[5] == currentplayer && places[8] == currentplayer){
        return true
    }
    else if(places[2]=== currentplayer && places[4] == currentplayer && places[6] == currentplayer){
        return true
    }
    else if(places[3]=== currentplayer && places[4] == currentplayer && places[5] == currentplayer){
        return true
    }
    else if(places[6]=== currentplayer && places[7] == currentplayer && places[8] == currentplayer){
        return true
    }
}
restartbutton.addEventListener('click',restart = () => {
    gamefinished = false
    currentplayer =  firstplayer
    places.forEach((place,index)=>{
        places[index] = null;
    })
    boxes.forEach((box) => {
        box.innerHTML = '';
        outbox.innerText = "TIC TAC TOE";
        outbox.style='color:white;'
    } )
});

draw();