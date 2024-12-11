import { GenerateJoke } from "./generateJoke";
import './styles/main.scss'
import logo from './assets/logo.svg'
const logoImg = document.getElementById('logId')
logoImg.src = logo;

const btnClick = document.getElementById('jokeBtn')
btnClick.addEventListener('click', GenerateJoke)

GenerateJoke()