const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

const footLinks = document.querySelectorAll('footer a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active1');
  }
})



/*
const typing = document.querySelector('#typing');

typing.addEventListener('animationend', () => {
  typing.classList.add('repeat');
});
*/
