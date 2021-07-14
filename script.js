
var number1;

var number2;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  number1=getRandomInt(10);

  number2=getRandomInt(10);

  function appendEquation(){

    let parsedEQ = 'Please solve to verify you are human : '+ number1 + ' + ' + number2;
    console.log(parsedEQ);
    $('#verifyIDbox').text(parsedEQ);

  }

  appendEquation();



  function compareAnswer(){

    let userInput = $('#inputPassword2').val();
    if(userInput == (number1 + number2)){
        console.log('same');
        $('#capcha').remove();

    }
    else{
        console.log('not same');
        number1=getRandomInt(10);

        number2=getRandomInt(10);
        appendEquation();
    }

  }

  document.getElementById("verifyIDbtn").addEventListener("click", function() {
    console.log('test');
    compareAnswer();
  });
