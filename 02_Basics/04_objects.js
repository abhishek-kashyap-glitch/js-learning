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
console.log(instructor)

// JSON Format
{
    "name": "Abhishek",
    "courseName": "JS in Hindi",
    "price": "free"
}

// Github API
// {
//   "login": "abhishek-kashyap-glitch",
//   "id": 190820696,
//   "node_id": "U_kgDOC1-xWA",
//   "avatar_url": "https://avatars.githubusercontent.com/u/190820696?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/abhishek-kashyap-glitch",
//   "html_url": "https://github.com/abhishek-kashyap-glitch",
//   "followers_url": "https://api.github.com/users/abhishek-kashyap-glitch/followers",
//   "following_url": "https://api.github.com/users/abhishek-kashyap-glitch/following{/other_user}",
//   "gists_url": "https://api.github.com/users/abhishek-kashyap-glitch/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/abhishek-kashyap-glitch/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/abhishek-kashyap-glitch/subscriptions",
//   "organizations_url": "https://api.github.com/users/abhishek-kashyap-glitch/orgs",
//   "repos_url": "https://api.github.com/users/abhishek-kashyap-glitch/repos",
//   "events_url": "https://api.github.com/users/abhishek-kashyap-glitch/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/abhishek-kashyap-glitch/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": null,
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 1,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2024-12-06T07:52:30Z",
//   "updated_at": "2024-12-06T07:52:32Z"
// }

// JSON API in Array
[
    {},
    {},
    {}
]