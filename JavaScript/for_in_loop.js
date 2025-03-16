let student={
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "English"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}
for(let i in student) {
    console.log(i, ":", student[i]);
}