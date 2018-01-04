const $compass = document.querySelector('#compass');
window.addEventListener('deviceorientation', deviceOrientationHandler);

function deviceOrientationHandler(event) {
  //ジャイロセンサー情報取得
  // X軸
  const beta = event.beta;
  // Y軸
  const gamma = event.gamma;
  // Z軸
  const alpha = event.alpha;

  // 方角
  const compassHeading = getCompassHeading(alpha, beta, gamma);

  document.querySelector('#debug').innerHTML = (`方角 : ${Math.round(compassHeading * 100) / 100}度`);

  const direction = 360 - compassHeading;

  $compass.style.transform = 'rotateZ(' + direction + 'deg)';
}

/**
 * 方角算出
 * @param alpha
 * @param beta
 * @param gamma
 * @returns {number}
 */
function getCompassHeading(alpha, beta, gamma) {
  const degtorad = Math.PI / 180;

  const _x = beta ? beta * degtorad : 0;
  const _y = gamma ? gamma * degtorad : 0;
  const _z = alpha ? alpha * degtorad : 0;

  const cY = Math.cos(_y);
  const cZ = Math.cos(_z);
  const sX = Math.sin(_x);
  const sY = Math.sin(_y);
  const sZ = Math.sin(_z);

  const Vx = -cZ * sY - sZ * sX * cY;
  const Vy = -sZ * sY + cZ * sX * cY;

  let compassHeading = Math.atan(Vx / Vy);

  if (Vy < 0) {
    compassHeading += Math.PI;
  }
  else if (Vx < 0) {
    compassHeading += 2 * Math.PI;
  }

  return compassHeading * (180 / Math.PI);
}
