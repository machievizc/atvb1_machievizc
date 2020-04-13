window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "-30px";
    document.getElementById("logo").style.width = "10%";
    document.getElementById("logo").style.transition = "0.5s";
  } else {
    document.getElementById("navbar").style.top = "41px";
    document.getElementById("logo").style.width = "20%";
    document.getElementById("logo").style.transition = "0.5s";
  }
}

function abrirWhats(mensagem) {
    if (mensagem != '') {
        mensagem = '&text=' + mensagem;
    }
    var numero = 'inserir numero telefone'; 
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        window.open('https://api.whatsapp.com/send?phone=' + numero + mensagem);
    } else {
        window.open('https://web.whatsapp.com/send?phone=' + numero + mensagem);
    }

}
