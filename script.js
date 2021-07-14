
var number1;

var number2;




var infoCard=`
<div class="card" style="width: 30rem;">
<div class="card-body">
    <h5 class="card-title">Contact us : </h5>
    <h6 class="card-subtitle mb-2 text-muted">HCI General Contractors</h6>
    <p class="card-text">Email :  hci.gc.info@gmail.com </p>
   <p class='card-text'> Phone : (210)223-2500.</p>
   <a href="mailto:hci.gc.info@gmail.com">Email Us</a>
 
</div>
</div>
`

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

  function appendInfo(){


  }



  function compareAnswer(){

    let userInput = $('#inputPassword2').val();
    if(userInput == (number1 + number2)){
        console.log('same');
        $('#capcha').remove();
        $('#middleContent').append(infoCard);

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
