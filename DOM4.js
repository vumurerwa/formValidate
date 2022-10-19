function subscribe(){
    var username =document.getElementById("username");
    var email =document.getElementById("e-mail");
    var name =document.getElementById("name");
    var mail =document.getElementById("mail");
    name.innerHTML="Please enter your name";
    mail.innerHTML="Please enter your email";
    name.style.color="red";
    mail.style.color="red";
    username.style.border="red 1px solid";
    email.style.border="red 1px solid";

}