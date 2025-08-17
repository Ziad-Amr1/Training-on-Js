let allStudents = [
    { id: 1, name: "Kayda", degree: 100 },
    { id: 2, name: "Diya", degree: 85 },
    { id: 3, name: "Ravi", degree: 73 },
    { id: 4, name: "Rahul", degree: 60 },
    { id: 5, name: "Ray", degree: 45 },
    { id: 6, name: "Raj", degree: 36 },
    { id: 7, name: "Kaushik", degree: 27 },
];

function getAllStudentsDegree() {

    let sum = 0;

    console.log('Degrees of all students:');

    for (let person of allStudents) {
        sum += person.degree;
        printStudentStatus(person);
    }
    return { sum };
}

function printStudentStatus(person) {
        switch(true) {
        case (person.degree === 100):
            console.log(person.name + ' is a genius!');
            break;
        case (person.degree >= 85 && person.degree <= 99):
            console.log(person.name + ' is an excellent student!');
            break;
        case (person.degree >= 70 && person.degree < 85):
            console.log(person.name + ' is a very good student!');
            break;
        case (person.degree >= 60 && person.degree < 70):
            console.log(person.name + ' is a good student!');
            break;
        case (person.degree >= 50 && person.degree < 60):
            console.log(person.name + ' is a pass student!');
            break;
        case (person.degree < 50):
            console.log(person.name + ' is a fail student!');
            break;
        default:
            console.log(person.name + ' has an invalid degree!');
    }
}

function getPassedStudents() {

    let sum2 = 0;
    let count = 0;

    console.log('Degrees of students who passed:');
    for (let person of allStudents) {
        if (person.degree >= 50) {
            sum2 += person.degree;
            count++;
            console.log(person.name + ' : ' + person.degree);
        }

    }
    // return sum2 / count;
    return { sum2, count };
}

function calculateAverages(){
    let { sum } = getAllStudentsDegree();
    let { sum2, count } = getPassedStudents();
    let avr = sum / allStudents.length;
    let avr2 = sum2 / count;
    
    avr = parseFloat(avr.toFixed(2));
    avr2 = parseFloat(avr2.toFixed(2));
    count = parseInt(count);
    
    return { avr, avr2, count };
}

function printAllAverage() {
    let { avr, avr2, count } = calculateAverages();

    console.log('Total count of students = ' + allStudents.length);
    console.log('Average for all students = ' + avr);
    console.log('Average for students who passed = ' + avr2);
    console.log('Total count of students who passed = ' + count);
};

printAllAverage();