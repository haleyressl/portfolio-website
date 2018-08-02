// Code that is under this section does not require jquery

// Get the element with id="defaultOpen" and have it open on page load
document.getElementById("defaultOpen").click();

// Open tab on click
function openProjects(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Code that uses JQuery needs to be inside of the document ready function

$(document).ready(function () {
	// Change color of hamburger menu on scroll past hero from white to pink
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 460) {
	        $(".spinner").addClass("scroll--hotpink");
	    } else {
	        $(".spinner").removeClass("scroll--hotpink");
	    }
	});
});