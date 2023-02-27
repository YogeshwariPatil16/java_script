function fun1(num){
   num=num+3
return num
}
function fun2(num){
    num=num*2
return num
}
function fun(num,p,q) {
    let a1=p(num)
    let b1=q(a1)
    console.log(b1)
}
fun(4,fun1,fun2)