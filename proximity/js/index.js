const textNear = document.querySelector('#font_1');
const textFar = document.querySelector('#font_2');

window.addEventListener('deviceproximity', deviceProximityHandler);

/** 検知範囲の状況が変化したときのイベントです。 */
function deviceProximityHandler(event) {
  if (!event.value) {
    // センサーの検知範囲に物体がある
    showNear();
  } else {
    // センサーの検知範囲に物体はない
    showFar();
  }
}

// 近
function showNear() {
  textFar.style.display = "none";
  textNear.style.display = "block";
}

// 遠
function showFar() {
  textFar.style.display = "block";
  textNear.style.display = "none";
}
