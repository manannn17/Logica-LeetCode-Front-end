// var ab = document.getElementById("login");
// var bc = document.getElementById("register");
// var cd = document.getElementById("option");

// function login(){
//     ab.style.left = "4px";
//     bc.style.right = "-520px";
//     ab.style.opacity = 1;
//     bc.style.opacity = 0;
// }

// function register(){
//     ab.style.left = "-510px";
//     bc.style.right = "5px";
//     ab.style.opacity = 0;
//     bc.style.opacity = 1;
// }

// function option(){
    
// }



var ab = document.getElementById("login");
var bc = document.getElementById("register");
var cd = document.getElementById("option");

function login() {
    ab.style.left = "4px";
    bc.style.right = "-520px";
    ab.style.opacity = 1;
    bc.style.opacity = 0;
}

function register() {
    ab.style.left = "-510px";
    bc.style.right = "5px";
    ab.style.opacity = 0;
    bc.style.opacity = 1;
}

async function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById("Firstname").value;
    const lastName = document.getElementById("Lastname").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to register");
        }

        const data = await response.json();
        console.log("User registered successfully:", data);

        alert("Registration successful! You can now log in.");  //redirect to the login page or show a success message
        login(); //switch to the login form
    } catch (error) {
        console.error("Registration failed:", error);
        alert(error.message);
    }
}

function option() {
    // Optional implementation for the forgot password feature
}
