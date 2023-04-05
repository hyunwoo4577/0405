const btn = document.querySelector('#btn')
console.log(btn)
//function (){} = 화살표 함수 변경 => ()=>{} 이벤트 외부에서만 화살표 함수
btn.addEventListener('click', ()=>{
    fun1(20,6)
})//다시 함수 선언이 필요함=>화살표 함수
fun1(200,2) //바로 나오게 하려면 함수 밖에서 작성~^^ㅎㅎㅎㅎ//자동실행함수~^^
function fun1(n,m){//함수생성~^^//함수내에서 변경되는 값이 있으면 매개변수
    console.log(n+m)
}//1.생성 2.대입 3.작성 순서
console.log('----------------')
function re1(){console.log(1)}
function re1_window(){window,alert(1)}//return을 쓰지않으면 매번 함수 값을 작성해야함 복잡해짐.
function re2(){
    return 1
} 
re1 ()
console.log(re2())
window.alert(re2())//return을 쓰면 함수를 최소화 할 수 있다. 관리를 편하게 할 수 있음
function fun(a,b){
    return a+b
}
console.log(fun(10,20))
function japangi (drink){
    return drink
} 
let data = japangi('콜라') +'가 나왔습니당'
console.log(data)