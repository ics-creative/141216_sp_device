const elCircle = document.querySelector('#circle');
const elLux = document.querySelector('#lux-value');

// 環境光を取得するイベント
window.addEventListener('devicelight', deviceLightHandler);

// 照度が変化
function deviceLightHandler(event) {
  const lux = event.value;
  elLux.innerHTML = `${lux}lux`;

  // 明るさを半径に変換
  const r = lux / 300 * 100 * 0.5;

  // 円の大きさを更新
  elCircle.style.width = r * 2 + 'vw';
  elCircle.style.height = r * 2 + 'vw';
}
