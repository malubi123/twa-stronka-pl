// Funkcja do dodawania tekstu do strony
function addText() {
    const textElement = document.createElement('p');
    textElement.textContent = 'To jest przykładowy tekst.';
    document.getElementById('page-content').appendChild(textElement);
}

// Funkcja do dodawania obrazu do strony
function addImage() {
    const imageElement = document.createElement('img');
    imageElement.src = 'assets/placeholder.jpg';
    imageElement.alt = 'Przykładowy obrazek';
    document.getElementById('page-content').appendChild(imageElement);
}

// Funkcja do dodawania wideo do strony
function addVideo() {
    const videoElement = document.createElement('iframe');
    videoElement.width = '560';
    videoElement.height = '315';
    videoElement.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Przykładowe wideo
    videoElement.allowFullscreen = true;
    document.getElementById('page-content').appendChild(videoElement);
}

// Funkcja do dodawania formularza do strony
function addForm() {
    const formElement = document.createElement('form');
    formElement.innerHTML = `
        <label for="name">Imię:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Wyślij">
    `;
    document.getElementById('page-content').appendChild(formElement);
}

// Funkcja do zapisywania strony
function savePage() {
    const pageContent = document.getElementById('page-content').innerHTML;
    // Przykład: zapisanie zawartości strony do pliku lub bazy danych
    console.log('Zapisano stronę:', pageContent);
    alert('Strona została zapisana!');
}

// Obsługa kliknięć przycisków
document.getElementById('add-text').addEventListener('click', addText);
document.getElementById('add-image').addEventListener('click', addImage);
document.getElementById('add-video').addEventListener('click', addVideo);
document.getElementById('add-form').addEventListener('click', addForm);
document.getElementById('save-page').addEventListener('click', savePage);
