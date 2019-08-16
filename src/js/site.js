// new fake dropdown grid for projects
$(function() {
  $('#first-active').addClass('active');
});

$('input').on('change', function() {
  $('#select-op-btn').html(this.checked ? this.value : '');
});

$(document).on("click", 'ul li', function(){
    $('ul li').removeClass('active');
    $(this).addClass('active');
});

$('.js-option').on('click', function() {
  $("#options").toggleClass("js-drop");
});


// shows the corresponding projects when a radio button is clicked
$('input[type="radio"]').click(function(){
    var inputValue = $(this).attr("class");
    var targetBox = $("." + inputValue);
    $(".brick").not(targetBox).hide();
    $(targetBox).show(500);
});


// scroll to top arrow
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn('slow'); 
        } else { 
            $('#scroll').fadeOut('slow'); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});







