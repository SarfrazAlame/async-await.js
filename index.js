

// console.log("Namaste")


// setTimeout(() => {
//     console.log("Javascript")
// }, 4000);


// console.log("Season2")

const GITHUB_API = "https://jsonplaceholder.typicode.com/posts"

const user = fetch(GITHUB_API)

user.then(function (data) {
    console.log(data)
})