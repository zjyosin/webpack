import axios from "axios"

export function GenerateJoke () {
    const config = {
        headers: {
            Accept: 'application/Json'
        }
    }
    axios.get('https://icanhazdadjoke.com', config).then(res => {
        const jokeData = document.getElementById('jokeId')
        jokeData.innerHTML = res.data.joke;
        console.log(res.data.joke)
    })
}