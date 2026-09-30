
//3 variables
let studentName = "Quen";
let passingGrade = 75;
let totalPassed = 0;

// 1 array
const grades = [90, 90, 90, 90, 90];

// Loop 1 (displays all grades)
console.log("Student Grades:");

for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${grades[i]}`);
}

// Conditional 1 (checks if grade is at least 75)

if (grades[0] >= passingGrade) {
    console.log(`${studentName} passed this subject.`);
} else {
    console.log(`${studentName} failed this subject.`);
}

// Loop 2 (check what grade passed)
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
        totalPassed++;
   }
}

// Conditional 2 (check if 3 subjects passed or failed)
if (totalPassed >= 3) {
    console.log(`${studentName} passed 3 or more subjects.`);
} else {
    console.log(`${studentName} failed 3 or more subjects.`);
}