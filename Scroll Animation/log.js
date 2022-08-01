const boxes = document.querySelectorAll('.content');
window.addEventListener('scroll',checkboxes)
checkboxes();
function checkboxes()
{
    const trigger = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < trigger)
        {
            box.classList.add('show');
        }
        else
        {
            box.classList.remove('show');
        }
    })
}