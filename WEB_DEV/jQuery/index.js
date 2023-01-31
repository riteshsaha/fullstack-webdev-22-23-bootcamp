// $(document).ready() with a callback waits for the jquery to be executed before using the $("h1").css() call.
$(document).ready(function () {
    $("h1").css("color", "red"); // Incorrect way to assign style to elements.
    $("h2").addClass("big-title"); // Correct way to seggregate having style properties in css instead of assigning property values to an element in js itself.
    $("h1").addClass("big-title margin-50"); // Adding multiple classes
    $("h1").removeClass("big-title"); // Removing one class; Can remove multiple classes also.
    /*
    $("h1").hasClass("big-title margin-50"); ----- false
    $("h1").hasClass("margin-50"); ----- true
    */
    $("h2").text("HELLO!!!!");
    $("button").text("Don't Click Me!"); // Changes text for all the buttons
    $("button").html("<em>Click Me!</em>"); // Adds HTML content
    $("a").attr("href", "https://www.yahoo.com"); // Changes attribute value
    //$("h1").attr("class"); ---- margin-50

    // Adding Event Listeners
    $("button").click(function () {
        if ($("h1").hasClass("big-title")) {
            $("h1").removeClass("big-title");    
        } else {
            $("h1").addClass("big-title"); 
        }
    });

    $("input").keypress(function (event) {
        console.log(event.key);
    });

    /*
    This allows to call the event listener when key is pressed when the page is loaded.
    $(document).keypress(function (event) {
        console.log(event.key);
    });*/

    // Another way to call event listener
    $("h2").on("mouseover", function () {
        if ($("h2").hasClass("margin-50")) {
            $("h2").removeClass("margin-50");    
        } else {
            $("h2").addClass("margin-50"); 
        }
    });


    $("h1").before("<button>Before</button>");
    $("h1").after("<button>After</button>");
    $("h1").prepend("<button>Prepend</button>");
    $("h1").append("<button>Append</button>");

    //$("button").remove();

    $("button").on("click", function () {
        $("h2").slideUp().slideDown().animate({opacity : 0.5});
        //$("h2").animate({opacity: 0.3});
        //$("h2").show();
        //$("h2").hide();
        //$("h2").toggle();
        //$("h2").fadeIn();
        //$("h2").fadeOut();
        //$("h2").fadeToggle();
        //$("h2").slideUp();
        //$("h2").slideDown();
        //$("h2").slideToggle();
    })
});
