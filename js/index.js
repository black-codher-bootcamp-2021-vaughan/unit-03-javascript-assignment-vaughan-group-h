import { dates } from "../js/data.js";

const timeline = document.querySelector(".timeline");

// 1st step

// Create the html element
// give it a class name
// Add content - optional
// Append to a parent element

// HEADING
const heading = document.createElement('h1')
heading.classList.add('timeline-heading')
heading.textContent = 'Welcome to my timeline'
timeline.appendChild(heading)

// looping 
dates.map((item)=>{

  
})



// <div class="timeline-item">
 // <h2 class="timeline-item-title"></h2>
//  <span>2600 BC</span>
// <h2>Yeast</h2>
// <p>The Egyptians are the first recorded civilization to use yeast</p>
//<button> Click for MORE</button>
//</div>