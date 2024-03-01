
let save_id = document.getElementById("entries")
let count_id = document.getElementById("zero")
let count = 0


function increase() {
    count += 1
    count_id.textContent = count
}


function save() {
    let saveCount = count + " - "
    save_id.textContent += saveCount
    count_id.textContent = 0   //resets counter to 0
    count = 0
}