function sayhello(fun, f) {
    if (f==true){
        fun()
    }
    else{
        console.log('ignoring the callback')
    }
     
}
let hello=function(){
    console.log('callback functin called')
}
sayhello(hello,true)
sayhello(hello,false)