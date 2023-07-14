const canvasEl = document.querySelector('canvas'),
   canvasCtx = canvasEl.getContext('2d')

const setup = () => {
  canvasEl.width = canvasCtx.width = window.innerWidth
  canvasEl.height = canvasCtx.height = window.innerHeight
}
const draw = () => {
  // Desenha campo
  canvasCtx.fillStyle = '#286047'
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  canvasCtx.fillStyle = '#FFFFFF'
  
  // Desenha linha vertical
  const lineWidth = 15
  const eixoX = window.innerWidth / 2 - lineWidth / 2
  const eixoY = 0
  const height = window.innerHeight
  const fieldWidth = lineWidth

  canvasCtx.fillRect(eixoX, eixoY, fieldWidth, height)
  // desenha raquete esquerda
  canvasCtx.fillRect(10, 400, lineWidth, 200)

  // desenha raquete direita
  const sizeRacket = window.innerWidth - lineWidth - 10
  canvasCtx.fillRect(sizeRacket, 120, lineWidth, 200)

  //desenha a bola
  canvasCtx.beginPath()
  canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI)
  canvasCtx.fill()

  // cria placar
  canvasCtx.font = 'bold 72px Arial'
  canvasCtx.textAlign = 'center'
  canvasCtx.textBaseline = 'top'
  canvasCtx.fillStyle = '#01341D'
  canvasCtx.fillText('3', window.innerWidth / 4, 50)
  canvasCtx.fillText('1', window.innerWidth / 4 + window.innerWidth / 2, 50)
}
setup(), draw()