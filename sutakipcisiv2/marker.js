let items = document.getElementsByClassName('day').length;
    
    function save() {	
      for(let i = 1; i <= items; i++){
        var status = document.getElementById(String(i));
        localStorage.setItem('marked' + String(i), status.className = 'marked') ;
      }
    }

    for(let i = 1; i <= items; i++){
      if(localStorage.length > 0){
        var status = document.getElementById(String(i));
        var check = JSON.parse(localStorage.getItem('marked' + String(i)));
        status.className = check;
    }
  }
    window.addEventListener('change', save);