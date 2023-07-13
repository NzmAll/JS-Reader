const uploadFileIcon = document.querySelector("span");
const fileInput = document.querySelector("input");
const imageContainer = document.querySelector(".img-container");

uploadFileIcon.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function (e) {
  const { files } = e.target;

  const fileReader = new FileReader();
  for (let file of files) {
    fileReader.onloadend = ({ target: { result } }) => {
      const imageElement = document.createElement("img");
      imageElement.src = result;
      imageContainer.innerHTML = "";
      imageContainer.innerHTML = imageElement.outerHTML;
    };
    fileReader.readAsDataURL(file);
  }
});
