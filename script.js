console.log("Welcome to LAM-black" );
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
mastersongName = document.getElementById('mastersongName');
songItems =  Array.from(document.getElementsByClassName('songItem'));


let song = [
   {songName: "let me love you",  filepath: "songs/1.mp3", coverPath: "images/cover1.jpg"   },
   {songName: "aayi nai",  filepath: "songs/2.mp3", coverPath: "images/cover 2.jpg"   },
   {songName: "Aaj Ki Raat",  filepath: "songs/3.mp3", coverPath: " images/cover 3.jpg"},
   {songName: "Pushpa Pushpa",  filepath: "songs/4.mp3", coverPath: "images/cover 4.jpg"   },
   

]

songItems.forEach((element, i)=>{
   element.getElementsByTagName("img")[0].src = song[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

//audioElement.Play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused , audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    
      } 
    })
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
  
    //Update Seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = Progress;
    
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const mackeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    mackeAllPlays();
    songIndex =  parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=3){
        songIndex = 0
    
    }
    else{
       songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    
    }
    else{
       songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    mastersongName.innerText = song[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})