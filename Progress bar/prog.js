const progress=document.getElementById('progress');
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const circle=document.querySelectorAll('.circle');
let c=1;
next.addEventListener('click',()=>{
    c=c+1;
    if(c>circle.length)
    {
        c=circle.length;
    }
    update();
})
prev.addEventListener('click',()=>{
    c--;
    if(c<1)
    {
        c=1;
    }
    update();
})
function update()
{
    circle.forEach((circle,idx) =>
    {
        if(idx<c)
        {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }
    }
    )
    progress.style.width = ((c-1)*100/(circle.length-1))+'%';
    if(c==circle.length)
    {
        next.disabled = true;
    }
    else if(c==1)
    {
        prev.disabled = true;
    }
    else
    {
        next.disabled = false;
        prev.disabled = false;
    }
}