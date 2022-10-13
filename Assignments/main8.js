const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Amanda Bynes saw the whole thing, but was not surprised — :insertx: can lift 300 pounds, and it was a hot day.";
const insertX = ["Bella Thorne", "Big Daddy", "Danny Trejo"];
const insertY = ["Trejo's Coffee and Donuts", "The Amanda Show Set", "the middle of the ocean"];
const insertZ = ["ate all the donuts", "put on a lobster costume", "clogged the toilet"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx:", xItem)
    newStory = newStory.replace(":inserty:", yItem)
    newStory = newStory.replace(":insertz:", zItem)
    newStory = newStory.replace(":insertx:", xItem)

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Amanda Bynes", customName.value)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94-32)*(5/9)) + " celsius";
    newStory = newStory.replace("94 fahrenheit", temperature)
    newStory = newStory.replace("300 pounds", weight)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}