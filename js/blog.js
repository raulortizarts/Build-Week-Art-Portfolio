const blogArticleDiv = document.querySelector(".article");
const asideDiv = document.querySelector(".aside");

let blogElems = "";

blogObj.forEach((object, index) => {
    blogElems += `
        <div>
            <h3>Title: ${object.title}</h3>
            <h5>AUthor: ${object.author}</h5>
            <p>Description: ${object.description}</p>
        </div> <hr>
    `
}) 

blogArticleDiv.innerHTML = blogElems; 
