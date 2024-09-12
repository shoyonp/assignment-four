// porblem 1
// pb 1 er hakla ektu kaj baki ache

function calculateTax(income, expenses) {

    if(expenses > income || income < 0 || expenses < 0){
        return  "Invalid Input"
    }
        const diff = income - expenses;
        const tax = diff * .20;
        return tax;
}

const z = calculateTax(34000, 1753);
// console.log(z);

// problem 2

function sendNotification(email) {

    if(typeof email !== 'string' || !email.includes('@')){
        return "Invalid Email"
    }
    const splitEmail = email.split('@');
    const userName = splitEmail[0];
    const domainName = splitEmail[1];
    const notification = userName + ' sent you an email from ' + domainName
    return notification;
}

const x = sendNotification('farhan34@yahoo.com')
// console.log(x)

// porblem 3

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input"
    }

    let str = name.split("");

    for(const array of str){
      if(!isNaN(array)){
        return true;
      }
    }
    return false;
}

const y = checkDigitsInName("@#")
// console.log(y);


// problem 4

function calculateFinalScore(obj) {
    if(typeof obj !== "object" || typeof obj.name !== "string" || typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean"){
        return  "Invalid Input";
    }
    
    let totalMarks =  obj.testScore + obj.schoolGrade;

    if(obj.isFFamily){
        totalMarks = totalMarks + (totalMarks * 0.2);
    }

    if(totalMarks >= 80){
        return true;
    }
    else{
        return false;
    }
}

const person1 ={ 
    name: "Rajib", 
    testScore: 45,  
    schoolGrade: 25, 
    isFFamily : true }

    const person2 ={ 
        name: "sojib", 
        testScore: 45,  
        schoolGrade: 20, 
        isFFamily : true }
    
// console.log(calculateFinalScore(person2));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
// console.log(calculateFinalScore("hello" ));


// porblem 5

function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }

    let sum = 0;
    for(number of waitingTimes){
        sum = sum + number;
    }
    const count = waitingTimes.length;
    let  avarage = Math.round(sum / count);
    let serial = serialNumber - 1;
    let mainSerial = serial - waitingTimes.length;
    let time = Math.round(avarage * mainSerial);
    return time;
}

const result= waitingTime([7, 8, 3, 4, 5], "9");
// console.log(result)