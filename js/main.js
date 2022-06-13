const menu = document.querySelector('#menu-btn')
const header = document.querySelector('.header')
const titulo = document.querySelector('.nome')
const profissao = document.querySelector('.prof');
typeWriter(titulo);
typeWriter(profissao);

function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 350 * i);
  });
}

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  header.classList.toggle('active')
  document.body.classList.toggle('active')
}

window.onscroll = () => {
  if(window.innerWidth < 991) {
    menu.classList.remove('fa-times')
    header.classList.remove('active')
    document.body.classList.remove('active')
  }

  document.querySelectorAll('section').forEach(sec => {

    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      document.querySelectorAll('.header .navbar a').forEach(links => {
        links.classList.remove('active');
        document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
      });
    }
  })
}