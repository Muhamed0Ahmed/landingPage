/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// var ul element 
const navbarUl = document.getElementById("navbar__list");
// console.log(navbarUl);

// variable is called sections use to get all sections
const sections = document.querySelectorAll("section");
// console.log(sections)

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// let box = document.querySelectorAll("section").length;
// const createSection = () => {
//     box += 1;
//     let pgcontent = "<section id=\"section" + box + "\" data-nav=\"Section " + box + "\">\n      <div class=\"landing__container\">\n      <h2>Section " + box + "</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>\n      \n      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>\n   </div>\n  </section>";
//     document.querySelector("main").insertAdjacentHTML("beforeend", pgcontent);

    
//   };
// build the nav
function addLi(){

    for(section of sections){
        //declare two variable needs to make a li id and data-nav
        let tittleSection = section.getAttribute("data-nav");
        let dataNavSection = section.getAttribute("id");
        
        // create li 
        const liNav = document.createElement("li");
        
        //creat a 
        const aElement = document.createElement("a");

        //create textNode inside a elemnet
        // const aText = document.createTextNode(tittleSection);

        //append textNode for a
        aElement.innerHTML = tittleSection;

        liNav.appendChild(aElement);

        aElement.setAttribute("data-nav",dataNavSection);
        aElement.setAttribute("class","menu__link")

        // liNav.innerHTML = `<a data-nav="${dataNavSection}" class="menu__link ">${tittleSection}</a>`
        
        navbarUl.appendChild(liNav);

        
    }
}


// Add class 'active' to section when near top of viewport
 const activeSection = function(){
     sections.forEach(section =>{
         let idSection = section.getAttribute('id');
         let activeLink = navbarUl.querySelector(`[data-nav= ${idSection}`);
        //  console.log(activeLink);
         if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150){

            section.classList.add("your-active-class");
            activeLink.classList.add("active-link");
        
            }
            else{
                 section.classList.remove("your-active-class");
                 activeLink.classList.remove("active-link");
            }
        });
     
 }

// Scroll to anchor ID using scrollTO event
function scrollSmooth(e){
    // e.preventDefault();
    if(e.target.dataset.nav){
        var el= document.getElementById(`${e.target.dataset.nav}`).getBoundingClientRect().top;
        // console.log(el);
        document.getElementById(`${e.target.dataset.nav}`).scrollTo({top:el, behavior:"smooth"});
        window.scrollTo({ behavior:"smooth"});
        setTimeout(() => {
            location.hash = `${e.target.dataset.nav}`;
        },300)
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// createSection();
addLi();

// Scroll to section on link click
navbarUl.addEventListener("click",scrollSmooth)
// Set sections as active 
window.addEventListener("scroll",activeSection)




  // add behavior up button  to scroll to top
var spanUp = document.querySelector(".up");

// add class show when scroll y >= 1250px;
window.onscroll = function(){
    this.scrollY >= 850 ? spanUp.classList.add("show"):spanUp.classList.remove("show")
    
}

spanUp.onclick = function(){
    window.scrollTo({
        top:0,
        smooth:"behavior"
    });
}