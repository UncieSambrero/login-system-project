function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
    } else if (password.length < 4) {
        alert("Password too short");
    } else {
        alert("Login successful");
    }
}
