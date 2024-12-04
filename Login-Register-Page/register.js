let passwordMain = document.getElementById("passwordMain");
let passwordRetype = document.getElementById("passwordRetype");
window.onload = pageLoad;

function pageLoad(){
	let form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    // let passwordMain = document.forms["myForm"]["passwordMain"];
    // let passwordRetype = document.forms["myForm"]["passwordRetype"];
    let passwordMain = document.getElementById("passwordMain").value;
    let passwordRetype = document.getElementById("passwordRetype").value;

    if( passwordMain == passwordRetype ){
        // window.location.href = "login.html";
        // console.log(passwordRetype.value);
        return true;
    }
    else{
        document.getElementById("errormsg").textContent = "หญิงง รหัสมันเหมือนกันกี่โมงงง กรอกใหม่ค่าหญิง" ;
        return false;
    }
}



// let password_Main = document.getElementById("passwordMain")
// let password_Retype = document.getElementById("passwordRetype")
// window.onload = pageLoad;
// function pageLoad(){
// 	var form = document.getElementById("myForm");
// 	form.onsubmit = validateForm;
// }

// function validateForm() {
//     let password_Main = document.getElementById("passwordMain").value;
//     let password_Retype = document.getElementById("passwordRetype").value;

//     if(password_Main == password_Retype){
//         alert("Your registration is successful!");
//         return true;
//     }
//     else{
//         var errormsg = document.getElementById("errormsg")
//         // console.log(errormsg.innerHTML);
//         errormsg.textContent = ("Please enter your password again");
//         return false;
//     }
    
// }