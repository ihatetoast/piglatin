//new issue: dealing with y. example: wyatt is turned into attwyay 
// also when ends in y like okayyay


  $('#clearButt').hide();
  $('#corn_bite').hide();


  $("#translateButt").click(() => {
    let pigLat = [];
    let pig = $("#translateInput").val().toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];

    //test for empty and null
    if ((pig == null) || (pig == "") ) {
      alert("Don't be absurd. Please enter a word");
    }
    else if(pig.search(/^[A-Za-z\s]+$/)){
    alert("Oy! I said no punctuation marks or numerals!")
    }

    else if(isNaN(pig)){
      let pigArr = pig.split(' ');
      for(let ind = 0; ind<pigArr.length; ind++){
        let word = pigArr[ind];
        //**********************//
        // VOWELS -- EASY PEASY //
        //**********************//
        if(pigArr[ind].charAt(0).match(/^[aeiou]$/i)) {
          pigWord=word.concat("yay");
          pigLat.push(pigWord);
          $("input").css("background-image", "url(./images/corn_bite.png)");
          $("#pigCode").attr("src", "./images/pig_mouth_open.png");
          $('#clearButt').show();
          $('#corn_bite').show();
        } 

        else if ((vowels.indexOf(pigArr[ind][0])===-1)&&(vowels.indexOf(pigArr[ind][1])===-1)&&(vowels.indexOf(pigArr[ind][2])===-1)){
          console.log(pigArr[ind][2]);
          //***********************************//
          //  CONSONANTS  -- 3 cluster  WORKS   //
          //***********************************//
          let pigWord=word.substr(3).concat(word.substr(0,3)+"ay");
          pigLat.push(pigWord);
          $("input").css("background-image", "url(./images/corn_bite.png)");
          $("#pigCode").attr("src", "./images/pig_mouth_open.png");
          $('#clearButt').show();
          $('#corn_bite').show();
        } 
        //***********************************//
        //       CONSONANTS  -- 2 cluster    //
        //***********************************//

        else if ((vowels.indexOf(pigArr[ind][0])===-1)&&(vowels.indexOf(pigArr[ind][1])===-1)){
          //remove the first letter
          //leaving remaining parts of the word
          let pigWord=word.substr(2).concat(word.substr(0,2)+"ay");
          pigLat.push(pigWord);
          $("input").css("background-image", "url(./images/corn_bite.png)");
          $("#pigCode").attr("src", "./images/pig_mouth_open.png");
          $('#clearButt').show();
          $('#corn_bite').show();
        } else if (vowels.indexOf(pigArr[ind][0])===-1){
          // let firstLetter=word.charAt(0);
          //remove the first letter
          //leaving remaining parts of the word
          let pigWord=word.substr(1).concat(word.substr(0,1)+"ay");
          pigLat.push(pigWord);
          $("input").css("background-image", "url(./images/corn_bite.png)");
          $("#pigCode").attr("src", "./images/pig_mouth_open.png");
          $('#clearButt').show();
          $('#corn_bite').show();
        } 

        console.log(pigLat.join(' '));
        let pigLatTrans = pigLat.join(' ');
        $("#translationText").html('Translation: '+pigLatTrans);
      }
    }
    else{
      alert("What have you done?")
    }
  })
  $("#clearButt").click(() => {
    $("#translateInput").val('');
    $("#pigCode").attr("src", "./images/pig_mouth_shut.png");
    $("input").css("background-image", "url(./images/corn_whole.png)");
    $('#clearButt').hide();
    $('#corn_bite').hide();
  })
;