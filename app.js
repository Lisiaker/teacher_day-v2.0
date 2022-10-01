let list=['0','1', '2', '3', '4', '5', '6', '7', '8']
let photo1=document.querySelector('#a')
let photo2=document.querySelector('#b')
let photo3=document.querySelector('#c')
let photo4=document.querySelector('#d')
let photo5=document.querySelector('#e')
let photo6=document.querySelector('#f')
let photo7=document.querySelector('#g')
let photo8=document.querySelector('#h')
a=-1
function animation(){
  console.log(1)
  btnVoice.style.animationName='animation'
  voicePage.style.animationName='allIs'
  voicePage.style.display='flex'
}
function toClose(){
  voicePage.style.animationName='nothing'
  voicePage.style.animationDuration='4sec'
  voicePage.style.display='none'
}
function showText(){
  console.log(1)
  closerPhoto.style.display='block'
  bgr.style.display='block'
  list=['1', '2', '3', '4', '5', '6', '7', '8']
  a++
  s='photo'+list[a]
  if('photo'+list[a]=='photo1'){
    photo1.style.display='block'
  }
  if('photo'+list[a]=='photo2'){
    photo2.style.display='block'
  }
  if('photo'+list[a]=='photo3'){
    photo3.style.display='block'
  }
  if('photo'+list[a]=='photo4'){
    photo4.style.display='block'
  }
  if('photo'+list[a]=='photo5'){
    photo5.style.display='block'
  }
  if('photo'+list[a]=='photo6'){
    photo6.style.display='block'
  }
  if('photo'+list[a]=='photo7'){
    photo7.style.display='block'
  }
  if('photo'+list[a]=='photo8'){
    photo8.style.display='block'
  }
}
function closePhoto(){
  closerPhoto.style.display='none'
  bgr.style.display='none'
  photo1.style.display='none'
  photo2.style.display='none'
  photo3.style.display='none'
  photo4.style.display='none'
  photo5.style.display='none'
  photo6.style.display='none'
  photo7.style.display='none'
  photo8.style.display='none'
}
console.log('photo'+list[0]==photo1)
console.log(list[1])
let btnWrite=document.querySelector('.handwrite_wishes')
let closerPhoto=document.querySelector('.closer_txt')
let bgr=document.querySelector('.black')
let voicePage=document.querySelector('.voice_div')
btnWrite.addEventListener('click', showText)
closerPhoto.addEventListener('click', closePhoto)
console.log(list[0])
let closer=document.querySelector('.x_closer')
closer.addEventListener('click', toClose)
let btnVoice = document.querySelector('.voice_wishes')
btnVoice.addEventListener('click', animation)
