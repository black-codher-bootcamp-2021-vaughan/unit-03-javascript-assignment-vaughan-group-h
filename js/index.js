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
dates.map((item) => {

  // HEADING
  const timelineItemDiv = document.createElement('div')
  timelineItemDiv.className = 'timeline-item'
  timelineItem.appendChild(timelineItemDiv)

  const timelineItemH2 = document.createElement('H2')
  timelineItemH2.className = 'timeline-item-title'
  timelineItemH2.textContent = item.title
  timelineItemDiv.appendChild(timelineItemH2)

  const timelineItemDate = document.createElement('span')
  timelimeItemDate.className = 'timeline-item-date'
  timelineItemDate.textContent = item.date
  timelineItemDiv.appendChild(timelimeItemDate)

  const timelineItemSummary = document.createElement('text')
  timelineItemSummary.className = 'timeline-item-summary'
  timelineItemSummary.textContent = item.summary
  timelineItemDiv.appendChild(timelimeItemSummary)

  const timelineItemMoreInfo = document.createElement('button')
  timelineItemMoreInfo.className = 'timeline-item-more-info'
  timelineItemMoreInfo.textContent = 'more info'
  timelineItemDiv.appendChild(timelineItemMoreInfo)
})

