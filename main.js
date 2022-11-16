const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const date = new Date();
  const secondsDegree = (date.getSeconds() / 60) * 360 + 90;
  if (secondsDegree === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'transform 0.5s cubic-bezier(0.37, 1.44, 0.48, 1.17)';
  }
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  const min = date.getMinutes();
  const minDegree = (min / 60) * 360 + ((date.getSeconds() * 6) / 60) + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = date.getHours();
  const hourDegree = ((hour / 12) * 360) + ((min * 30) / 60) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setTime, 1000);

setTime();
