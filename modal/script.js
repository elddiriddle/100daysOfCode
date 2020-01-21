// get modal element
var modal = document.getElementById('modal');
// get open modal button
let modalBtn = document.getElementById('modalBtn');
// get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// outside click listener
window.addEventListener('click', outsideClick)

// function to open modal
function openModal(){
    modal.style.display = 'block';
}

// function to close modal 
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if click in dark area or
// on the modal element
function outsideClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }    
}
