(function() {
  "use strict";
  window.addEventListener("load", init);
  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener('click',handleClick);
    document.getElementById("normal-size").addEventListener("click", fontSize);
		document.getElementById("bigger-size").addEventListener("click", fontSize);
    document.getElementById("all-caps").addEventListener("change", upper);
    document.getElementById("reset").addEventListener('click',reset);
    
  }
  


  function handleClick(){
    var plainText = document.getElementById("input-text").value;
    var ciphertext =shiftCipher(plainText);
    document.getElementById("result").innerText = ciphertext;
    console.log("button clicked");


  }
  
  function fontSize(){
    if (document.getElementById("normal-size").checked){
			
      document.getElementById("result").style.fontSize = "12pt";
		
    } else {
			
      document.getElementById("result").style.fontSize = "24pt";
		
    }
	}

    
  
  function upper() {
    var text = document.getElementById("result")
    if(document.getElementById("all-caps").checked){
      
      text.innerText.toUpperCase();
    
    }else{

     text.innerText.toLowerCase();
    }
   
  }

  function reset(){
    document.getElementById("all-caps").checked = false;
    document.getElementById("result").innerText ="";
    document.getElementById("input-text").value="";
    document.getElementById("result").style.fontSize = "12pt";
    document.getElementById("normal-size").checked = true;
  }

function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { 
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
}());