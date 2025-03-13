count = 0

function numberOfClicks() {
    count++
    document.getElementById('counter').innerText = count
}

function resetNumberOfClicks() {
    count = 0
    document.getElementById('counter').innerText = count
}

let lista = [10, 100, 500, 1000, 2500, 5000, 10000] 

function acheivement() {
    if (lista.includes(count)) {
        alert('Grattis! Du har klickat ' + count + ' gånger!')
    }
}

document.getElementById('button').addEventListener('click', numberOfClicks);
document.getElementById('reset').addEventListener('click', resetNumberOfClicks);
document.getElementById('button').addEventListener('click', acheivement);