const numberInput = document.getElementById("numberInput");
const generateButton = document.getElementById("generateButton");
const loremIpsumDisplayDiv = document.getElementById("output");

generateButton.addEventListener("click", () => {
  const value = numberInput.value;
  if (!isNumber(value)) {
    loremIpsumDisplayDiv.innerHTML = "";
    loremIpsumDisplayDiv.classList.remove("output");
    return;
  }
  const loremIpsumText = generateText(value);
  loremIpsumDisplayDiv.classList.add("output");
  loremIpsumDisplayDiv.innerHTML = loremIpsumText;
});

// Add a copy-to-clipboard feature on the output div.
loremIpsumDisplayDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(loremIpsumDisplayDiv.innerText);
  alert("Copied text to clipboard.");
});

function isNumber(input) {
  return input && !isNaN(input);
}

function generateText(numberOfWords) {
  const splitText = loremIpsumText.split(" ");
  let numberOfLoops = Math.floor(numberOfWords / splitText.length);
  let remainingNumberOfWords = numberOfWords;
  let returnString = "";

  for (let i = 0; i < numberOfLoops; i ++) {
    returnString += splitText.slice(0, splitText.length).join(" ");
    remainingNumberOfWords -= splitText.length;
  }

  if (remainingNumberOfWords > 0) {
    returnString += splitText.slice(0, remainingNumberOfWords).join(" ");
  }

  return returnString;
}

const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam. Consectetur adipiscing elit ut aliquam purus sit. 
Ullamcorper sit amet risus nullam eget felis. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Non curabitur gravida arcu ac tortor. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. 
Volutpat est velit egestas dui id ornare arcu. Nibh mauris cursus mattis molestie a. Aliquam faucibus purus in massa tempor. 
Egestas purus viverra accumsan in. Pulvinar elementum integer enim neque volutpat. Quis lectus nulla at volutpat diam ut venenatis tellus in. 
Leo a diam sollicitudin tempor id eu nisl. In cursus turpis massa tincidunt. Imperdiet proin fermentum leo vel orci porta non pulvinar. 
Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Ut consequat semper viverra nam libero. Ipsum a arcu cursus vitae congue mauris. 
Orci sagittis eu volutpat odio facilisis mauris. Faucibus nisl tincidunt eget nullam. Vivamus arcu felis bibendum ut tristique et. 
Laoreet id donec ultrices tincidunt arcu non sodales neque. Nec dui nunc mattis enim ut tellus elementum. 
At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Amet dictum sit amet justo. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. 
In nisl nisi scelerisque eu ultrices vitae auctor eu. Scelerisque viverra mauris in aliquam. Mattis enim ut tellus elementum. Nec feugiat nisl pretium fusce id velit. 
Ultrices vitae auctor eu augue ut lectus. Neque aliquam vestibulum morbi blandit cursus risus at. Sed augue lacus viverra vitae congue eu consequat ac. 
Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra et ultrices neque ornare. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tempus imperdiet nulla malesuada pellentesque elit eget. 
Tincidunt id aliquet risus feugiat in. Adipiscing enim eu turpis egestas pretium. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Eleifend mi in nulla posuere sollicitudin aliquam. 
Varius quam quisque id diam vel quam elementum pulvinar etiam. Cursus sit amet dictum sit amet justo donec enim. Leo duis ut diam quam. In hac habitasse platea dictumst vestibulum rhoncus. 
Enim ut tellus elementum sagittis vitae et leo duis. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Lobortis mattis aliquam faucibus purus in massa tempor. 
Eget nunc lobortis mattis aliquam faucibus purus in. Mollis aliquam ut porttitor leo a diam sollicitudin. Est ante in nibh mauris cursus mattis molestie a iaculis. Arcu non sodales neque sodales ut etiam sit. 
Sed vulputate mi sit amet mauris commodo. Tortor posuere ac ut consequat semper viverra nam libero justo. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Morbi blandit cursus risus at ultrices mi tempus imperdiet. 
Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Gravida neque convallis a cras semper auctor neque. Amet commodo nulla facilisi nullam vehicula ipsum. Felis eget nunc lobortis mattis aliquam faucibus. Eget felis eget nunc lobortis. 
Non sodales neque sodales ut etiam sit. Elit pellentesque habitant morbi tristique senectus et. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Risus commodo viverra maecenas accumsan lacus vel facilisis. Non nisi est sit amet facilisis magna etiam tempor orci. 
Turpis cursus in hac habitasse. Gravida arcu ac tortor dignissim. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Nunc pulvinar sapien et ligula ullamcorper malesuada. Eu sem integer vitae justo. 
Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Et odio pellentesque diam volutpat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Accumsan lacus vel facilisis volutpat. Malesuada pellentesque elit eget gravida cum sociis natoque. 
Varius duis at consectetur lorem donec massa sapien faucibus. At urna condimentum mattis pellentesque.`