let sounds = ['applause','boo','gasp','tada','victory']
sounds.forEach(sound=>{
    console.log(sound);
    const button=document.createElement('button');
    button.classList.add('btn')
    button.innerText=sound;
    document.getElementById('buttons').appendChild(button);
    console.log(document.getElementsByClassName('buttons'));
    button.addEventListener('click',()=>{
        stop();
        document.getElementById(sound).play();
    })
})
function stop()
{
    sounds.forEach(sound=>{
        document.getElementById(sound).pause();
    })
}