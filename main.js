console.log('Hello World!');

let artist = document.querySelector('h2')

let songData = [
  {
    name: 'first',
    art: 'Heat Waves',
  },
  
  {
   name: 'seconds',
   art: 'Infinity',
  },
  
  
  {
    name: 'third',
    art: 'Fearless'
  },
  ];

let music = document.querySelector('audio')

let image = document.querySelector('img')

let prevBtn = document.querySelector('#prev')

let nxtBtn = document.querySelector('#next')

let playBtn = document.querySelector('#play')

let start = document.querySelector('.start')

let end = document.querySelector('.end')

let isPlaying = false

let currentSong = 0

let progress = document.querySelector('.progress')

let progressBar = document.querySelector('.progressbar')

function playSong() {
  playBtn.classList.replace('fa-play' , 'fa-pause')
  isPlaying = true
  music.play()
}

function pauseSong() {
  playBtn.classList.replace('fa-pause','fa-play')
  isPlaying = false
  music.pause()
}

playBtn.addEventListener('click' , () => (isPlaying ? pauseSong() : playSong()))


function preSong() {
  currentSong--
  if (currentSong < 0) {
    currentSong = songData.length-1
  }
  loadSong(songData[currentSong])
  playSong()
}

function nxtSong() {
  currentSong++
  if (currentSong > songData.length-1) {
    currentSong=0
  }
  loadSong(songData[currentSong])
  playSong()
}

prevBtn.addEventListener('click' , preSong)
nxtBtn.addEventListener('click' , nxtSong)

function updateProgress(e) {
  if (isPlaying) {
    let {duration , currentTime} = e.srcElement
    
    
    let progressPerc = (currentTime / duration) *100
    progressBar.style.width = `${progressPerc}%`
    
    
    let durationMin = Math.floor(duration/60)
    let durationSec = Math.floor(duration%60)

   end.textContent = `${durationMin}:${durationSec}`
   
   let startMin = Math.floor(currentTime / 60)
   let startSec = Math.floor(currentTime % 60)
   if(startSec<10){
     startSec = `0${startSec}`
   }
   
   start.textContent = `${startMin}:${startSec}`
   }
  }



function loadSong(song) {
  artist.textContent = song.art
  music.src = `musical/${song.name}.mp3`
  image.src = `musical/${song.name}.jpg`
}
loadSong(songData[currentSong])

music.addEventListener('timeupdate' , updateProgress)
//const currentQuizData = quizData[currentQuiz];  
//track_list[track_index].path; 
//let curr_track = document.createElement('audio'); 

  
