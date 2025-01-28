function showExternalMessage() {
    alert('Hej från extern JavaScript!')
}

document.getElementById('externalButton').addEventListener('click', showExternalMessage);