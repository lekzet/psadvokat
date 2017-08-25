/*    modal    */

$(document).ready(function(){

    var modalBtn = document.querySelectorAll(".modal__btn");
    var modal = document.querySelectorAll(".modal");

    for (var i = 0; i < modalBtn.length; i++) {

        modalBtn[i].addEventListener('click', function(event) {
            event.preventDefault();

            var count = this.getAttribute('data-count');
            modal[count].classList.add("modal--show");
            
            var modalClose = modal[count].querySelector(".modal__close");
            
            modalClose.addEventListener("click", function(event) {
                event.preventDefault();
                modal[count].classList.remove("modal--show");
            });
        });

    };

});



