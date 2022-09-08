function validate()
{

        var pwd='1912';
        var user='Bops';

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username==user && password==pwd)
{

        window.location.href="./dash.html";
        console.log("Your username is " +username+ ". Your password  " +password);
}
else
{
        alert("Please Try Again");
}


}
