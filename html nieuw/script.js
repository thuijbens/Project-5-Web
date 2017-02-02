window.onload=function(){

var container = document.querySelector('.heart');

container.addEventListener('mouseenter', function(){
        this.classList.remove('heart');
        this.classList.add('second');
})
container.addEventListener('mouseleave', function(){
        this.classList.add('heart');
        this.classList.remove('second');
})}
