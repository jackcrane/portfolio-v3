document.addEventListener('mousemove', function(ev){
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  document.querySelector('#mtarg').style.top = `${ev.pageY - 1}px`;
  document.querySelector('#mtarg').style.left = `${ev.pageX + 1}px`;
  // 210, 150
  let x1 = ev.pageX;
  let y1 = ev.pageY;
  let x2 = 210;
  let y2 = 150;

  let slope;
  if(x1 > x2) {
    slope = Math.atan((y2 - y1) / (x2 - x1)) * (180 / Math.PI) + 180;
  } else {
    slope = Math.atan((y2 - y1) / (x2 - x1)) * (180 / Math.PI);

  };
  document.querySelector('#mtarg').style.transform = `rotate(${slope}deg)`;
  
  let len = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
  document.querySelector('#mtarg').style.width = `${len}px`;

  // document.querySelector('#mtarg').style.background = `rgba(244,250,255,${len})`;
  document.querySelector('#mtarg').style.opacity = clamp((1000 - len) / 1000, 0, 0.8)
},false);

document.querySelector('body').style.transition = '.3s'