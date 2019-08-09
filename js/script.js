/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
console.log("script js working");
const pageItems = document.querySelectorAll(".student-item");
const itemsPerPage = 10;

function displayPage(list, page){
  let start = (page * itemsPerPage) - itemsPerPage;
  let end = page * itemsPerPage;

  for(let i=0; i<list.length; i++){
    if(i >= start && i < end){
      list[i].style.display = "block";
    }
    else{
      list[i].style.display = "none";
    }
  }

}
// displayPage(listItems, 1);
function paginationLinks(list){
  let numberOfPages = Math.ceil(list.length/itemsPerPage);
  const page = document.querySelector(".page");
  const pagination = document.createElement("div");
  pagination.className ="pagination";
  const listOfPages = document.createElement("ul");
  for(let i = 1; i<=numberOfPages; i++){
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = i;
    if(i===1){
      a.className = "active";
    }
    li.appendChild(a);
    listOfPages.appendChild(li);
  }
  pagination.appendChild(listOfPages);
  page.appendChild(pagination);
  const links = document.querySelectorAll(".pagination a");
  pagination.addEventListener("click", function(e){
    let linkClicked = e.target;
    if(e.target.tagName === "A"){
      for(let i=0; i <links.length; i++){
        links[i].classList.remove("active");
      }
      linkClicked.className = "active";
      let currentPage = parseInt(linkClicked.innerText);
      console.log(currentPage);
      displayPage(pageItems, currentPage);
    }
  }) 

}

function createSearchBar(){
  const pageHeader = document.querySelector(".page-header");
  pageHeader.style.textAlign = "right";
  const searchBar = document.createElement("input");
  searchBar.placeholder = "Search for students...";
  searchBar.style.display = "inline-block";
  searchBar.style.padding = "8px 15px"
  searchBar.style.borderRadius = "5px";
  searchBar.style.border = "1px solid #eaeaea";
  searchBar.style.marginRight = "5px";
  const searchButton = document.createElement("button");
  searchButton.innerText = "Search";
  searchButton.style.dispaly = "inline-block";
  searchButton.style.fontSize = "14px";
  searchButton.style.backgroundColor = "#4ba6c3";
  searchButton.style.color = "white";
  searchButton.style.padding = "8px 15px";
  searchButton.style.borderRadius = "5px";
  searchButton.style.border = "1px solid #eaeaea";
  pageHeader.appendChild(searchBar)
  pageHeader.appendChild(searchButton);

}


displayPage(pageItems, 1);
paginationLinks(pageItems);
createSearchBar();







  
  


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.