// porblem 1

function calculateTax(income, expenses) {

    if(expenses > income || income < 0 || expenses < 0){
        return  "Invalid Input"
    }

        const diff = income - expenses;
        const tax = diff * .20;
        return tax;
    
}

const result = calculateTax(34000, 1753);
console.log(result);