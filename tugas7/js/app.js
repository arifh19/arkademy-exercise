const checkoutModal = document.getElementById("checkoutModal");
const addModal = document.getElementById("addModal");
const checkout = document.getElementById("checkout");
const add = document.getElementById("add");
const closeAdd = document.getElementById("closeAdd");

checkout.onclick = () => {
    checkoutModal.style.display = "block";
}
add.onclick = () => {
    addModal.style.display = "block";
}
closeAdd.onclick = () =>{
    addModal.style.display = "none";
    console.log("tes")
}
window.onclick = (event) => {
  if (event.target == checkoutModal) {
    checkoutModal.style.display = "none";
  }
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
}
