let counter=document.getElementById('counter');

let counter1 = 0;

//increament by counter
function increament() {
    counter1 = counter1 + 1;
    counter.textContent=counter1;
}

//decreament by counter:
function decreament() {
    counter1=counter1 - 1;
    counter.textContent=counter1;
}
// Reset counter
function reseter() {
    counter1 = 0;
    counter.textContent = counter1;
}
