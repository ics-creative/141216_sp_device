const FPS = 60;

let intervalId;
const bu = $('img[alt="ぶ"]');
const ru = $('img[alt="る"]');
const tsu = $('img[alt="っ"]');

$(window).on('touchend', touchEndHandler);

function touchEndHandler() {
  // 2秒間
  const DURATION = 2000;
  // バイブレーション
  navigator.vibrate(DURATION);

  // 演出
  startTextMotion();
  setTimeout(stopTextMotion, DURATION);
}

/** テキストのモーションを再生します。 */
function startTextMotion() {
  stopTextMotion();

  intervalId = setInterval(moveTextToRandom, FPS / 1000);
}

/** テキストのモーションを停止します。 */
function stopTextMotion() {
  if (intervalId) {
    clearInterval(intervalId);
  }

  // もとの座標に戻す
  bu.css({transform: `translate(0px, 0px)`});
  ru.css({transform: `translate(0px, 0px)`});
  tsu.css({transform: `translate(0px, 0px)`});
}

/** テキストの座標をランダムに動かします。 */
function moveTextToRandom() {
  const l = 10;

  // ランダムな座標にずらす
  bu.css({
    transform: `translate(
        ${(Math.random() - 0.5) * l}px,
        ${(Math.random() - 0.5) * l}px)`
  });

  ru.css({
    transform: `translate(
        ${(Math.random() - 0.5) * l}px,
        ${(Math.random() - 0.5) * l}px)`
  });

  tsu.css({
    transform: `translate(
        ${(Math.random() - 0.5) * l}px,
        ${(Math.random() - 0.5) * l}px)`
  });
}

