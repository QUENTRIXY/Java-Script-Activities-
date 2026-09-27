
// ACTIVITY 1.3 - JAVASCRIPT ESSENTIALS
// ATTENDANCE SYSTEM

const readline = require("readline");

// ---------- 10 CONST VARIABLES ----------
const schoolName = "North West Samar State University";
const subject = "Professional Elective 1";
const teacher = "Mr. Ortixz";
const room = "Computer Lab 1";
const schoolYear = "2026-2027";
const totalStudents = 5;
const passingAttendance = 75;
const presentStatus = "Present";
const absentStatus = "Absent";
const lateStatus = "Late";

// ---------- 10 LET VARIABLES ----------
let studentName = "Quen";
let studentAge = 22;
let studentID = "2026-001";
let attendanceStatus = "Present";
let attendanceDays = 0;
let absentDays = 0;
let lateDays = 0;
let attendancePercentage = 0;
let attendanceMessage = "";
let recordStatus = "Active";

// ---------- ARRAYS ----------
const students = ["Quen", "Angelo", "Reann", "Rona", "Aeiou"];
const statuses = ["Present", "Absent", "Present", "Late", "Present"];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const subjects = ["JavaScript", "Database", "Networking"];

// ---------- OBJECT LITERALS ----------
const student = {
    name: "Quen",
    id: "2026-001",
    attendance: {
        status: "Present",
        percentage: 90
    }
};

const classInfo = {
    subject: "Professional Elective 1",
    teacher: "Mr. Ortiz",
    room: "Computer Lab 1"
};

const school = {
    name: "North West Samar State University",
    year: "2026-2027"
};

// ---------- 3 DESTRUCTURED ARRAYS ----------
const [student1, student2] = students;
const [day1, day2] = days;
const [subject1, subject2] = subjects;

// ---------- 3 DESTRUCTURED OBJECT LITERALS ----------
const { name: currentStudent, id: currentID } = student;
const { subject: currentSubject, teacher: currentTeacher } = classInfo;
const { name: currentSchool, year: currentYear } = school;

// ---------- 2 ARRAYS USING SPREAD ----------
const allStudents = [...students, "Frank"];
const allDays = [...days, "Saturday"];

// ---------- 2 OBJECTS USING SPREAD ----------
const updatedStudent = {
    ...student,
    section: "BSCS3C"
};

const updatedClass = {
    ...classInfo,
    schoolYear: "2026-2027"
};

// ---------- 2 ARRAYS USING MAP ----------
const studentNames = students.map(name => name.toUpperCase());

const attendanceLabels = statuses.map(status => `Status: ${status}`);

// ---------- 2 ARRAYS USING FILTER ----------
const presentStudents = statuses.filter(
    status => status === "Present"
);

const absentStudents = statuses.filter(
    status => status === "Absent"
);

// ---------- 2 OBJECTS USING OPTIONAL CHAINING ----------
const studentStatus = student?.attendance?.status;

const studentPercentage = student?.attendance?.percentage;

// ---------- 5 ARROW FUNCTIONS ----------
const showWelcome = () => {
    return `Welcome to the ${schoolName} Attendance System!`;
};

const calculateAttendance = (present, total) => {
    return (present / total) * 100;
};

const checkAttendance = percentage => {
    return percentage >= passingAttendance;
};

const getStatusMessage = status => {
    return `Attendance Status: ${status}`;
};

const showStudent = name => {
    return `Student: ${name}`;
};

// ---------- USER INPUT ----------
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(showWelcome());
console.log(`School: ${schoolName}`);
console.log(`Subject: ${subject}`);
console.log(`Teacher: ${teacher}`);
console.log(`Room: ${room}`);

console.log(`\nStudents:`);
students.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

rl.question(`\nEnter student number:  `, studentChoice => {

    rl.question(
        `Enter attendance status (Present/Absent/Late):`,
        statusInput => {

            let selectedIndex = Number(studentChoice) - 1;
            attendanceStatus = statusInput;

            if (
                selectedIndex >= 0 &&
                selectedIndex < students.length
            ) {

                studentName = students[selectedIndex];

                if (attendanceStatus === "Present") {
                    attendanceDays++;
                } 
                else if (attendanceStatus === "Absent") {
                    absentDays++;
                } 
                else if (attendanceStatus === "Late") {
                    lateDays++;
                }

                attendancePercentage = calculateAttendance(
                    attendanceDays,
                    1
                );

                if (checkAttendance(attendancePercentage)) {
                    attendanceMessage = "Attendance is good.";
                } else {
                    attendanceMessage = "Attendance needs improvement.";
                }

                // ---------- OUTPUT ----------
                console.log(`\n========== ATTENDANCE RECORD ==========`);

                console.log(showStudent(studentName));
                console.log(`Status: ${attendanceStatus}`);
                console.log(`Present Days: ${attendanceDays}`);
                console.log(`Absent Days: ${absentDays}`);
                console.log(`Late Days: ${lateDays}`);
                console.log(
                    `Attendance Percentage: ${attendancePercentage}%`
                );
                console.log(`Message: ${attendanceMessage}`);
                console.log(`Record: ${recordStatus}`);

                console.log(`\nStudent ID: ${currentID}`);
                console.log(`Class Subject: ${currentSubject}`);
                console.log(`Teacher: ${currentTeacher}`);
                console.log(`School Year: ${currentYear}`);

                console.log(`\nOptional Chaining:`);
                console.log(`Student Status: ${studentStatus}`);
                console.log(
                    `Recorded Percentage: ${studentPercentage}%`
                );

                console.log(`\nMapped Student Names:`);
                console.log(studentNames.join(", ")``);

                console.log(`\nPresent Records:`);
                console.log(presentStudents.join(", "));

                console.log(`\nAbsent Records:`);
                console.log(absentStudents.join(", "));

            } else {
                console.log(`Invalid student number.`);
            }

            rl.close();
        }
    );
});