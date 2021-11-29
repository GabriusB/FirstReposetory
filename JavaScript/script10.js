
const There = document.querySelector(".There")
fetch("https://randomuser.me/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        There.innerHTML = `
<button><h2>Add User</h2></button>
<div className="container">
    <div className="d-flex There">
        <div>${data.picture}</div>
        <div>
            <div>Surname</div>
            <div>Email</div>
            <div>City</div>
            <div>State</div>
            <div>Postcode</div>
            <div>PostcodePhone</div>
        </div>
    </div>
</div>
`
    })