window.onload = function() {
let personName = sessionStorage.getItem("mosUserName");
var welcomeMsgForNav = false;
// document.getElementById('afterLogin').style.display = 'none';

if(personName == "Dummy"){
    welcomeMsgForNav = true;
    // document.getElementById('afterLogin').style.display = 'block';
    document.getElementById('beforeLogin').style.display = 'none';
} else {
    document.getElementById('afterLogin').style.display = 'none';
}
  };

function logOut(){
    sessionStorage.removeItem("mosUserName");
    window.location.replace("https://srikrushnap.github.io/ecommerce-template/pages/loginUser.html");
    // location.reload();
}