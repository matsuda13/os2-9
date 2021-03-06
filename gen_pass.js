var min = 15;
var max = 20;

function display_password(){
    var checkpass = false;
    while(checkpass == false){
        var s = gen_pass();
        checkpass = check(s);
    }
    document.getElementById("pass").value = s;
}


function gen_pass(){
    var strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var p_length = parseInt(Math.random()*15) + 5;
    var s_length = strings.length;
    s = Array.from(crypto.getRandomValues(new Uint32Array(p_length))).map((n)=>strings[n%s_length]).join('');
    return s;
}

function check(s){
    var upperletter = false;
    var number = false;
    var length = s.length;
    var beforechar = '';
    var beforechar2 = '';
    //length check
    if (length < min || length > max) return false;
    //confirm password contains upperletter and number at least 1
    for (let property of s){
        if (property == property.toUpperCase()) upperletter = true;
        if (isNaN(property) == false) number = true;
        //ban 3 consective same chars
        if (property == beforechar && property == beforechar2) return false;
        beforechar2 = beforechar;
        beforechar = property;
    }
    return upperletter && number;
}