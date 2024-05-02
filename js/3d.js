// first we handle shirt color
$('#shirt-blue').on("click", function(){
    $('#shirt-body .shirt-body').css("fill", "#21AAC1");
    $('#shirt-body .shirt-inner').css("fill", "#3f98a8");
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#shirt-green').on("click", function(){
    $('#shirt-body .shirt-body').css("fill", "#83B76E");
    $('#shirt-body .shirt-inner').css("fill", "4F773D");
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#shirt-red').on("click", function(){
    $('#shirt-body .shirt-body').css("fill", "#B50D0D");
    $('#shirt-body .shirt-inner').css("fill", "#9c2a2a");
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#shirt-orange').on("click", function(){
    $('#shirt-body .shirt-body').css("fill", "#d3a637");
    $('#shirt-body .shirt-inner').css("fill", "#d6ba74 ");
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#shirt-black').on("click", function(){
    $('#shirt-body .shirt-body').css("fill", "#000000");
    $('#shirt-body .shirt-inner').css("fill", "#000000");
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  
  // now we worry about the chevrons
  $('#chevrons-blue').on("click", function(){
    $('#shirt-chevrons polygon').css({
      "fill":"#21AAC1",
      "display":"block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#chevrons-orange').on("click", function(){
    $('#shirt-chevrons polygon').css({
      "fill": "#FF9C1A",
      "display": "block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#chevrons-red').on("click", function(){
    $('#shirt-chevrons polygon').css({
      "fill": "#B50D0D",
      "display": "block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#chevrons-black').on("click", function(){
    $('#shirt-chevrons polygon').css({
      "fill": "#000000",
      "display": "block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#chevrons-green').on("click", function(){
    $('#shirt-chevrons polygon').css({
      "fill": "#83B76E",
      "display": "block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#chevrons-toggle').on("click", function(){
    $('#shirt-chevrons polygon').toggle();
    $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  
  // now we worry about the side stripe
  $('#side-stripe-blue').on("click", function(){
    $('#shirt-stripe path').css({
      "fill": "#21AAC1",
      "display": "block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#side-stripe-purple').on("click", function(){
    $('#shirt-stripe path').css({
      "fill": "#731587",
      "display": "block"
    });
     $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#side-stripe-red').on("click", function(){
    $('#shirt-stripe path').css({
      "fill": "#B50D0D",
      "display": "block"
    });
    $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#side-stripe-black').on("click", function(){
    $('#shirt-stripe path').css({
      "fill": "#000000",
      "display": "block"
    });
    $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#side-stripe-green').on("click", function(){
    $('#shirt-stripe path').css({
      "fill": "#83B76E",
      "display": "block"
    });
    $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });
  $('#side-stripe-toggle').on("click", function(){
    $('#shirt-stripe path').toggle();
    $(this).siblings().removeClass('btn-info').end().addClass('btn-info');
  });