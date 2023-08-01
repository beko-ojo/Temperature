let tempo;
const Celsius=document.getElementById("celsius")
const Fahrenheit=document.getElementById("fahrenheit")
document.getElementById("submittemp").onclick = function(){

if(Celsius.checked){
    tempo=document.getElementById("tempbox").value
    tempo=Number(tempo)
    tempo= (tempo-32)*(5/9)
    tempo=tempo.toLocaleString("en-US", {style:"unit", unit:"celsius"})
    document.getElementById("tempanswer").innerHTML=tempo}

else if(Fahrenheit.checked)
    {tempo=document.getElementById("tempbox").value
    tempo=Number(tempo) 
    tempo=tempo*9/5+32
    tempo=tempo.toLocaleString("en-US", {style:"unit", unit:"fahrenheit"})
    document.getElementById("tempanswer").innerHTML=tempo}

else{window.alert("Select one!")}
}
