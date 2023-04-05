const user = document.querySelectorAll ('.box input')
console.log(user)
//input 마우스 커서를 올렸을 때 == focus
user[0].addEventListener ('focus', function(){bg(this)})//화살표 함수가 대체하는 것일 뿐만 아니라 전체를 인식하기 때문에 this로 처리하려면 원래 function으로 작성해야한다 
user[1].addEventListener ('focus', ()=>{bg(user[1]) })
user[2].addEventListener ('focus', ()=>{bg(user[2]) }) //focus는 커서를 올리는 것이기 때문에 커서를 인식하는 input에 적용가능
//이벤트 내에 function은 this 대상을 DOM이벤트 객체로 인식하고
//화살표 함수는 this를 js 전역객체대상으로 인식하기 떄문에 정확하게 대상을 구분해서 작성
//함수 
function bg(target){
    bg_reset ()
    return target.style.backgroundColor = '#ff0' 
}
function bg_reset(){
    user[0].style.background = 'none'
    user[1].style.background = 'none'
    user[2].style.background = 'none'
}
//객체.style.backgroundColor = '#ff0'
//--------------------------------------------
const like = document.querySelector('.like img')
const money = document.querySelector('.money img')
console.log(like)
console.log(money)
like.addEventListener('mouseover',()=>{like_on(like,'heart')})
like.addEventListener('mouseout',()=>{like_off(like,'heart')})
money.addEventListener('mouseover',()=>{like_on(money,'cash')})
money.addEventListener('mouseout',()=>{like_off(money,'cash')})
function like_on(target, name){
    return target.src = `./images/${name}_on.png`
}
function like_off(target, name){
    return target.src = `./images/${name}_off.png`
}
//객체.src = '../images/heart_on.png'