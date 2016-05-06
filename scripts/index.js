$(document).ready(function() {

// dropdown menu animations on tablet and mobile
  $(".menu-icon").click(function() {
    $(this).toggleClass("rotate");
    $(".drop-down").toggle("slow");
  });

// button animations
  $(".btn-red").click(function(){
    $(this).css("backgroundColor", "#7F2B0D");
  });

  $(".btn-blue").click(function() {
    $(this).css("backgroundColor", "#002B5C");
  });

// form actions and validation
  $("#get-advice, #get-beer").click(function() {
    var favoriteBeer = $("#fav_beer").val();
    var beerCount = $("#beer_count").val();
    if (favoriteBeer === "" || beerCount === undefined) {
      alert("Enter your selections before we can give you advice or beer!");
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