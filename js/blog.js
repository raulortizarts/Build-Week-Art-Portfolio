const blogArticleDiv = document.querySelector(".article");
const asideDiv = document.querySelector(".aside");

let blogElems = "";

blogObj.forEach((object, index) => {
    const randomDate = function(){
        let formatedDate = new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
        formatedDate = formatedDate.getMonth() + "/" + formatedDate.getDay() +"/" + formatedDate.getFullYear() ;
        return formatedDate;
    
    }
    blogElems += `
        <div class='section '>
            <header>
              <img src = './../images/blogImages/drupal.png'><h3>${object.title}</h3>
            <h5>On <span>${randomDate()}</span> by ${object.author}</h5>
            </header>
            <div class="entry-content">
              <img src='${object.img}' alt='${object.title}'>
              <p>${object.description}</p>
            </div>
            
        </div> <hr>
    `;
}) ;
blogArticleDiv.innerHTML = blogElems; 
// Get the tutorial div
let svgTag = ''
const tutorial = document.querySelector(".tutorials")
tutorialsSvg.forEach(svg=>{
    svgTag += `
        <div class='some'> 
            <img src='${svg.img}'>
            <h4> ${svg.text}</h4>
        </div> 
        `;
});
tutorial.innerHTML += svgTag;

// creating Modal divs

let modalDiv = document.createElement("div");
let modalArticle = document.createElement('div');
modalDiv.classList.add("modal")
modalArticle.classList.add("modalArticle");

// Grab all div in the with classes of section
let currentArticleObj = []
const  allSections =  document.querySelectorAll('.section');
allSections.forEach((blog, i)=>{
    // adding event lister to each section
    blog.addEventListener('click', function(e){
       //Preventing the default click action on elements
        e.preventDefault();
        if(e.target.tagName === "IMG" || e.target.tagName === 'H3'){
            currentArticleObj = blogObj.filter( obj =>{
               if(e.target.alt === obj.title){
                   return currentArticleObj.push(obj)
                } else if (e.target.innerHTML === obj.title){
                    return currentArticleObj.push(obj)
                }
            });
        }
        console.log(currentArticleObj)
    })
});
