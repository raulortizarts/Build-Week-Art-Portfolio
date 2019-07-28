let footer = document.querySelector("footer");
footer.innerHTML = `
    <div class='menu'>
        <h4>Menu</h4>
        <ul>
            <li><a href='index.html'>Home</a></li>
            <li><a href='about'>About Us</a></li>
            <li><a href='blog.html'>Blog</a></li>
            <li><a href='contact.html'>Contact Us </a></li>
        <ul>
    </div>
    <div class='services'>
        <h4>Services</h4>
        <ul>
            <li><a href='#'>Photography Basics</a></li>
            <li><a href='#'>Beginner Photography</a></li>
            <li><a href='#'>Wild Life Photography</a></li>
            <li><a href='#'>Advance Tutorial</a></li>
        <ul>
    </div>
    <div class = 'us'>
        <div class='newsletter'>
            <h3>News Letter</h3>
            <form>
                <input type='email' placeholder='Your Email' required> <input type='submit' value='Subscribe'>
            </form>
        </div>

        <div class='follow-us'>
            <h3>Follow Us </h3>
            <img src='./../images/32/twitter.png'>
            <img src='./../images/32/facebook.png'>
            <img src='./../images/32/instagram.png'>
            <img src='./../images/32/reddit.png'>
        <div>
    </div>
    <h5>&copy; 2019 Artify</h5>
`

