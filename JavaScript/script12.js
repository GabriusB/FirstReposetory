const username = document.querySelector(".username")
const password1 =document.querySelector(".password")
const password2 =document.querySelector(".rpassword")
const form = document.querySelector("form")
const host = "http://167.99.138.67:1111/createaccount"
const AllPost = "http://167.99.138.67:1111/getallposts"
const NamePost = "http://167.99.138.67:1111/getserposts/:name"
const IdPost = "http://167.99.138.67:1111/getserposts/:name/:id"
const ButtonAllPosts = document.querySelector(".AllPosts")

form.onsubmit = (e) => {
    e.preventDefault()
    console.log(username.value, password1.value, password2.value)
    const userNameValue = username.value,
        password1Value = password1.value,
        password2Value = password2.value
    const user = {
        name: userNameValue,
        passwordOne: password1Value,
        passwordTwo: password2Value
    }

    if(password1Value !== password2Value)
    {
        alert.innerText = "Passwords don't match";
        alert.classList.add("alert-danger");
        return;
    }

    const options = {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(user)
    }

    fetch(host, options)
        .then(res => res.json())
        .then(data => {
            if (data.success){
                console.log("User registered succesefully")
                console.log(data)
            }

    })
}






