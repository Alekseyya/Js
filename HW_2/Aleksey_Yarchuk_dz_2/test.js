function an(n) {
    if(n==1){
        return 1;
    }else{
        return n + " " + an(n-1);
    }
}

function summ(n) {
    if(n==1){
        return 1;
    }
    return n + summ(n-1);        
}
function f2(len,tt) {
    console.log(len);   
    if(len<0){
        return " ";
    }    
    return tt[len] + " " + f2(len-1,tt)
}
// console.log(an(5));
// console.log(summ(4));
var tt = [1,2,3,4,5,6,7]
console.log(f2(tt.length-1,tt));