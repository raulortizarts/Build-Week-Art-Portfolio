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

// creating elements for the modal
let modalDiv = document.querySelector(".modal");
let modalArticle = document.createElement('div');
const close = document.createElement("p");
let articleTitle = document.createElement("h1");
let articleBlog = document.createElement("p");
let articleImg = new Image();
modalDiv.style.display = 'none';
modalArticle.classList.add("modalArticle");
close.classList.add("close")
close.innerHTML = '&times;';


// Grab all div in the with classes of section
let currentArticleObj = {}
const  allSections =  document.querySelectorAll('.section');
allSections.forEach((blog, i)=>{
    // adding event lister to each section
    blog.addEventListener('click', function(e){
       //Preventing the default click action on elements
        e.preventDefault();
        if(e.target.tagName === "IMG" || e.target.tagName === 'H3'){
            currentArticleObj = blogObj.filter( obj =>{
               if(e.target.alt === obj.title){
                   return currentArticleObj = obj;
                } else if (e.target.innerHTML === obj.title){
                    return currentArticleObj = obj;
                }
            });
           currentArticleObj.forEach(e=>{
               articleTitle.innerText = e.title;
               articleBlog.innerText = e.blogPost;
               articleImg.src = e.img 
               modalArticle.append(close, articleTitle, articleImg, articleBlog);
               modalDiv.appendChild(modalArticle);
           });
           modalDiv.style.display = "block"
        close.addEventListener('click', function(e){
            modalDiv.style.display = 'none'
        })  
        window.addEventListener("click", function(e){
            e.preventDefault();
            if (e.target.className === "modal"){
                modalDiv.style.display = 'none'
            }
        })
        }

    })
});

