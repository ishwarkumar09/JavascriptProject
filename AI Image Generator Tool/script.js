const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");
const OPENAI_API_KEY = "98f8db5c-fc86-4d2a-8bcb-cb9c1beef4b4";
let isImageGenerating = false;

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imageobject, index) => {
    const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    const imgElement = imgCard.querySelector("img");
    const downloadBtn = imgCard.querySelector("download-btn")
    

    //set the image source to the AI-generated image data
    const aiGeneratedImg = `data:image/jpeg;base64,${imageobject.b64_json}`;
    imgElement.src = aiGeneratedImg;

    //when the image is loaded , remove the loading class and set download attributes

    imgElement.onload = () => {
      imgCard.classList.remove("loading");
      downloadBtn.setAttribute("href" ,aiGeneratedImg)
      downloadBtn.setAttribute("download" ,`${new Date().getTime()}.jpg`)
    };
  });
};

const generateAiImage = async (userPrompt, userImageQuantity) => {
  try {
    const response = await fetch(
      'https://api.deepai.org/api/text2img',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         'api-key': '98f8db5c-fc86-4d2a-8bcb-cb9c1beef4b4',
        },
        body: JSON.stringify({
          prompt: userPrompt,
          n: parseInt(userImageQuantity),
          size: "512x512",
          quality: "standard",
          response_format: "b64_json",
        }),
      }
    );

    console.log(response);

    if (!response.ok) {
      throw new Error("Fail to generate image ! Try Again");
    }
    const { data } = await response.json(); // Get data from the response
    // console.log(data)

    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  }finally{
    isImageGenerating = false;
  }
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  if(isImageGenerating)return;
  isImageGenerating = true;

  //Get user input and image Quantity value from the form

  const userPrompt = e.currentTarget[0].value;
  const userImageQuantity = e.currentTarget[1].value;

  //  console.log(userImageQuantity ,userPrompt)
  //  console.log(generateForm)

  const imgCardMarkup = Array.from(
    { length: userImageQuantity },
    () =>
      `<div class="img-card loading ">
   <img src="images/loader.svg" alt="image">
   <a href="#" class="download-btn">
       <img src="images/download.svg" alt="download icon">
   </a>
</div>`
  ).join("");
//   console.log(imgCardMarkup)

  imageGallery.innerHTML = imgCardMarkup;
  generateAiImage(userPrompt, userImageQuantity);
};

generateForm.addEventListener("submit", handleFormSubmission);
