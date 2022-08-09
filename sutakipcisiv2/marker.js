let items = document.getElementsByClassName('day');

function mark() {
  for(let i = 1; i <= items.length; i++){
    var chk = document.querySelector(`[data-day="${i}"]`);
    chk.classList.toggle('mark');
    }
  }

  for(let i = 1; i <= items.length; i++){
  document.querySelector(`[data-day="${i}"]`).addEventListener("click", mark);
  }
