// Singletone  Objects
const tinderUser = new Object()

tinderUser.id = "ABC123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// Accessing keys and values of an object
console.log("Object Keys: ", Object.keys(tinderUser))
console.log("Object Values: ", Object.values(tinderUser))
console.log("Object Entries: ", Object.entries(tinderUser))

// Check the kye available or not
console.log("User Property: ", tinderUser.hasOwnProperty('isLoggedIn'))

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abhishek",
            lastName: "Kashyap"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2} // Nested objects
const obj3 = Object.assign({}, obj1, obj2) // Empty parenthesis (optional) to combine all the values
console.log(obj3)

// Similar like an array (spreading it out)
const obj4 = {...obj1, ...obj2}
console.log(obj4);

// Object inside an array
const userArray = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "qsr@gmail.com"
    },
    {
        id: 3,
        email: "jkf@gmail.com"
    },
    {
        id: 4,
        email: "xyz@gmail.com"
    }
]

console.log(userArray[2].email);

// Object De-Structure
const course = {
    courseName: "JavaScript",
    coursePrice: "9999",
    courseInstructor: "Abhishek"
}

console.log(course.courseInstructor); // Not scalable to write this everytime
const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(courseInstructor)