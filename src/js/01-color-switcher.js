refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

refs.start.addEventListener('click', onStartbtnClick);
refs.stop.addEventListener('click', onStopbtnClick);

let timerId = null;

refs.stop.disabled = true;
refs.start.disabled = false;

function onStartbtnClick() {
  if (timerId) return;

  refs.stop.disabled = false;
  refs.start.disabled = true;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopbtnClick() {
  refs.stop.disabled = true;
  refs.start.disabled = false;

  clearInterval(timerId);
  timerId = undefined;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
