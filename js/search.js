// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get names uL
    let ul =  document.getElementById('names');
    // Get lis from uL
    let li = ul.querySelectorAll('li.product');

    // Loot through r-card lis
    for(let i = 0;i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matched (grabs everything inside of a tag)
        if(a.innerHTML.toUpperCase().indexOf(filterValue) >
        -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}

// checkar ifall alla produkter visas
var divs = ["product1", "product2", "product3", "product4"];

function checkDivVisibility() {
    var visible = false;

    for (var i = 0; i < divs.length; i++) {
        var div = document.getElementById(divs[i]);
        if (div.offsetWidth > 0 || div.offsetHeight > 0) {
            visible = true;
            break;
        }
    }

    if (!visible) {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }
}

window.onload = checkDivVisibility;