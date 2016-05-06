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


  // templating with mustache.js

  var aboutUs = [];
  var directToYou = {
    title: "Direct to You",
    imageSrc: "_assets/icons/icon-direct-to-you_edited.png",
    imageAlt: "direct-to-you",
    text: "So we can dramatically lower the cost of your beer without compromising quality."
  };
  var pubLess = {
    title: "Pub-less",
    imageSrc: "_assets/icons/icon-pub-less_edited.png",
    imageAlt: "pub-less",
    text: "We're a 21st century company designed to support your digital mobile lifestyle."
  };
  var peaceMind = {
    title: "Peace of Mind",
    imageSrc: "_assets/icons/icon-peace-of-mind_edited.png",
    imageAlt: "peace-of-mind",
    text: "We've partnered with the best micro-breweries with decades of experience."
  };
  var expertAdvice = {
    title: "Expert Advice",
    imageSrc: "_assets/icons/icon-expert-advice_edited.png",
    imageAlt: "expert-advice",
    text: "We know beer best. We understand how to match you with the right beer at the right price."
  };

  aboutUs.push(directToYou, pubLess, peaceMind, expertAdvice);

  (function loadtemp(){
    var output1 = Mustache.render("<h4>{{title}}</h4><img src={{imageSrc}} alt={{imageAlt}}/><p>{{text}}</p>", directToYou);
    document.getElementById('direct_to').innerHTML = output1;

    var output2 = Mustache.render("<h4>{{title}}</h4><img src={{imageSrc}} alt={{imageAlt}}/><p>{{text}}</p>", pubLess);
    document.getElementById('pub_less').innerHTML = output2;

    var output3 = Mustache.render("<h4>{{title}}</h4><img src={{imageSrc}} alt={{imageAlt}}/><p>{{text}}</p>", peaceMind);
    document.getElementById('peace_of_mind').innerHTML = output3;

    var output4 = Mustache.render("<h4>{{title}}</h4><img src={{imageSrc}} alt={{imageAlt}}/><p>{{text}}</p>", expertAdvice);
    document.getElementById('expert_advice').innerHTML = output4;
  } ());

});