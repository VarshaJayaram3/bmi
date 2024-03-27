//for bmi calculator
function calculateBMI() {


  var ageInput = document.getElementById("age");

  // Check if the age input field is empty
  if (ageInput.value === "" || heightInput.value==='' || weightInput.value===''||(f.checked==false && m.checked==false)) {
      // If empty, show an error message or perform any desired action
      alert("Please fill all details");
      // Prevent further form submission
      
  }

  else{


    var height = parseFloat(document.getElementById("heightInput").value);
    var weight = parseFloat(document.getElementById("weightInput").value);
    var heightUnit = document.getElementById("heightUnit").value;
  
    if (heightUnit === "feet") {
      height *= 30.48; // convert feet to centimeters
    }
  
    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    

    document.getElementById("result").textContent = bmi;
  


    if(bmi>0 && bmi<18.5){
       need = 10; 
       weightstatus.innerHTML = `weight staus : Underweight`;
       weightstatus.style.color='red'
    }
    else if(bmi>=18.5 && bmi<=24.9){
        need=37;
        weightstatus.innerHTML = `weight staus : Normal`;
        weightstatus.style.color='Tomato'
         
    }
    else if(bmi>=25 && bmi<=29.9){
         need= 51;
         weightstatus.innerHTML = `weight staus : Overweight`;
         weightstatus.style.color='orange'
    
    }
    else if(bmi>=30.0 && bmi<=34.9){
       need=65; 
       weightstatus.innerHTML = `weight staus : Obese` ; 
       weightstatus.style.color='green' 
      
    }
    else{
       need=80;
       weightstatus.innerHTML = `weight staus:Over-Obese`; 
       weightstatus.style.color = "MediumSeaGreen";
       
    }


    var newScore = need; // Set the new score here
    document.querySelector('.needle').style.setProperty('--score', newScore);//-- means defining a variable

  }  


}
  //for reseting
  function cleardata(){
     heightInput.value = '';
     weightInput.value= '';
    result.textContent='';
    age.value='';
    
    var radioButtons = document.getElementsByName("gender");//for clearing radio button
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
    
    weightstatus.innerHTML=''

    document.querySelector('.needle').style.setProperty('--score', 50);//for reseting needle to 50 after reseting

//or
    // document.getElementById("heightInput").value = "";
    // document.getElementById("weightInput").value = "";
    // document.getElementById("result").textContent = "";
  }