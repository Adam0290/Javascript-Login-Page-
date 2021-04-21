let users = [{ username: "adam", password: "1234" }]; // Storing data in Array >>>> This is telling the program what my username and password are. //
function signup() {
let user = {  // Create a new user object by accepting a input. //
username: document.getElementById("username").value, 
password: document.getElementById("password").value,
};

users.push(user);  // Push user into users into the database. //
console.log(user);
window.location.href = "login.html"; // Redirects user to the login page if login credentials are incorrect. //
} // The above code is all used for the signup. //

function login() {
let username = document.getElementById("un").value;
let password = document.getElementById("pw").value;

for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) { // Checks users one by one >>>> if they match then they are logged in. //
    window.location.href = "index.html"; // This code is activated if the password credentials are correct >>>> redirects to the index.html page. //
}
}
}