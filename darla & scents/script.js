let cart=0;
function addToCart(){cart++;document.getElementById('cartCount').innerText=cart;}
function validateForm(){
let email=document.getElementById('email').value;
if(!email.includes('@')){alert('Invalid email');return false;}
return true;
}
const g=document.getElementById('greeting');
if(g){
let h=new Date().getHours();
let t=h<12?'Good Morning':h<18?'Good Afternoon':'Good Evening';
g.innerText=t+' - '+new Date().toDateString();
}
document.getElementById('themeToggle')?.addEventListener('click',()=>{
document.body.classList.toggle('dark');
});
