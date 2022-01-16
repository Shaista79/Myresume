
let btn = document.getElementById("btn1");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let textArea = document.getElementById("message").value;

  let formData={
    name:name,
    email:email,
    textArea:textArea
  }


  const xhr=new XMLHttpRequest();
  xhr.open("POST","/form",true);
  xhr.setRequestHeader("content-type","application/json");

  xhr.onload=function() {
    
  }
  if (name == "" || email == "" ) {
    swal({
        title: "Fields Empty",
        text: "Please Check the missing fields",
        icon: "warning",
        button: "Ok",
      });
    }
    else if (name.length<3 || email.length<7) {
      swal({
        title: "To short",
        text: "Please Check the length of the words",
        icon: "warning",
        button: "Ok",
      });
    } 
    else{
      xhr.send(JSON.stringify(formData));
      swal({
          title: "Successfully Submitted",
          icon: "success",
          button: "Ok",
  
        
      });
    }
    document.querySelector(".form").reset();
  });


