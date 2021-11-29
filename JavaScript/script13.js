const loginForm = document.getElementById("loginForm")
const loginMessage = document.getElementById("loginMessage")

loginForm.onsubmit = (e) => {
    e.preventDefault()
    const enteredName = document.getElementById("loginName").value
    const enteredPassword = document.getElementById("loginPassword").value
    console.log(enteredName, enteredPassword)

    const user = {
        name: enteredName,
        password: enteredPassword
    }
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }


    fetch('http://167.99.138.67:1111/login', options)
        .then((res) => res.json())
        .then((data) => {
            loginMessage.textContent = data.message
            console.log(data)
            let secretKeyLogin = data.secretKey
            localStorage.setItem("secretKey", secretKeyLogin)
            console.log(secretKeyLogin)
        });
}