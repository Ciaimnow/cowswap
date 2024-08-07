const currencyBtn = document.getElementById("Select1");
const modal = document.getElementById("modal");

const modal_container = document.getElementById('modal_container');
const closer = document.getElementById('closer');

currencyBtn.addEventListener('click', () => {
//    modal_container.classList.remove('unshow');
//    modal_container.classList.add('show');
     document.getElementById("SelectBox").style.display = "block";      
});
closer.addEventListener('click', () => {
//    modal_container.classList.add('unshow');
//    modal_container.classList.remove('show');
     document.getElementById("SelectBox").style.display = "none";      


});

