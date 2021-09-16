document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

 if (e.keyCode == '39') {
    h = document.getElementsByTagName("input");
    for(var i =0;i<h.length;i++){
        if(h[i].value=="No"){
            h[i].click();
        }
    }
    }

}