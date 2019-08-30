let net;

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");


// this loads up the  name of the file
customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.files[0].name;
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});


async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
  document.getElementById("loader").outerHTML = "";
  document.getElementById('console').innerText = 
  `prediction: ${result[0].className}\n`;
}

app();

