const form =  document.getElementsByTagName("form")[0]

form.addEventListener("submit",e=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData)
    console.log(formProps,formData.values())
})

function copyText() {  
    var copyText = document.getElementById("text-copy");  
    copyText.select();  
    document.execCommand("copy");
}