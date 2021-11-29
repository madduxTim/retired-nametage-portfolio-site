$(document).ready(function(){
    $("#raptors").raptorize();  
    //randomize background color 
    // applyBackGround(); 
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  });


var pressed = [];
const konami = "38384040373937396665";
window.addEventListener("keyup", (e) => {
    pressed.push(e.keyCode);
	pressed.splice(-konami.length - 1, pressed.length - konami.length);
	if (pressed.join("").includes(konami)) {
        pressed = [];
        $( "#raptors" ).trigger( "click" );
	}
});

showStatement = () => {
    // Materialize.showStaggeredList('#statement');
};

// applyBackGround = () => {
//     const backgrounds = ["aquamarine",'blue','red','green'];
//     let pickAnyCard = Math.floor(Math.random() * (backgrounds.length - 0) + 0);
//     $('body').css('background-color',backgrounds[0]);
// }