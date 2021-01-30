// Add Default Local Storage Class On Body
document.body.classList.add(localStorage.getItem('color-select' || 'main'));
// Initiate some variables
const divColor = document.querySelector('.color-option'),
gearOption = document.querySelector('.gear-opt');

// Toggle on/off the gear option
gearOption.addEventListener('click',() =>{
    divColor.classList.toggle('active');
})
// Click on color option
let elem = document.querySelectorAll('.color-switcher li'),
arrayClass = [];
for (let i = 0; i < elem.length; i++){
    arrayClass.push(elem[i].getAttribute('data-color'));
    // Add Event listener
    elem[i].addEventListener('click',function(){
     // Remove Old Classes
     document.body.classList.remove(...arrayClass);
     // Add New Classes
     document.body.classList.add(this.getAttribute('data-color'));
     // Add Data to Local Storage
     localStorage.setItem('color-select',this.getAttribute('data-color'));
     //console.log(localStorage.getItem('color-select'));
    })
}
