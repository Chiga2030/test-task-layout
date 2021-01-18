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





//   let curent = window.pageYOffset;

// const scrollHeight = () => {
//     if((curent + window.pageYOffset) > curent) {
//       console.log('вниз')
//     } else console.log('вверх')
//   }

// window.addEventListener('scroll', scrollHeight);

// console.log(window.scrollY);

// document.addEventListener('scroll', (evt)=>{
//  console.log(evt.deltaY);
// });


// document.addEventListener('wheel', (evt)=>{
//   if (window.pageYOffset >= 430 && window.pageYOffset <= 840) {
//       console.log(evt.deltaY)
//   }
// });


// window.pageYOffset



// const direction = () => {
//   // document.addEventListener('scroll', upOrDown);
//   return upOrDown()
// }

let pos = 0;

const direction = () => {
  if (window.pageYOffset > pos) {
    console.log('go down')
  } else console.log('go up')
  pos = window.pageYOffset;
}

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 430 && window.pageYOffset <= 840) {
    return direction();
  }
});
