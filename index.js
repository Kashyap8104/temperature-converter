function cal(){
    let temp = document.getElementById('tempp').value;
    let type = document.getElementById("temperature").value;
    console.log(temp);
    console.log(type);
    var printContainer = document.getElementById("printContainer");
    printContainer.classList.add("show");
    if(type == 'Celsius'){
        let f = ((temp * 9)/5)+32 ;
        
        document.getElementById('print1').innerHTML = `Temperature in Fahrenheit is  ${f}f`;
        let k = Number(temp) + 273.15 ;
        document.getElementById('print2').innerHTML = ` Temperature in Kelvin is ${k}k`;
        
        
        
    }
    else if(type == 'Fahrenheit'){
        let c = (((temp - 32 )* 5 )/9);
        document.getElementById('print1').innerHTML = `Temperature in celsius is  ${c.toFixed(3)} <sup><sup>.
        </sup></sup> C`;
        let k = (((temp - 32 )* 5 )/9)+ 273.15;
        console.log(k);
        document.getElementById('print2').innerHTML = `Temperature in Kelvin  is    ${k.toFixed(3)}k`;
    }
    else{
        let c = temp - 273.15 ;
        document.getElementById('print1').innerHTML = `Temperature in celsius is  ${c.toFixed(3)}c`;
        
        let f = 1.8 * (temp - 273) + 32 ;
        document.getElementById('print2').innerHTML = `Temperature in Fahrenheit is  ${f.toFixed(3)}f`;
    }
}