// var letters = [];
// $(".brand_item").each(function(index) {
//   var _this = $(this);
//   var letter = _this
//     .find("img")
//     .attr("alt")
//     .substring(0, 1)
//     .toLowerCase();

//   _this.data("letter", letter);
//   console.log($(this).data("letter"));

//   var found = letters.find(element => element === letter);
//   if (!found) letters.push(letter);
// });
// letters.sort(function(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
// for (let i = 0; i < letters.length; i++) {
//   $(".brand-letters").append('<li><a href="#">' + letters[i] + "</a></li>");
// }
// const heLetters = String.fromCharCode(...[...0x377babbcf7f.toString(3)].map(c=>++n-c,n=1488));
var searchQuestions = $("#search_questions");
searchQuestions.focus();
searchQuestions.keyup(function() {
  // mediaCheck({
    // media: "(max-width: 640px)",
    // entry: $.proxy(function() {
    
    // }, this),
    // exit: $.proxy(function() {}, this)
  // });

  var question = $(".brands_list .brand_item");
  $(".brands_list .brands-messages").hide();
  var val = $(this).val();
  //  if (heLetters.indexOf(val) >= 0) {
  //    $(this).val('')
  //   return;
  // }
  var closeBtn = $(".search_questions_wrap .brands-clear");

  var unfilteredDivs = question.filter(function() {
    var reg = new RegExp(val, "i");
    var text = $(this)
      .find("img")
      .attr("alt");
    return !reg.test(text);
  });
  if (val === "") {
    question.show();
    if (closeBtn.hasClass("active")) closeBtn.removeClass("active");
  } else {
    unfilteredDivs.hide();
    if (!closeBtn.hasClass("active")) closeBtn.addClass("active");
  }
  var filteredDivs = question.filter(function() {
    var reg = new RegExp(val, "i");
    var text = $(this)
      .find("img")
      .attr("alt");
    return reg.test(text);
  });
  filteredDivs
    .stop()
    .show()
    .addClass("bounceInRight");
   // mediaCheck({
                    // media: '(max-width: 640px)',
                    // entry: $.proxy(function () {

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: searchQuestions.offset().top - 58
    },
    750
  );  
    // }, this),
                    // exit: $.proxy(function () {
                     
                    // }, this)
                // });
  if (!filteredDivs.length) {
    $(".brands_list .brands-messages").show();
  }

  // setTimeout(function() {
  //   $(".bounceOutLeft, .animated, .bounceInRight")
  //     .removeClass("bounceOutLeft")
  //     .removeClass("bounceInRight")
  //     .removeClass("animated");
  // }, 800);
});

$(".brands-clear").on("click", function() {
  $("#search_questions").val("");
  $(".brands_list .brand_item").show();
  $(".brands_list .brands-messages").hide();

  if ($(".brands-clear").hasClass("active"))
    $(".brands-clear").removeClass("active");
  $("#search_questions").focus();
});
// $(".brand-letters a").on("click", function() {
//   $("#search_questions").val("");
//   if ($(this).hasClass("active")) {
//     $(".brand_item").show();
//     $(".brand-letters a").removeClass("active");
//   } else {
//     var letter = $(this)
//       .text()
//       .toLowerCase();
//     $(".brand-letters a").removeClass("active");
//     $(this).addClass("active");

//     $(".brand_item")
//       .filter(function(index) {
//         return (
//           $(this)
//             .data("letter")
//             .substring(0, 1)
//             .toLowerCase() === letter
//         );
//       })
//       .addClass("bounceInRight")
//       .show();
//     $(".brand_item")
//       .filter(function(index) {
//         return (
//           $(this)
//             .data("letter")
//             .substring(0, 1)
//             .toLowerCase() !== letter
//         );
//       })
//       .addClass("bounceOutLeft")
//       .delay(350)
//       .hide();
//   }
//   setTimeout(function() {
//     $(".bounceOutLeft, .animated, .bounceInRight")
//       .removeClass("bounceOutLeft")
//       .removeClass("bounceInRight")
//       .removeClass("animated");
//   }, 800);
// });
