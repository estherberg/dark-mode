const darkmode = document.getElementById('dark-mode');

darkmode.addEventListener('change',()=>{
    document.body.classList.toggle('dark');
});