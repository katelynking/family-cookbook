//global variables to grab form data to use in post fetch request
let recipeName;
let ingredients;
let steps;
let category;
let imgFileName;
let uploadButton;
let user;

let ingredientsArray = []; //stores ingredients to be converted into string

if (window.location.pathname === '/upload') {
    recipeName = document.getElementById("recipe-name");
    ingredients = document.getElementById("ingredients");
    steps = document.getElementById("steps");
    category = document.getElementById("category");
    imgFileName = document.getElementById("image-file-name");
    uploadButton = document.getElementById("upload-button");
    user = document.getElementById("user");
}

const addIngredient = () => {

}


const uploadRecipe = (recipe) => fetch("/home-routes/recipes", {
    method: 'POST',
    body: JSON.stringify(recipe),
});


const handleRecipeUpload = () => {
    const newRecipe = {
        name: recipeName.value,
        ingredients: ingredients
    }
}


//add event listener for addIngredient button that pushes ingredients.value to ingredientsArray
//add event listener for uploadRecipe button that calls uploadRecipe function
