document.addEventListener("DOMContentLoaded", function () {
    const botaoNao = document.getElementById('nao');
    const botaoSim = document.getElementById('sim');
    const gif = document.getElementById('gif');
    const novoGif = document.getElementById('novoGif');
    const mensagem = document.getElementById('mensagem');

    botaoNao.addEventListener('mouseover', fuja);
    botaoSim.addEventListener('click', sucesso);

    function fuja() {
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        const larguraBotaoNao = botaoNao.offsetWidth;
        const alturaBotaoNao = botaoNao.offsetHeight;

        // Calcula uma nova posição aleatória dentro dos limites da janela
        const aleatorioX = Math.floor(Math.random() * (larguraJanela - larguraBotaoNao));
        const aleatorioY = Math.floor(Math.random() * (alturaJanela - alturaBotaoNao));

        // Aplica as novas coordenadas ao botão "Não"
        botaoNao.style.position = "absolute";
        botaoNao.style.left = `${aleatorioX}px`;
        botaoNao.style.top = `${aleatorioY}px`;
    }

    function sucesso() {
        botaoSim.innerHTML = `<a href="https://www.youtube.com/watch?v=mBvcHrwuAjs" target="_blank" rel="noopener noreferrer">AQUI!</a>`;

        if (gif) gif.style.display = 'none';
        novoGif.innerHTML = `<img src="naruto.gif" alt="Imagem de amor" id="novoGifImg">`;

        mensagem.innerHTML = `
        <p>Oficialmente Namorados<hr><br> Daniel Santiago & Richard Santiago</p>
        <p style="color: black;">
            Amor, eu não consigo nem explicar o quanto você me faz feliz.<br><br>
            
            Cada mensagem sua, cada detalhe do seu dia que você compartilha comigo, é como uma luz na minha vida.<br>
            Saber o que você está fazendo, o que pensa, o que sente... me faz sentir parte de tudo, me faz sentir próximo de você.<br><br>
            
            Eu amo cada pedacinho de você – seu olhar, seu sorriso, o jeito que você fala comigo.<br>
            E quero estar ao seu lado, sempre, construindo cada momento juntos.<br><br>
            
            Você não marcou só meu pescoço, mas também meu coração.<br>
            Obrigado por ser quem você é e por estar aqui comigo.<br><br>
    
            Te amo mais do que posso dizer. 💖
        </p>
    `;
    
    

        botaoNao.style.display = 'none';
    }
});
