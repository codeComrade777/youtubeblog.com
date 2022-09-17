const showBtn=document.querySelector('#show-btn');
const closeBtn=document.querySelector('#close-btn');
const showMenu=document.querySelector('#show-menu');
if(showBtn)
{
    showBtn.addEventListener('click',()=>
    {
        showMenu.classList.add('active');
    })
}
if(closeBtn)
{
    closeBtn.addEventListener('click',()=>
    {
        showMenu.classList.remove('active');
    })
}