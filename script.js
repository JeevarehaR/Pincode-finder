async function fun(){
    try{
        //get the input from user
        let n = 0;
        let code = document.querySelector('#pin').value;
        if(code.length > 6 || code.length<6){
            alert('Please enter a 6 digit code');
        }
        //clear the output field before displaying teh result 
        //document.getElementById("district").innerHTML="";
        //document.getElementById("state").innerHTML="";
        //document.getElementById("area").innerHTML="";

        //Get the data from the API
        let response = await fetch(`https://api.postalpincode.in/pincode/${code}`);
        let data = await response.json();

        if(data[0].PostOffice[0] == null){
            alert("Please enter a valid code")
        }else{
            document.getElementById("state").value = data[0].PostOffice[0].State
            document.getElementById("district").value = data[0].PostOffice[0].District
            document.getElementById("area").value = data[0].PostOffice[0].Name
        }

        document.getElementById("pin").value="";

        

    }catch(e){
        alert("Please enter a valid code")
    }
}