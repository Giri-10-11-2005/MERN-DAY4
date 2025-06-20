const students = [
    { name: "GIRI", marks: [80, 75, 90] },
    { name: "PANDI", marks: [70, 65, 60] },
    { name: "RAGU", marks: [95, 85, 80] },
    { name: "SHANKAR", marks: [60, 55, 50] }
];

const studentsWithTotal = students.map(student => ({
    ...student,
    total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));

const above200 = studentsWithTotal.filter(student => student.total > 200);
const topperTotal = studentsWithTotal.reduce(
    (max, student) => student.total > max ? student.total : max,
    0
);

console.log("Students with total marks:", studentsWithTotal);
console.log("Students scoring above 200:", above200);
console.log("Class topper's total marks:", topperTotal);
