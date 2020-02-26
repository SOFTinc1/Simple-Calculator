function insert(num){
    document.form.result.value = document.form.result.value + num;
}
function equals(){
    let exp =  document.form.result.value;
    if(exp){
        document.form.result.value = eval( document.form.result.value);
    }
}
function clean(){
    document.form.result.value = " ";
}
function back(){
    let exp =  document.form.result.value;
    document.form.result.value = exp.substring(0, exp.length-1);    
}