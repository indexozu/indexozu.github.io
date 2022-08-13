let items = document.querySelectorAll(`[data-day]`);

  if( localStorage.length > 0 ) {
    let markedDays = JSON.parse( localStorage.getItem("markedDays") )

      if( markedDays && markedDays.length > 0 ) {
        markedDays.forEach( markedDay => {
          document.querySelector(`[data-day="${markedDay}"]`).classList.add('mark')
          });
      }
  }

  items.forEach( item => {

    item.addEventListener('click', function(item) {

      let markedDaysArray = []

      item.target.classList.toggle('mark')

        document.querySelectorAll('.mark').forEach( markedItem => {

          markedDaysArray.push( markedItem.dataset.day )

        })
        localStorage.setItem("markedDays", JSON.stringify( markedDaysArray ));
    });
})
