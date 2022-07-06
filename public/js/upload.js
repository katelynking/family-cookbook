cloudinary.setCloudName("rutgers-coding-bootcamp-group-3");
//global variables to grab form data to use in post fetch request
let recipeName;
let description;
let ingredients;
let ingredientButton;
let ingredientTextArea;
let steps;
let stepButton;
let stepTextArea;
let category;
let imgFileName = "";
let uploadButton;
let user;
let imgLink;

let ingredientsArray = []; //stores ingredients to be converted into unordered list for textArea and string for database
let stepsArray = []; //stores steps to be converted into ordered list for textArea and string for database

recipeName = document.getElementById("recipe-title");
description = document.getElementById("description");
ingredients = document.getElementById("add-ingredient");
ingredientButton = document.getElementById("ingredient-button");
ingredientTextArea = document.getElementById("ingredient-text-area");
steps = document.getElementById("add-step");
stepButton = document.getElementById("step-button");
stepTextArea = document.getElementById("step-text-area");
category = document.getElementById("category");
// imgFileName = document.getElementById("image-file-name");
uploadButton = document.getElementById("upload-button");
user = document.getElementById("user");
imgLink = document.getElementById("img-link");

var myCropWidget = cloudinary.createUploadWidget(
  {
    cloudName: "rutgers-coding-bootcamp-group-3",
    uploadPreset: "etukbfiu",
    cropping: true,
    sources: ["local", "url"],
    // preBatch: (cb, data) => {
    //     imgFileName = data.files[0].name;
    //     console.log(imgFileName);
    //     // add post route to update database with imgFileName for this recipe

    //   },
  },
  (error, result) => {
    if (result.event === "success") {
      imgFileName = result.info.secure_url;
      //   console.log(imgFileName);
      imgLink.setAttribute("src", imgFileName);
      // widget.close();
    }
  }
);

const addIngredient = () => {
  ingredientsArray.push(ingredients.value);
  //append new unordered list item to ingredientTextArea.textContent
  let newIngredient = document.createElement("li");
  newIngredient.textContent = ingredients.value;
  ingredientTextArea.appendChild(newIngredient);
  //   console.log(newIngredient);

  // how do i make the input field clear once the ingredient is pushed so the user can add a new ingredient?
};

const addStep = () => {
  stepsArray.push(steps.value);
  //append new ordered list item to stepTextArea.textContent
  let newStep = document.createElement("li");
  newStep.textContent = steps.value;
  stepTextArea.appendChild(newStep);
  //how do i make the input field clear once the step is pushed so the user can add a new step?
};

const uploadRecipe = async (recipe) => {
  const fetching = await fetch("/add-recipe", {
    //we still need to make this POST route
    method: "POST",
    body: JSON.stringify(recipe),
    headers: { "Content-Type": "application/json" },
  });

  if (fetching.ok) {
    // document.location.replace("/singlerecipe");
    alert("Uploaded recipe.");
    myCropWidget.close();
  } else {
    alert("Failed to upload recipe.");
  }
};

// const uploadRecipe = (recipe) => console.log(recipe);

const handleRecipeUpload = () => {
  let catValue;
  if (category.value === "breakfast") {
    catValue = 1;
  }
  if (category.value === "mains") {
    catValue = 2;
  }
  if (category.value === "sides") {
    catValue = 3;
  }
  if (category.value === "desserts") {
    catValue = 4;
  }
  const ingArrJoin = ingredientsArray.join(", ");
  const stepArrJoin = stepsArray.join(", ");
  const newRecipe = {
    recipe_name: recipeName.value,
    description: description.value,
    ingredients: ingArrJoin,
    steps: stepArrJoin,
    category_id: catValue,
    img_name: imgFileName,
  };
  uploadRecipe(newRecipe);
};

//add event listener for addIngredient button that pushes ingredients.value to ingredientsArray
ingredientButton.addEventListener("click", addIngredient);

//add event listener for addStep button that pushes steps.value to stepsArray
stepButton.addEventListener("click", addStep);

//add event listener for uploadRecipe button that calls uploadRecipe function
uploadButton.addEventListener("click", handleRecipeUpload);

document.getElementById("upload_widget").addEventListener("click", function () {
  myCropWidget.open();
});
