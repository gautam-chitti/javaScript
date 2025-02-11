const body = document.body
const startbutton = document.getElementById('start')
const stopbutton = document.getElementById('stop')

const randomColor = () =>{
  let letters = '0123456789ABCDEF';
  let color  = '#';
  for ( let i = 0 ; i<6 ; i++){
    color +=letters[Math.floor(Math.random()*16)];
  }
  return color
}
startbutton.addEventListener('click', ()=>{
  const changeColor = setInterval(()=>{
    body.style.backgroundColor = `${randomColor()}`

  },1000)

  stopbutton.addEventListener('click', ()=>{
    clearInterval(changeColor)
  })
})
