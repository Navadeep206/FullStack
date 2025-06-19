const handel=(e)=>{
    const k=e.target;
    console.log(k.value);

}
function validateForm(event) {
    const emailInput = document.getElementById("email").value;

    if (!emailInput.includes("@")) {
        alert("Email must contain '@' symbol.");
        return false; 
    }

    return true; 
}