const blogArticleDiv = document.querySelector(".article");
const asideDiv = document.querySelector(".aside");

let blogElems = "";

blogObj.forEach((object, index) => {
    const randomDate = function(){
        let formatedDate = new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
        formatedDate = formatedDate.getMonth() + "/" + formatedDate.getDay() +"/" + formatedDate.getFullYear() 
        return formatedDate
    
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
    `
}) 

blogArticleDiv.innerHTML = blogElems; 
