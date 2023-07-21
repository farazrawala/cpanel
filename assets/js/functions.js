$(document).ready(function() {
    $("section.trademark-form.gcr form").validate();


$(".validate-popupform-thnks").validate();

$(".validate-popupform-video").validate();

$(".validate-popupform-quote").validate();

$(".validate-popupform-web").validate();

	// Get the form.
	var form = $('.contact_form');


	// Get the messages div.
	var formMessages = $('.form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

var cnname     = $('#cn').val();
var emname     = $('#em').val();
var pnname     = $('#pn').val();
var msgname     = $('#msg').val();

	 if (cnname != "" && emname != "" && pnname != "" && msgname != "" ){
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('.contact_form .required').val('');

		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	}
	});




/******************************************/
/* FAQ section script */
/******************************************/

$(".faq-sections *").hide();
$('.clients-1').css('display', 'block');
$('li[data-value=clients-1]').addClass('cs-selected');
$('.faq-opt').on('click', function(e){
        var optionValue = $(this).data("value");
            if(optionValue){
                $(".faq-sections div").hide();
                $(".faq-sections " + "." + optionValue).show();
            } else{
                $(".box").hide();
            }
});

/******************************************/
/* FAQ section script ends */
/******************************************/








var key = '5XpThOAEkfgOvEJ';
      var currentIP = $("meta[name=ip2loc]").attr('content');

      $.ajax({
      method: 'get',
      url: 'https://pro.ip-api.com/json/' + currentIP,
      data: {key: key},
      success: function (data) {
      if (data) {
      $('input[name=ip2loc_ip]').val(data.query);
      $('input[name=ip2loc_isp]').val(data.isp);
      $('input[name=ip2loc_org]').val(data.org);
      $('input[name=ip2loc_country]').val(data.country);
      $('input[name=ip2loc_region]').val(data.regionName);
      $('input[name=ip2loc_city]').val(data.city);
      }
      }
      });




$('.counter').counterUp({
delay: 10,
time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


      $('.portfolioslider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,

   responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


    var selectedClass = "";
    $(".fil-cat").click(function(){
        $(this).addClass('active-pf');
    selectedClass = $(this).attr("data-rel");
     $("#packages-sec").fadeTo(100, 0.1);
    $("#packages-sec>div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#packages-sec").fadeTo(300, 1);
      $('.fil-cat').removeClass('active-pf')
    }, 300);

  });


/*PORTFOLIO*/



    $('.various').click(function() {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)

    });



    var str = location.href.toLowerCase();
    $(".navbar-nav li a").each(function() {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.active").removeClass("active");
            $(this).parent().addClass("active");
        }
    });

$('.customerslider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    responsiveClass:true,

    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})

    $('[data-fancybox]').fancybox();
    $(".validate-popupform").validate();
	$('.contact_form').validate();
    $(".contactusform").validate();
    $(".validate-footer").validate();
    $(".contactusform-footer").validate();












  // init Isotope
  var $container = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
  });






  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterValue;
    $container.isotope({
      filter: filterValue
    });
  });



  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 9; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

$('#showMore ').on('click', function (e) {
    e.preventDefault();
    showNextItems(next_items);
});
  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#showMore").hide();
    } else {
      jQuery("#showMore").show();
    };

  }

  //append load more button
  $container.after('<button id="showMore"> Show More</button>');

  //when load more button clicked
  $("#showMore").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });



 $('.lazy').lazy();

});



document.write("");

function setButtonURL() {
    zE.activate();
}


$('.chat').click( function(){
    zE.activate();
});
 