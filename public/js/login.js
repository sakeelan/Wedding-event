var package=document.querySelector('.package').value;
var total=document.querySelector('.total')
var pack=document.querySelectorAll('.pack')

total.addEventListener("click", function(){
    

    if (package=="PACKAGE 1") {
        document.querySelector('.total').value=79499;
    }
    else if (package=="PACKAGE 2") {
        document.querySelector('.total').value=95000;
    }
    else if (package=="PACKAGE 3") {
        document.querySelector('.total').value=74899;
    }
    else if (package=="PACKAGE 4") {
        document.querySelector('.total').value=78499;
    }
    else if (package=="PACKAGE 5") {
        document.querySelector('.total').value=109999;
    }
   else{
    document.querySelector(".total").textContent="PLEASE SELECT THE PACKAGE BAR"
   }

})


