console.log("hi there");

const randomEmailEndpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
for (let i = 0; i < 10; i++) {
    axios.get(randomEmailEndpoint)
        .then(response => {
            const radomEmail = response.data.response
            console.log(radomEmail);
        })
}


