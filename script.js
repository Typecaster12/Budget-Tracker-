// top ones 
//add Budget section
let addBudgetInput = document.getElementById('budgetAdd');
let setBudgetButton = document.querySelector('.btn1');
//tracker section
let expenseName = document.querySelector('.expName');
let amountSpent = document.querySelector('.exp2');
let addExpense = document.querySelector('.btn2');

//middle ones
let totalBudget = document.querySelector('.totalBudget');
let expenseBudget = document.querySelector('.expenseBudget');
let balanceBudget = document.querySelector('.balanceBudget');

//bottom ones
//the container which will have the lists of all the expenses;
let listItems = document.querySelector('.listItems');
var Total = 0;
var Expenses = 0;
var Balance = 0;

//logic
setBudgetButton.addEventListener('click', () => {
    Total = Total + parseInt(addBudgetInput.value);
    totalBudget.innerHTML = Total;
    addBudgetInput.value = '';
});


addExpense.addEventListener('click', ()=>{
    Expenses = Expenses + parseInt((amountSpent.value));
    expenseBudget.innerHTML = Expenses;

    //for balance;
    let Subtract = Total - Expenses;
    balanceBudget.innerHTML = Subtract;

    //so every time we add the expense an eleemnt will formed and show the expense name and amount;
    let expenseDetails = document.createElement('li');
    expenseDetails.innerHTML = `${expenseName.value}, ${amountSpent.value}`;

    //create delete icon;
    let icon = document.createElement('i');
    icon.classList.add('ri-delete-bin-6-fill');
    expenseDetails.appendChild(icon);

    //styling the icon;
    icon.style.position = 'absolute';
    icon.style.right = '10px';
    icon.style.cursor = 'pointer';

    //when delete icon is clicked, Delete the parent of that icon
    icon.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    listItems.appendChild(expenseDetails);
});
