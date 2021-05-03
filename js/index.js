
document.querySelector('#btn-submit').addEventListener('click',(e)=>{
  
     let name = document.querySelector('#fName').value;
     let date = document.querySelector('#date').value;
     let people = document.querySelector('#no-of-people').value;
     let comments = document.querySelector('textarea').value
     let roundTrip = document.querySelector('.trip > :nth-child(2)');
     let oneway = document.querySelector('.trip > :nth-child(1)');

     let trip;
     

     if(roundTrip.checked == true){
        trip = roundTrip.value;   
     }else if(oneway.checked == true){
        trip = oneway.value;  
     }

    if(name == ""){
        document.querySelector('#fName').style.borderColor = 'red';
    }else if(date == ""){
        document.querySelector('#date').style.borderColor = 'red';
    }else if(people == ""){
        document.querySelector('#no-of-people').style.borderColor = 'red';
    }else if(comments == ""){
        document.querySelector('textarea').style.borderColor = 'red';
    }else if((roundTrip.checked == false) && (oneway.checked == false)){
        alert("Please select a trip type");
    }else{
        let sucessMsg = "Form sucessfully submitted";

        // let elem = document.createElement('p');
        // elem.innerText = sucessMsg;
        // document.querySelector('.box').appendChild(elem);
        alert(sucessMsg);
    }       

    

    
    e.preventDefault();

})