import "./styles.css";

console.log("Hi")

document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });