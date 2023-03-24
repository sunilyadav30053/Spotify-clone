console.log("welcome to spotify");
let index=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Song_1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Song_2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Song_3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Song_4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Song_5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Song_6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
]
songItems.forEach((element,i )=> {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play" );
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
    }
    else{
        audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause" );
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity=0;
    
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const allPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allPlays()
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>6){
        index=0;
    }
    else{
        index+=1;
    }
    audioElement.src=`songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<0){
        index=0;
    }
    else{
        index-=1;
    }
    audioElement.src=`songs/${index}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})