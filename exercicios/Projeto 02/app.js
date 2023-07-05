const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
let currentActive = 1
function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive){
      circle.classList.add('active')
    }else {
      circle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length  - 1) / (circles.length - 1) * 100 + '%'
}

btnNext.addEventListener('click', () => {
  currentActive++
    if(currentActive > circles.length){
      currentActive = circles.length
    }
      update()
})
btnPrev.addEventListener('click', () => {
  currentActive--
    if(currentActive < 1){
      currentActive = 1
    }
      update()
})