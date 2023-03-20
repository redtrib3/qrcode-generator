
function getQrCode() {

    var userInput = document.getElementsByClassName('inputbox')[0].value;
    const fgColor = document.getElementById("fgDropdown").value;
    const bgColor = document.getElementById("bgDropdown").value;

    const urlParam = encodeURIComponent(userInput);
    const getUrl = `https://qrcode-1-j5807843.deta.app/qrcode?site=${urlParam}&fg=${fgColor}&bg=${bgColor}`;
    
    var imgElement = document.getElementById("imghold");
    var downloadBtn = document.getElementById("download-btn");
    
    if ( userInput ===  "")
    {
        alert("Please provide the required field : URL/string");
        return;
    }
    
    if(userInput.length > 200)
    {
        userInput = userInput.substring(0,200);
        alert("More than 200 characters detected. Truncated to first 200 characters");
    }
    
    //unhide the img element and its download btn
    imgElement.style.display = 'block'; 
    downloadBtn.style.display = 'block';

    // show the image
    imgElement.src = getUrl;
    downloadBtn.querySelector("a").href = getUrl + '&download=y';
}

// function to toggle accordions for color selection

function toggleAccordion(accordion) {
  accordion.classList.toggle('active');
  var panel = accordion.nextElementSibling;
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } 
  else {
    panel.style.display = 'block';
  }
  
}
