$(document).ready(function() {
  $(".menu-icon").click(function() {
    $(".drop-down").toggle("slow");
  });

  // $(".btn").click(function() {
  //   $(this).animate(
  //     {backgroundColor: "black"},
  //     500,
  //     "swing",
  //     function() {
  //       $(this).css("background-color", "#1160AD");
  //     }
  //   );
  // });
$("button").click(function(){
  $(this).css("backgroundColor", "#7F2B0D")
  }
);

$(".menu-icon").click(function() {
  $(this).animate(
    {"rotate": "90"},
    1000,
    function() {
      $(this).animate(
        {"rotate": "90"}
      )
    }
  );
});

});