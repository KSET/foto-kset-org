//= require application
//= require jquery.transmit.min
//= require lightbox
//= require jquery.cookie
//= require phrasing

$(document).ready(function(){
  $(window).load(function () {
      $('#preloader').fadeOut('slow', function () { $(this).remove(); });
  });

  $(window).scroll( function(){
    if ( $(this).scrollTop() > 500 ) {
      $("#BackToTop").fadeIn(400);
    }
    else{
      $("#BackToTop").fadeOut(400);
    }
  });

  $('#BackToTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $("#FollowUsFooter img").hover(
    function(){
      $(this).transition({scale:1.5});
    },
    function(){
      $(this).transition({scale:1.0});
    });

  $(".Shortcut").click(function(e){
    e.preventDefault();
    var divID = $(this).attr("href");
    positionFromTop = $("" + divID).offset().top;
    var offset = $(window).height() / 2 - $("" + divID).height() / 2;
    var scrollValue = positionFromTop - offset;
    $("html, body").animate({ scrollTop: scrollValue }, 2000);
  });

  $(".ClosePrijaveModal").click(function() {
    $("#TecajModal, #RadionicaModal").modal("hide");
  });

  $('#SubmitRadionica').click(function() {
    $('.modal-body .workshop-form-container form').submit();
  });

  $('#SubmitTecaj').click(function() {
    $('.modal-body .course-form-container form').submit();
  });

  $('#SubmitInlineRadionica').click(function() {
    $('#PrijavaRadionica .workshop-form-container form').submit();
  });

  $('#SubmitInlineTecaj').click(function() {
    $('#PrijavaTecaj .course-form-container form').submit();
  });

  $('body').scrollspy({ target: '.navbar', offset: 400 });
});
