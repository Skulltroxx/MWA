function triangle(){
    let a = parseInt(document.getElementById('side1').value);
    let b = parseInt(document.getElementById('side2').value);
    let c = parseInt(document.getElementById('side3').value);

    const s = (a+b+c)/2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);

    document.getElementById('triangle-area').innerHTML = area;
    
}

function sum_of_int(){
    let a = parseInt(document.getElementById('int1').value);
    let b = parseInt(document.getElementById('int2').value);
    var res = 0;
    if(a == b){
        res = 3*a;
    }else{
        res = a + b;
    }
    document.getElementById('sum-of-int').innerHTML = res;
}

function reverse(){
    let a = parseInt(document.getElementById('rev-number').value);
    var rem = 0;
    var rev = 0;
    
    while(a > 0){
        rem = a%10;
        rev = (rev*10) + rem;
        a = Math.floor(a/10);
    }

    document.getElementById('reverse-num').innerHTML = rev;
}

function camel(){
    var text = document.getElementById('upper').value;
    var list = text.split(" ");
    for(var i = 0; i < list.length; i++){
        list[i] = list[i].charAt(0).toUpperCase() + list[i].substring(1);
    }

    list = list.join(" ");
    document.getElementById('upper-camel').innerHTML = list;
}

function greatest(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let c = parseInt(document.getElementById('num3').value);
    let d = parseInt(document.getElementById('num4').value);
    let e = parseInt(document.getElementById('num5').value);
    var arr = [a,b,c,d,e];
    var large = a;
    
    for(var i = 1; i < 5; i++){
        if(arr[i] > large){
            large = arr[i];
        }
    }


    document.getElementById('greatest-five').innerHTML = large;
    alert("Greatest is " + large);
}

function grade(){
    let m1 = parseInt(document.getElementById('mark1').value);
    // let m2 = parseInt(document.getElementById('mark2').value);
    // let m3 = parseInt(document.getElementById('mark3').value);
    // let m4 = parseInt(document.getElementById('mark4').value);
    // let m5 = parseInt(document.getElementById('mark5').value);
    var gr = "";
    if(m1 < 60){
        gr = "F";
    }else if(m1 < 70){
        gr = "E";
    }else if(m1 < 80){
        gr = "E";
    }else if(m1 < 90){
        gr = "E";
    }else if(m1 < 100){
        gr = "E";
    }

    document.getElementById('g1').innerHTML = gr;
}

function gen_pattern(){
    for(var i = 1; i <= 5; i++){
        var st = "";
        for(var j = 1; j <= i; j++){
            st += "*"
        }
        document.getElementById('pattern-out').innerHTML += st;
        document.getElementById('pattern-out').innerHTML += "<br>";
    }
}