new WOW().init();
$(document).ready(function () {
$('.drawer').drawer();
});

//スムーススクロール
$('a[href^="#"]').click(function() {
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position - $('#js-header').outerHeight()
     },
      speed
    );
    return false;
  });
  
//google form
let $form = $('#js-form')
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 
  

//formの入力確認
let $submit = $('#js-submit');
$('#js-form input, #js-form textarea').on('change', function () {

   if (
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form textarea').val() !== "" && 
        $('#js-form input[name="entry.1982473733"]').prop('checked') === true
    ) {
        $submit.addClass('-active');
    }
    else {
        $submit.removeClass('-active');
    }
});

