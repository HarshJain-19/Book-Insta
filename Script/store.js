var booksCard = "";

var choice = window.sessionStorage.getItem("choice")
    ? JSON.parse(window.sessionStorage.getItem("choice"))
    : {};

const listed = (x) => {
    document.getElementById("card" + x).classList.toggle("selected");
    choice[x] ? delete choice[x] : (choice[x] = 1);
    saveChoice();
};

const saveChoice = () =>
    window.sessionStorage.setItem("choice", JSON.stringify(choice));

window.onload = () => {
    booksCollection.forEach((e, i) => {
        booksCard += `
            <div class="card" id='card${i}' onclick="listed(${i})">
                <img src=${e.link} />
                <h2>${e.name}</h2>
                <h3>Price:- ₹${e.price}</h3>
            </div><br><br>
        `;
    });
    document.getElementById("books").innerHTML = booksCard;
    for (let k in choice)
        document.getElementById("card" + k).classList.add("selected");
};
