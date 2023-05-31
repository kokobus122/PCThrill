window.onload = function checkLogin(){
    if(sessionStorage.getItem("accountLogin") === null){
        document.getElementById("favhide").style.display = "none";
    } else {
        document.getElementById('accountTab').href = 'account.html';
        document.querySelector(".toggletab").classList.remove("hidetab");
    }
}