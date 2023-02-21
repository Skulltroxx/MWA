function valid_uname(){
    var uname = document.getElementById('u-name').value;
    var reg = /^[A-Z][A-Za-z0-9_]{3,14}$/;

    if(!uname.match(reg)){
        document.getElementById('error-u').innerHTML = "Username must start with capital letter and have alphanumeric character, with minimum 5 characters and maximum 15"
        document.querySelector('#error-u').style.color = "red";
        return false;
    }else{
        document.getElementById('error-u').innerHTML = "Valid username &#10003"
        document.querySelector('#error-u').style.color = "green";
        return true;
    }
}

function valid_pass1(){
    var pass1 = document.getElementById('pass1').value;
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/;

    if(!pass1.match(reg)){
        document.getElementById('error-pass').innerHTML = "Password must contain atleast one uppercase, one lowercase and one digit. Min 10, Max 20 characters."
        document.querySelector('#error-pass').style.color = 'red';
        return false;
    }else{
        document.querySelector('#error-pass').style.color = 'green';
        document.getElementById('error-pass').innerHTML = "Strong Password &#10003"
        return true;
    }
}

function valid_pass2(){
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    if(valid_pass1()){
        if(pass1 == pass2){
            document.getElementById('error-pass2').innerHTML = "Password Match &#10003"
            document.querySelector('#error-pass2').style.color = 'green';
            return true;
        }else{
            document.getElementById('error-pass2').innerHTML = "Password Don't Match!"
            document.querySelector('#error-pass2').style.color = 'red';
            return false;
        }
    }else{
        document.getElementById('error-pass2').innerHTML = "Password isn't valid!"
        document.querySelector('#error-pass2').style.color = 'red';
        return false;
    }
}

function valid_email(){
    var em = document.getElementById('email').value;
    var reg = /^[A-Za-z0-9]{5,15}@[A-Za-z]+[.]{1}[a-z]{3}$/;
    
    if(!em.match(reg)){
        document.getElementById('error-e').innerHTML = "Invalid Email!";
        document.querySelector('#error-e').style.color = "red";
        return false;
    }else{
        document.getElementById('error-e').innerHTML = "Valid Email &#10003";
        document.querySelector('#error-e').style.color = "green";
        return true;
    }
}

function valid_pan(){
    var pan = document.getElementById('pan').value;
    var reg = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    
    if(!pan.match(reg)){
        document.getElementById('error-pan').innerHTML = "Invalid PAN ID!";
        document.querySelector('#error-pan').style.color = "red";
        return false;
    }else{
        document.getElementById('error-pan').innerHTML = "Valid PAN ID &#10003";
        document.querySelector('#error-pan').style.color = "green";
        return true;
    }
}

function valid_aadhar(){
    var aadhar = document.getElementById('aadhar').value;
    var reg = /^[0-9]{12}$/;
    
    if(!aadhar.match(reg)){
        document.getElementById('error-aadhar').innerHTML = "Invalid Aadhar ID!";
        document.querySelector('#error-aadhar').style.color = "red";
        return false;
    }else{
        document.getElementById('error-aadhar').innerHTML = "Valid Aadhar ID &#10003";
        document.querySelector('#error-aadhar').style.color = "green";
        return true;
    }
}

function valid_phone(){
    var phone = document.getElementById('phone').value;
    var reg = /^[0-9]{10}$/;
    
    if(!phone.match(reg)){
        document.getElementById('error-phone').innerHTML = "Invalid Phone Number!";
        document.querySelector('#error-phone').style.color = "red";
        return false;
    }else{
        document.getElementById('error-phone').innerHTML = "Valid Phone Number &#10003";
        document.querySelector('#error-phone').style.color = "green";
        return true;
    }
}

function valid_gender(){
    var opts = document.getElementsByName("gender");
    var flag = false;

    for(let i = 0; i < opts.length; i++){
        if(opts[i].checked){
            flag = true;
        }
    }

    if(!flag){
        document.getElementById('error-gender').innerHTML = "Select a gender!";
        document.querySelector('#error-gender').style.color = "red";

        return false;
    }

    return true;
}

function valid_agree(){
    var agree = document.getElementById('agree');
    return agree.checked;
}

function validate(){
    if(valid_gender() && valid_uname() && valid_pass1() && valid_pass2() && valid_email() && valid_pan() && valid_aadhar() && valid_phone()){
        document.getElementById('output').innerHTML = "User Registered Successfully! &#10003";
        document.querySelector('#output').style.color = "green";
    }else{
        document.getElementById('output').innerHTML = "Invalid/Insufficient details!";
        document.querySelector('#output').style.color = "red";
    }

    if(!valid_agree()){
        document.getElementById('output').innerText += " and Can't proceed without agreeing to the terms!";
        document.querySelector('#output').style.color = "red";
        return;
    }
}