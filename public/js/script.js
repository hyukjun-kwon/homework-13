$(document).ready(() => {

  // devour button - update burger's devoured
  $(".devour-btn").on("click", function(event) {
    event.preventDefault();

    $.ajax({
      url: `/api/burgers/${$(this).data('id')}`,
      method: 'PUT'
    }).then(() => {
      location.reload();
    });
  });

  $(".add-burger-btn").on('click', function(event) {
    event.preventDefault();

    const burger_name = $("#burger-input").val().trim();
    $("#burger-input").val("");

    if(burger_name != "") {
      $.ajax({
        url: `/api/burgers`,
        method: "POST",
        data: { name: burger_name }
      }).then(() => {
        location.reload();
      });
    }
  });

});