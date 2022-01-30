import { dates } from "../js/data.js";

const timeline = document.querySelector(".timeline");


const heading = document.createElement('h1')
heading.classList.add('timeline-heading')
heading.textContent = 'Maymes Bakery Timeline'
timeline.appendChild(heading)

const containerTimeline = document.createElement('div')
containerTimeline.className = 'timeline-container'
timeline.appendChild(containerTimeline)
console.log(containerTimeline)

// LOOPING 
dates.map((item, i) => {

  const timelineItemDiv = document.createElement('div')
  const position = i%2 ? "right": "left"
  timelineItemDiv.className = 'timeline-item-div ' + position
  containerTimeline.appendChild(timelineItemDiv)

  const timelineItemH2 = document.createElement('h2')
  timelineItemH2.className = 'timeline-item-title'
  timelineItemH2.textContent = item.title
  timelineItemDiv.appendChild(timelineItemH2);

  const timelineItemDate = document.createElement('span')
  timelineItemDate.className = 'timeline-item-date'
  timelineItemDate.textContent = item.date
  timelineItemDiv.appendChild(timelineItemDate)

  const timelineItemSummary = document.createElement('p')
  timelineItemSummary.className = 'timeline-item-summary'
  timelineItemSummary.textContent = item.summary
  timelineItemDiv.appendChild(timelineItemSummary)

  const timelineItemMoreInfo = document.createElement('button')
  timelineItemMoreInfo.className = 'timeline-item-more-info'
  timelineItemMoreInfo.textContent = 'Click Here'
  timelineItemMoreInfo.addEventListener("click", () => openModal(item));
  timelineItemDiv.appendChild(timelineItemMoreInfo)
 
})

// THE MODAL
function openModal(item) {
  // console.log('Bakery')
    const modal = document.createElement('div')
  modal.id = 'modal-container' ;
 document.body.append(modal) ;
const modalContent = document.createElement('div')
modalContent.className = 'modal-Content' 
modal.append(modalContent)

 // CREATE CLOSE BUTTON
 const button = document.createElement('button')
 
 button.id = 'modal-close-button' ;
 button.textContent = 'X'
 button.onclick = function() {
     modal.remove() 
     console.log(modal)
 }
modalContent.append(button)
window.onclick = function(e) {

  if (e.target == modal) {
    modal.remove()
  }
}

//DATE
  const date = document.createElement('h3') ;
     date.id = 'modal-date' ;
  date.textContent = item.date ;
  console.log(date)
  modal.append(date) ;
//timeline.appendChild(modal)

const title = document.createElement('h3') ;
title.id = 'modal-title' ;
title.textContent = item.title ;
console.log(title)
modal.append(title) ;
//timeline.append(modal) ;

 const image = document.createElement('img') ; 
image.id = 'modal-image' ;
image.setAttribute("src", item.image);
console.log(image)
 modal.append(image) ;

const fullDescription = document.createElement('p') ;
fullDescription.id = 'modal-full-description' ;
fullDescription.textContent = item.fullDescription ;
console.log(fullDescription)
modal.append(fullDescription) ;
//timeline.appendChild(modal) ;

const timeline = document.createElement('t');
timeline.id = 'timeline';
timeline.setAttribute("timeline-item");
console.log(timeline)
}

