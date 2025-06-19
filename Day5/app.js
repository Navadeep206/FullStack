const data = {
    recipies: {
        fruits: "mango"
    }
};

const parent = document.getElementById("root");

for (let i = 0; i < 10; i++) {
    const create = document.createElement("div");
    create.className="nava";

    // Set content using innerHTML as a string
    create.innerHTML = `
        <h2>Hello</h2>
        <img src="https://via.placeholder.com/150" alt="${data.recipies.fruits}" />
    `;

    parent.appendChild(create);

}


