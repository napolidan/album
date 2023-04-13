// album logic



window.onload = function() {

  var time = 48;

  var container = document.querySelector('.container');

  container.style.opacity = '1';

  let allImages = container.querySelectorAll('img');

  var maxIndex = allImages.length;

  // base coordinate
  var rectDistance = container.getBoundingClientRect();
  
  var height = allImages[0].offsetHeight;

  rectDistance = rectDistance.bottom - rectDistance.top - height;

  var delay=0;

  delayJumps = time/6;
  
  for ( let i=0 ; i<maxIndex ; i++ ) {

    parent = allImages[i].parentNode;

    height = parent.matches(':nth-child(odd)') ? (-1)*height : height;

    rect = parent.matches(':nth-child(odd)') ? (-1)*rectDistance : rectDistance;

    origin = parent.matches(':nth-child(odd)') ? 'top' : 'bottom';

    keyframes = `@keyframes myAnimation${i} {

      0% {
        ${origin}: 0%;
      }

      50% {
        ${origin}: 50%;
      }
    
      100% {
        ${origin}: 100%;
      }

    };`;

    style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    allImages[i].style.animation = `myAnimation${i} ${time}s linear ${-delay}s infinite`;

    delay = delay+delayJumps<time ? delay+delayJumps : 0;

  }

}

