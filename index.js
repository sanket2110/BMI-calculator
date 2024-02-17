function submit() {
    let height, weight, result;
    height = parseInt(document.getElementById("h").value);
    weight = parseInt(document.getElementById("w").value);
    result = (weight / (height*height)) * 10000;
    result = result.toFixed(2);
    document.getElementById("result").innerHTML = result;
    if(result>25){
        document.getElementById("mn").innerHTML = 'Overweight';
    }
    else if(18<=result && result<=25){
        document.getElementById("mn").innerHTML = 'Healthy';
    }
    else{
        document.getElementById("mn").innerHTML = 'Underweight'
    }
}