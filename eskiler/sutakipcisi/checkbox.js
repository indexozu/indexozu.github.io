let items = document.getElementsByClassName('day').length;
    
    function save() {	
      for(let i = 1; i <= items; i++){
          var checkbox = document.getElementById(String(i));
        localStorage.setItem("checkbox" + String(i), checkbox.checked);
      }
    }

    for(let i = 1; i <= items; i++){
      if(localStorage.length > 0){
        var check = JSON.parse(localStorage.getItem("checkbox" + String(i)));
        document.getElementById(String(i)).checked = check;
      }
    }
    window.addEventListener('change', save);