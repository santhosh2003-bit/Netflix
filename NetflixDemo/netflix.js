// Get all elements with the class "boxes"
const boxesList = document.querySelectorAll('.boxes');
const information = document.querySelectorAll('.info');
const sbtn = document.querySelectorAll('.sbtn');
const sbt = document.querySelectorAll('.sbt');
let currentBoxInfo = null;

// Loop through each "boxes" element and add a click event listener
boxesList.forEach((box, index) => {
    const info = information[index]; // Get the corresponding info element
    const addSymbol = sbtn[index];
    const closeSymbol = sbt[index];

    box.addEventListener('click', () => {
        if (info.style.display === "none" || info.style.display === "") {
            if (currentBoxInfo) {
                currentBoxInfo.style.display = 'none';
                currentBoxInfo.previousElementSibling.querySelector('.sbt').style.display = 'none'; // Hide close symbol
                currentBoxInfo.previousElementSibling.querySelector('.sbtn').style.display = 'block'; // Show add symbol
            }
            info.style.display = "block";
            
            info.style.padding = "20px";
            addSymbol.style.display = 'none'; // Hide add symbol
            closeSymbol.style.display = 'block'; // Show close symbol
           

            closeSymbol.style.color = 'white';
            closeSymbol.style.border = 'none';
            closeSymbol.style.backgroundColor = 'transparent'; // Corrected property name
            currentBoxInfo = info;
        } else {
            info.style.display = "none";
            addSymbol.style.display = 'block'; // Show add symbol
            closeSymbol.style.display = 'none'; // Hide close symbol
        }
    });
});
