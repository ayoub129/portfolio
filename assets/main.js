const date = document.getElementById("date")
const opening = document.getElementById("open")
const navigation = document.getElementById("nav-phone")


date.textContent = new Date().getFullYear()

    opening.addEventListener('click' , () => {
        navigation.classList.toggle('block')
    })