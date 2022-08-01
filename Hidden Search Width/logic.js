const input=document.querySelector('.search');
document.querySelector('.btn').addEventListener('click',()=>
{
    console.log("hii");
    input.classList.toggle('active');
    document.querySelector('.input').focus();
})