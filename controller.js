var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwSRz23B6tBn_Y-WivQhYmOpQ15_Mjq3G8k4O4VBkP5WrVcJwWBrK0MOSeLLpHQrPTrbw/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 5000)
        form.reset
      })
      .catch(error => console.error('Error!', error.message))
})