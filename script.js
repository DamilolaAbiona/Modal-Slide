const modal = document.querySelector(".modal"),
modalContent = document.querySelector(".modal-content")
button = document.querySelector(".btn"),
close = document.querySelector(".close");
button.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal)
// Open modal
function openModal(e){
e.preventDefault();
modal.style.display = "block"
}
function closeModal(e){
modalContent.classList.add("slide-up")
setTimeout(()=>{
    modalContent.classList.remove("slide-up")
modal.style.display = "none"
}, 500)


}