
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn"); // Removed space
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title"); // Assuming the title has class 'meme-title'
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url); // Added url parameter to setAttribute
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(response => response.json())
        .then(data => {
            updateDetails(data.url, data.title, data.author);
        });
}

generateMemeBtn.addEventListener("click", generateMeme);