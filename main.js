const overflow = document.getElementById('targetClose');
const canvas = document.getElementById('awaitTrigger');
const canvasStyle = document.getElementById('awaitTriggerOn');
const btnClose = document.getElementById('btn-close');
const btnOpen = document.getElementById('targetAsideCanvas');

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function openCanvas() {
  overflow.style.display = 'block';
  canvas.style.display = 'flex';
  canvas.style.opacity = '1';
  await wait(250);
  canvas.style.width = '384px';
  canvas.style.borderRadius = '25px';
  await wait(250);
  canvas.style.height = '80vh';
  await wait(250);
  canvas.style.borderRadius = '0px 25px 25px 0px';
  canvasStyle.style.display = 'flex';
  await wait(25);
  canvasStyle.style.opacity = '1';
  await wait(250);
  btnClose.style.transform = 'rotate(45deg)';
}

async function closeCanvas() {
  btnClose.style.transform = 'rotate(0deg)';
  await wait(250);
  canvasStyle.style.opacity = '0';
  await wait(25);
  canvasStyle.style.display = 'none';
  canvas.style.borderRadius = '25px';
  await wait(250);
  canvas.style.height = '64px';
  await wait(250);
  canvas.style.width = '64px';
  canvas.style.borderRadius = '50px';
  await wait(250);
  canvas.style.opacity = '0';
  overflow.style.display = 'none';
  canvas.style.display = 'none';
}

btnOpen.addEventListener('click', openCanvas);
btnClose.addEventListener('click', closeCanvas);
overflow.addEventListener('click', closeCanvas);