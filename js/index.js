$(".one").click(function(){
 $("#show").toggle();
});

$(".one").click(function(){
    $(".two").slideToggle("slow");
   });

   $(".one").click(function(){
    $("#hide").toggle();
   });
   /*js for section 2*/

   $(".three").click(function(){
 $("#open").toggle();
});

$(".three").click(function(){
    $(".four").slideToggle("slow");
   });

   $(".three").click(function(){
    $("#off").toggle();
   });

   /*js for section 3*/

   $(".five").click(function(){
 $("#openn").toggle();
});

$(".five").click(function(){
    $(".six").slideToggle("slow");
   });

   $(".five").click(function(){
    $("#closed").toggle();
   });

     /*js for section 3*/

   $(".fivee").click(function(){
 $("#opennn").toggle();
});

$(".fivee").click(function(){
    $(".sixx").slideToggle("slow");
   });

   $(".fivee").click(function(){
    $("#closedd").toggle();
   });

   /*js for section 3*/

   $(".five1").click(function(){
 $("#openn1").toggle();
});

$(".five1").click(function(){
    $(".six1").slideToggle("slow");
   });

   $(".five1").click(function(){
    $("#closed1").toggle();
   });
   /*js for section 3*/

   $(".five2").click(function(){
 $("#openn2").toggle();
});

$(".five2").click(function(){
    $(".six2").slideToggle("slow");
   });

   $(".five2").click(function(){
    $("#closed2").toggle();
   });


   /*FAQ*/
   const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


