const toggle_btn = document.querySelector('#checkbox');
console.log(toggle_btn);
toggle_btn.addEventListener('change',()=>{
    if(toggle_btn.checked){
        document.body.classList.add('darkMode');
        console.log("checked");
    }
    else{
        console.log("unchecked");
        document.body.classList.remove('darkMode');
    }
})