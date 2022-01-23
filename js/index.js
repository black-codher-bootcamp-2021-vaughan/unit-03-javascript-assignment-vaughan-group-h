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
heading.textContent = 'Maymes Bakery Timeline'
timeline.appendChild(heading)

// looping 
dates.map((item) => {

  // HEADING
  const timelineItem = document.createElement('div')
  timelineItem.innerText = 'timeline-item'
  timelineItem.appendChild(timeline)
  timeline.appendChild
  const timelineItemDiv = document.createElement('div')
  document.body.prepend(timelineItem);
  timelineItem.appendChild(timelineItemDiv)


  const timelineItemH2 = document.createElement('H2')
  timelineItemH2.className = 'timeline-item-title'
  document.body.prepend(timelineItemH2);
  timelineItemDiv.appendChild(timelineItemH2)

  const timelineItemDate = document.createElement('span')
  timelineItemDate.className = 'timeline-item-date'
  timelineItemDate.textContent = item.date
  timelineItemDiv.appendChild(timelineItemDate)

  const timelineItemSummary = document.createElement('text')
  timelineItemSummary.className = 'timeline-item-summary'
  timelineItemSummary.textContent = item.summary
  timelineItemDiv.appendChild(timelineItemSummary)

  const timelineItemMoreInfo = document.createElement('button')
  timelineItemMoreInfo.className = 'timeline-item-more-info'
  timelineItemMoreInfo.textContent = 'more info'
  timelineItemMoreInfo.addEventListener("click", () => openModal(item));
  timelineItemDiv.appendChild(timelineItemMoreInfo)

})

// The Modal

function openModal(item) {
  console.log('Hi')
    const modal = document.createElement('div')
  modal.id = 'modal-container' ;
 

  const date = document.createElement('h3') ;
     date.id = 'modal-date' ;
  date.textContent = item.date ;
   console.log(date)
  modal.appendChild(date) ;
timeline.appendChild(modal)
}

