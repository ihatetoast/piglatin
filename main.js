$(document ).ready(function() {
    alert("piggies a go go")
  
  $("#translateButt").click(function() {
    var pigLat = [];
    var pig = $("#translateInput").val().toLowerCase();
    //test for empty and null
    if ((pig == null) || (pig == "") ) {
      alert("Don't be absurd. Please enter a word");
    }
    else if(pig.search(/^[A-Za-z\s]+$/)){
    alert("Oy! I said no punctuation marks or numerals!")
    }
    else if(isNaN(pig)){
      var pigArr = pig.split(' ');
      for(var ind = 0; ind<pigArr.length; ind++){
        var word = pigArr[ind];
        // console.log("first letter of word is "+pigArr[ind].charAt(0));
        if(pigArr[ind].charAt(0).match(/^[aeiou]$/i)) {
          // console.log("this word starts with a vowel");
          pigWord=word.concat("yay");
          pigLat.push(pigWord);
        } else{
          // console.log("this word does not start with a vowel");
          //identify first letter
          firstLetter=word.charAt(0);
          //remove the first letter
          //leaving remaining parts of the word
          beheadedWord=word.substr(1);
          pigWord=beheadedWord.concat(firstLetter).concat("ay");
          pigLat.push(pigWord);
        }
        console.log(pigLat.join(' '));
        var pigLatTrans = pigLat.join(' ');
        $("#translationText").html('Translation: '+pigLatTrans);
      }
    }
    else{
      alert("What have you done?")
    }
  })
  $("#clearButt").click(function(){
    $("#translateInput").val('');
    $("#translationText").html('');
  })
});