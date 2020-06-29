
 window.onload = () => {
    console.log("HELLO!!!");
    // Creating a new h3 element
    let h3 = document.createElement('h3');
    h3.innerText = "MY new h3"
    //Selecting the container div
    let containerDiv = document.querySelector('#index-container');
    containerDiv.appendChild(h3);
 }

 