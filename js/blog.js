const blogArticleDiv = document.querySelector(".article");
const asideDiv = document.querySelector(".aside");

let blogElems = "";

blogObj.forEach((object, index) => {
    blogElems += `
        <div class='section'>
            <header>
              <h3>Title: ${object.title}</h3>
              <h5>Author: ${object.author}</h5>
            </header>
            <div class="entry-content">
              <img src='${object.img}' alt='${object.title}'>
              <p>Description: ${object.description}</p>
            </div>
            
        </div> <hr>
    `
}) 

blogArticleDiv.innerHTML = blogElems; 
