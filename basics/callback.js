function sayhello (fun) {
    fun();

}
let hello=function(){
    console.log('hello world')
}
sayhello(hello)