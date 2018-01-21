
    function lanzar (){
     var contador = 0;            
           
    document.getElementById("Btn").onclick = function(){
    contador++; 
    var a = Math.floor((Math.random() * 6 + 1 ));
    var b = Math.floor((Math.random() * 6 + 1 ));
    var c = Math.floor((Math.random() * 6 + 1 ));
    var d = Math.floor((Math.random() * 6 + 1 ));
    var e = Math.min(a,b,c,d);
    var f = (a+b+c+d)-e;
    switch (contador){
        case 1:
        document.getElementById("ex8").innerHTML = f; 
        break;
        case 2:
        document.getElementById("ex9").innerHTML = f; 
        break;
        case 3:
        document.getElementById("ex10").innerHTML = f; 
        break;
        case 4:
        document.getElementById("ex11").innerHTML = f; 
        break;
        case 5:
        document.getElementById("ex12").innerHTML = f; 
        break;
        case 6:
        document.getElementById("ex13").innerHTML = f;
        break;
        default:
        contador = 0
        document.getElementById("Btn").disabled  = true;
        document.getElementById("Btn2").disabled  = false; 
        document.getElementById("Btn3").disabled = false;     
        break; 
        
    }
   
    document.getElementById("ex1").innerHTML = a;
    document.getElementById("ex2").innerHTML = b;
    document.getElementById("ex3").innerHTML = c;
    document.getElementById("ex4").innerHTML = d;
    document.getElementById("ex5").innerHTML = e;
    document.getElementById("ex6").innerHTML = f; 



    }
    
}

function borrar (){
document.getElementById("Btn").disabled  = false; 
document.getElementById("Btn2").disabled  = true; 
document.getElementById("ex8").innerHTML = "";
document.getElementById("ex9").innerHTML = "";
document.getElementById("ex10").innerHTML = "";
document.getElementById("ex11").innerHTML = "";
document.getElementById("ex12").innerHTML = "";
document.getElementById("ex13").innerHTML = "";
}





