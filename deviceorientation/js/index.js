const elAnimal = document.querySelector('#animal');
const elDebug = document.querySelector('#debug');

window.addEventListener(
  'deviceorientation',
  deviceOrientationHandler);

/** デバイスが傾いたときのイベントです。 */
function deviceOrientationHandler(event) {
  //ジャイロセンサー情報取得
  // X軸
  const beta = event.beta;
  // Y軸
  const gamma = event.gamma;
  // Z軸
  const alpha = event.alpha;

  // グラフィックを傾ける
  elAnimal.style.transform = `rotateX(${beta + 180}deg) rotateY(${gamma + 180}deg) rotateZ(${alpha}deg)`;

  // ログを出力する
  let html = ``;
  html += 'X回転 : ' + beta + '<br />';
  html += 'Y回転 : ' + gamma + '<br />';
  html += 'Z回転 : ' + alpha;
  elDebug.innerHTML = html;
}