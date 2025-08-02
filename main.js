console.log("hi there");
const emailEl = document.getElementById("email");
const refreshEl = document.getElementById("refresh");
const randomEmailEndpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

function loadEmail() {
    emailEl.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        axios.get(randomEmailEndpoint)
            .then(response => {
                const radomEmail = response.data.response
                console.log(radomEmail);
                const li = document.createElement("li")
                li.classList.add("list-group-item", "text-info-emphasis", "email-item")
                li.innerHTML = radomEmail
                emailEl.appendChild(li)
            })
    }
}

loadEmail();

refreshEl.addEventListener('click', () => loadEmail())
