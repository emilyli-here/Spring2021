window.onload = function() {
  const toggle = document.getElementById('toggle');
  const slideBlock = document.getElementsByClassName('slide-block')[0];
  
  toggle.addEventListener('change', function(e) {
    if(e.target.checked) {
      slideBlock.className = slideBlock.className.replace('slide-out', 'slide-in');
    } else {
      slideBlock.className = slideBlock.className.replace('slide-in', 'slide-out');
    }
  });
};

