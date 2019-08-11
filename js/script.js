/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
const pageItems = document.querySelectorAll(".student-item");
const itemsPerPage = 10;

// Shows list items per page
function showPage(list, page){
  let start = (page * itemsPerPage) - itemsPerPage;
  let end = page * itemsPerPage;

  for(let i=0; i<list.length; i++){
    if(i >= start && i < end){
      list[i].style.display = "";
    }
    else{
      list[i].style.display = "none";
    }
  }

}

//adds pagination links at the bottom of the page
function appendPageLinks(list){
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

  //adds the class name "active" to the link thats active and removes active
  //from all the other links. Shows active link.
  pagination.addEventListener("click", function(e){
    let linkClicked = e.target;
    if(linkClicked.tagName === "A"){
      for(let i=0; i <links.length; i++){
        links[i].classList.remove("active");
      }
      linkClicked.className = "active";
      let currentPage = parseInt(linkClicked.innerText);
      showPage(list, currentPage);
    }
  }) 

}

//Creates search bar and search button and appends it to the top of the page.
function createSearchBar(){
  const pageHeader = document.querySelector(".page-header");
  pageHeader.style.textAlign = "right";
  const searchBar = document.createElement("input");
  searchBar.className = "searchBar";
  searchBar.placeholder = "Search for students...";
  searchBar.style.display = "inline-block";
  searchBar.style.padding = "8px 15px"
  searchBar.style.borderRadius = "5px";
  searchBar.style.border = "1px solid #eaeaea";
  searchBar.style.marginRight = "5px";
  const searchButton = document.createElement("button");
  searchButton.className = "searchButton";
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

showPage(pageItems, 1);
appendPageLinks(pageItems);
createSearchBar();


function search(e){
  const page = document.querySelector(".page");
  const searchBarValue = document.querySelector(".searchBar").value;
  const people =[];

/*list is filtered by student name for those that include the search value.*/
  for(let i =0; i<pageItems.length; i++){
    const name = pageItems[i].querySelector("h3").innerText.toLowerCase();
    if(name.indexOf(searchBarValue.toLowerCase())> -1){
      pageItems[i].style.display = "";
      people.push(pageItems[i]); 
    }
    else{
      pageItems[i].style.display = "none"; 
    }
  }
  //pagination links are removed and updated everytime the input value changes
  if(document.querySelector(".pagination")){
    page.removeChild(document.querySelector(".pagination"));
    showPage(people, 1);
    appendPageLinks(people);
  }
  if(people.length >0 && document.querySelector(".message")){
    document.querySelector(".student-list").removeChild(document.querySelector(".message"));
  }
  //the No Results message is displayed.
  if(!people.length > 0 && !document.querySelector(".message")){
    noResults();
  }
  
}

//creates and appends a no results message to the page.
function noResults(){
  const studentList = document.querySelector(".student-list");
  let message = document.createElement("li");
  message.className = "message";
  message.innerText = "No Results";
  message.style.textAlign = "center";
  studentList.appendChild(message);

}

document.querySelector(".searchButton").addEventListener("click", function(){
  search();
})
document.querySelector(".searchBar").addEventListener("keyup", function(e){
  search(e);
})











  
  


