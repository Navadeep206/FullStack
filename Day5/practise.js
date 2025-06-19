const create=document.getElementById("parent");
for(let i=0;i<10;i++){
    const new1=document.createElement("div")
    new1.class="c";
    new1.innerHTML= `
        <h2>How are you</h2>
        <img></img>
    `;
    create.appendChild(new1);
    

}