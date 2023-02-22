//Lab Part 1
function validateForm() {
    let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("psw").value;
   
//username validation 
    if(username == "")
    {
        alert("Form submission failed: Please enter your username");
        return false;
    } 
    else if(/[^a-zA-Z0-9\-\/]/.test(username))
    {
        alert("Form submission failed: Username must only contain letters and numbers");
        return false;
    }

//email validation
    let atposition=email.indexOf("@");
    if(email == "")
    {
        alert("Form submission failed: Please enter your email");
        return false;
    }
    else if (atposition<1)
    {  
        alert("Form submission failed: Email must contain @ character");  
        return false;  
    }  

//password validation
    if(password=="")
    {
        alert("Form submission failed: Please enter your password");
        return false;
    } 
    else if (password.length<8)
    {
        alert("Form submission failed: Password must be at least 8 characters");
        return false;
    }

// input fields are all valid
    console.log("Form submitted successfully");
    return true;

}

//Lab Part 2
const dogs = [
    "samoyed",
    "beagle",
    "poodle",
    "yorkie",
    "corgie",
    "collie",
    "labrador",
    "chihuahua",
    "husky",
    "bulldog"
];

/* let text = "";
for (let i = 0; i < dogs.length; i++) {
    text += "<ol>" + dogs[i] + "</ol>";
  } 

document.getElementById("dogs").innerHTML = text;*/

const searchInput = document.getElementById("search-input");
const productList = document.getElementById("dogs");

function updateProductList() {
    const query = searchInput.value;
    const matchingProducts = searchProducts(query);
    productList.innerHTML = "";
   
    for (let i = 0; i < matchingProducts.length; i++) {
      const product = matchingProducts[i];
      const listItem = document.createElement("li");
      listItem.textContent = product;
      productList.appendChild(listItem);
    }
}
  console.log(searchInput)
  searchInput.addEventListener("change", updateProductList);

  function searchProducts(query) {
    const matchingProducts = dogs.filter(function(product) {
      const productName = product.toLowerCase();
      const queryLowercase = query.toLowerCase();
      return productName.includes(queryLowercase);
    });
    return matchingProducts;
  }

  updateProductList();