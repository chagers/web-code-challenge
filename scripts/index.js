$(document).ready(function(){

  $(".button-collapse").sideNav();

  $(".advice-button, .beer-button").click(function() {
    var favoriteBeer = $("#fav_beer").val();
    var beerCount = $("#beer_count").val();

    if (favoriteBeer === "" || beerCount === null) {
      Materialize.toast("Enter your selections before we can give you advice or beer!", 4000);
      return false;
    }

    var thisMany = function() {
      if (beerCount === 1) {
        return "1-2";
      } else if (beerCount === 2) {
        return "3-4";
      } else {
        return "5+";
      }
    };

    console.log("The user's favorite beer is: " + favoriteBeer);
    console.log("The user drinks " + thisMany() + " beers per week.");
  });

});