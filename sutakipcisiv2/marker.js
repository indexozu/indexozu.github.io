let items = document.getElementsByClassName('day');

function mark() {
  for(let i = 1; i <= items.length; i++){
    var chk = document.getElementsByClassName('day')[i - 1];
    chk.classList.toggle('mark');
    }
  }

  for(let i = 1; i <= items.length; i++){
    document.getElementById(i).addEventListener("click", mark);
  }