// const rightLamp = document.querySelector('.lamps-right__front-lamp');
// // let scroll = window.pageYOffset;
// console.log(rightLamp);
// console.log('ololo');
// let position = -18;

// const scrollHeight = () => {
//   if(window.pageYOffset >= 600) {
//     console.log(window.pageYOffset/16)
//     rightLamp.style.transform = `translate(6.5em, calc(${position + (window.pageYOffset/16)}em - ${window.pageYOffset}px))`;
//   }

// };





  let curent = window.pageYOffset;

const scrollHeight = () => {
    if((curent + window.pageYOffset) > curent) {
      console.log('вниз')
    } else console.log('вверх')
  }

window.addEventListener('scroll', scrollHeight);
