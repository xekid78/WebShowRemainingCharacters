(function() {
  'use strict';

  var now = null;
  var max = 100;
  var input_area = document.getElementById("text_area");
  var output_area = document.getElementById("text_length");

  input_area.onkeyup = function(){
    now = ( max - input_area.value.length );
    output_area.innerText = now;
    output_area.className = ( now < 0 ) ? "out" : "";
  }

})();
