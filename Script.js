




function over(element){

     
     
}
function out(element){

    
    element.style.height="30px"
}

    

function change(){
    var ad = document.getElementById("in1").value
    var cr = document.getElementById("in2").value
    var tem = document.getElementById("in3").value
       
    var p1= document.getElementsByTagName("p")[0]
    var p2= document.getElementsByTagName("p")[1]
    var p3= document.getElementsByTagName("p")[2]
    var p4= document.getElementsByTagName("p")[3]

    var carne= ad * 400 +cr*200
    var cerveja=Math.round(ad*1.2)
    var refri= ad*1+cr*0.5
    var carvao=Math.ceil(carne/3000)
    if(tem>6){
        carne= ad*500 +cr*300
        cerveja= Math.round(ad*1.5)
        refri= ad*1.5+cr*1
        carvao=Math.ceil(carne/3000) 
    }
    else{
        carne=carne
        cerveja= cerveja
        refri= refri
    }
    

    p1.innerHTML= "Quantidade de Carne: "+ carne+" G"+" ou "+(carne/1000)+" Kg"
    p3.innerHTML= "Quantidade de Cerveja: "+ cerveja+" L"
    p4.innerHTML= "Quantidade de Refrigerante: "+ refri+" L"
    p2.innerHTML= "Quantidade de Carvão: "+ carvao+ " kg"
    
}
