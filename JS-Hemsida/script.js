count = 0

function numberOfClicks() {
    count++
    document.getElementById('counter').innerText = count
}

function resetNumberOfClicks() {
    count = 0
    document.getElementById('counter').innerText = count
}

function acheivement() {
    if (count >= 10 && count <= 10) {
        alert("You have clicked 10 times!")
    } else if (count >= 100 && count <= 100) {
        alert("You have clicked 100 times!")
    } else if (count >= 500 && count <= 500) {
        alert("You have clicked 500 times!")
    } else if (count >= 1000 && count <= 1000) {
        alert("You have clicked 1000 times!")
    } else if (count >= 2500 && count <= 2500) {
        alert("You have clicked 2500 times!")
    } else if (count >= 5000 && count <= 5000) {
        alert("You have clicked 5000 times!")
    } else if (count >= 10000 && count <= 10000) {
        alert("You have clicked 10000 times!")
    }
}

document.getElementById('button').addEventListener('click', numberOfClicks);
document.getElementById('reset').addEventListener('click', resetNumberOfClicks);
document.getElementById('button').addEventListener('click', acheivement);