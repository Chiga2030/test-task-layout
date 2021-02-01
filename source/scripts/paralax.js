const rightLamp = document.querySelector('.lamps-right__front-lamp');

const direction = () => {
  let lampPosition = -74;
  if (document.documentElement.clientWidth < 1440) {
    lampPosition = -65;
  }

  lampPosition = lampPosition + (window.pageYOffset / 16);
  rightLamp.style.transform = `translateY(${lampPosition}em)`;
};

const checkWievPort = func => {
  if ((document.documentElement.clientWidth >= 1440 &&
      window.pageYOffset >= 900 &&
      window.pageYOffset <= 1200) ||
      (document.documentElement.clientWidth < 1440 &&
      window.pageYOffset >= 700 &&
      window.pageYOffset <= 900)) {
    return func();
  }
};

document.addEventListener('scroll', () => checkWievPort(direction));
document.addEventListener('DOMContentLoaded', () => checkWievPort(direction));
