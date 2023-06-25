const botaoNao = document.getElementById('nao')
function fuja () {
    
    
    const laguraJanela = window.innerWidth
    const alturaJanela = window.innerHeight

    const maxX = laguraJanela - botaoNao.offsetWidth
    const maxY = alturaJanela - botaoNao.offsetHeight

    const aleatorioX = Math.floor(Math.random() * maxX)
    const aleatorioY = Math.floor(Math.random() * maxY)

    botaoNao.style.left = aleatorioX + "px"
    botaoNao.style.top = aleatorioY + "px"
}

function sucesso(){
    const gif = document.getElementById('gif')
    const sim = document.getElementById('sim')

    sim.innerHTML = `<a href="https://www.youtube.com/watch?v=KrsqPE9SMxo&ab_channel=LostPanda"> Here </a>`

    gif.style.display = 'none'

    const novoGif = document.getElementById('novoGif')

    novoGif.innerHTML = `<img src="fyEa.gif" alt="" id="gif">`
    
    const mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = `We are officially dating! <p>Daniel Santiago & Ace Santiago`

    botaoNao.style.display = 'none'
}