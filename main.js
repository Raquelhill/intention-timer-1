// var allCategoryButtons = document.getElementbyId(activity-buttons-row);
var exerciseButton = document.getElementById('exercise-button');
var meditateButton = document.getElementById('meditate-button');
var studyButton = document.getElementById('study-button');
var meditateImage = document.getElementById('meditate-icon');
var exerciseImage = document.getElementById('exercise-icon');
var studyImage = document.getElementById('study-icon');
var charFilter = document.querySelector('.number-input');
var startActivityButton = document.getElementById('start-activity-button');
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
var accomplishInput = document.getElementById('accomplish-input');
var accomplishWarning = document.getElementById('accomplish-input-warning');
var minutesWarning = document.getElementById('minutes-input-warning');
var secondsWarning = document.getElementById('seconds-input-warning');
// allCategoryButtons.addEventListener('click', )
studyButton.addEventListener('click', studyButtonClicked);
meditateButton.addEventListener('click', meditateButtonClicked);
exerciseButton.addEventListener('click', exerciseButtonClicked);
charFilter.addEventListener('keydown', preventCharE);
startActivityButton.addEventListener('click', startActivity);

var savedActivities = [];

function studyButtonClicked(e) {
  e.preventDefault();
  studyButtonToggle();
}
function meditateButtonClicked(e) {
  e.preventDefault();
  meditateButtonToggle();
}
function exerciseButtonClicked(e) {
  e.preventDefault();
  exerciseButtonToggle();
}
function exerciseButtonToggle() {
  if (studyButton.classList.length > 1) {
    studyButtonToggle();
  }
  if (meditateButton.classList.length > 1) {
    meditateButtonToggle();
  }
  exerciseButton.classList.toggle('exercise-button-clicked');
  if (exerciseButton.classList.contains('exercise-button-clicked')){
    exerciseImage.src = "./assets/exercise-active.svg";
  } else {
    exerciseImage.src = "./assets/exercise.svg";
  }
}
function studyButtonToggle() {
  if (meditateButton.classList.length > 1) {
    meditateButtonToggle();
  }
  if (exerciseButton.classList.length > 1) {
    exerciseButtonToggle();
  }
  studyButton.classList.toggle('study-button-clicked');
  if (studyButton.classList.contains('study-button-clicked')){
      studyImage.src = "./assets/study-active.svg";
  } else {
      studyImage.src = "./assets/study.svg";
  }
}
function meditateButtonToggle() {
  if (studyButton.classList.length > 1) {
    studyButtonToggle();
  }
  if (exerciseButton.classList.length > 1) {
    exerciseButtonToggle();
  }
  meditateButton.classList.toggle('meditate-button-clicked');
  if (meditateButton.classList.contains('meditate-button-clicked')){
      meditateImage.src = "./assets/meditate-active.svg";
  } else {
      meditateImage.src = "./assets/meditate.svg";
  }
}
function preventCharE(e) {
  var invalidChar = ['e', 'E'];
  if (invalidChar.includes(e.key)) {
    e.preventDefault();
  }
}
function startActivity(e) {
  e.preventDefault();
  checkInput();
  var categorySelected = selectCategory();
  var activity = new Activity (categorySelected, accomplishInput, minutes, seconds);
  savedActivities.push(activity);
}
function selectCategory() {
  if (studyButton.classList.length > 1) {
    return 'study';
  } else if (meditateButton.classList.length > 1) {
    return 'meditate';
  } else if (exerciseButton.classList.length > 1) {
    return 'exercise';
  }
}
function checkInput() {
  if (!accomplishInput.value) {
    show(accomplishWarning);
  } else {
    hide(accomplishWarning);
  }
  if (!minutesInput.value) {
    show(minutesWarning);
  } else {
    hide(minutesWarning);
  }
  if (!secondsInput.value) {
    show(secondsWarning);
  } else {
    hide(secondsWarning);
  }
}
function hide(element) {
    element.classList.add('hidden');
    }
function show(element) {
    element.classList.remove('hidden');
    }