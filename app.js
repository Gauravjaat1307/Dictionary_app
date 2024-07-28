const getBtn = document.getElementById('Btn');

function fetchResponse(){
    
    const word = document.getElementById('search').value.trim();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
    .then(res => {
        if (!res.ok){
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        const definition = data[0].meanings[0].definitions[0].definition;
        document.getElementById('Response').innerHTML = `<strong>${word}:</strong> ${definition}`;
    })
    .catch(error => {
        document.getElementById('Response').innerHTML = `<span style="color: red;">Error: ${error.message}</span>`;
    });

}
getBtn.addEventListener('click',fetchResponse);



