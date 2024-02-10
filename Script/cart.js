var choice = JSON.parse(window.sessionStorage.getItem('choice'));
console.log(choice);

const saveChoice = () => window.sessionStorage.setItem('choice',JSON.stringify(choice));

const inc = x => {
    choice[x]+=1;
    addRecord();
    saveChoice();
};
const dec = x => {
    if (choice[x]!=0) {
        choice[x]-=1
        addRecord();
        saveChoice();
    }
};
const remove = x => {
    delete choice[x];
    addRecord();
    saveChoice();
};

const addRecord = () => {
    let record = '', total_amount = 0;
    for (let k in choice) {
        record+= `
            <tr>
                <td style="text-transform: capitalize;">${booksCollection[k].name}</td>
                <td>
                    <span>${choice[k]}</span><br />
                    <button id="b1" onclick='dec(${k})'>-</button>
                    <button id="b2" onclick="inc(${k})">+</button>
                </td>
                <td>
                    ₹<span>${booksCollection[k].price*choice[k]}</span><br />
                    <button id="b3" onclick='remove(${k})'>x</button>
                </td>
            </tr>
        `;
        total_amount+=booksCollection[k].price*choice[k];
    }
    document.getElementById('record').innerHTML = record;
    document.getElementById('total_amount').innerHTML = total_amount;
};

window.onload = () => {
    addRecord();
};