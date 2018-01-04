const elArrow = document.querySelector('#arrow img');

// DeviceMotion Event
window.addEventListener('devicemotion', deviceMotionHandler);

// 加速度が変化
function deviceMotionHandler(event) {

  // 加速度
  // X軸
  const x = event.acceleration.x;
  // Y軸
  const y = event.acceleration.y;
  // Z軸
  const z = event.acceleration.z;

  const bound = 7;
  if (x > bound) { // 右
    elArrow.style.transform = 'rotate(90deg)';
  }
  else if (x < -bound) { // 左
    elArrow.style.transform = 'rotate(-90deg)';
  }
  else if (y > bound) { // 上
    elArrow.style.transform = 'rotate(0deg)';
  }
  else if (y < -bound) { // 下
    elArrow.style.transform = 'rotate(180deg)';
  }
}
