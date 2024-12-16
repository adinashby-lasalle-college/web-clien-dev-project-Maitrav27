$(document).ready(function() {

   
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

 
    $(".social-links a").hover(
        function() {
            $(this).find("img").css("opacity", "0.7");
        },
        function() {
            $(this).find("img").css("opacity", "1"); 
        }
    );

   
    if ($("#scrollTop").length === 0) {
     
        $("body").append('<button id="scrollTop" style="position: fixed; bottom: 20px; right: 20px; display: none; background-color: #000; color: #fff; border: none; padding: 10px; cursor: pointer;">↑</button>');
    }

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn(); 
        } else {
            $('#scrollTop').fadeOut(); 
        }
    });

    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500); // Scroll to top
    });

   
    setTimeout(function() {
        alert("Welcome to my personal website! Explore my work and skills.");
    }, 3000);

});


//about page

$(document).ready(function() {

   
    $("a").on("click", function(event) {
       
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
           
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(".social-links a").hover(
        function() {
            $(this).find("img").css("opacity", "0.7"); 
        },
        function() {
            $(this).find("img").css("opacity", "1"); 
        }
    );

    if ($("#scrollTop").length === 0) {
        $("body").append('<button id="scrollTop" style="position: fixed; bottom: 20px; right: 20px; display: none; background-color: #000; color: #fff; border: none; padding: 10px; cursor: pointer;">↑</button>');
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn(); 
        } else {
            $('#scrollTop').fadeOut(); 
        }
    });

    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500); 
    });
    $(".about-content").hide().fadeIn(1500);

});

//contact page

$(document).ready(function() {

    
    $("a").on("click", function(event) {
  
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(".social-links a").hover(
        function() {
            $(this).find("img").css("opacity", "0.7"); 
        },
        function() {
            $(this).find("img").css("opacity", "1"); 
        }
    );

    $("form").submit(function(event) {
        event.preventDefault(); 

 
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
        } else {
            
            alert("Thank you for reaching out! Your message has been sent.");
           
            $("form")[0].reset();
        }
    });

});

//portfolio page

$(document).ready(function() {
    
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

 
    $(".portfolio-item").hover(
        function() {
            $(this).find("img").css("transform", "scale(1.05)"); 
        },
        function() {
            $(this).find("img").css("transform", "scale(1)"); 
        }
    );

});


