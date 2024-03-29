//Slide-in on scroll
const slideElementsToShow = document.querySelectorAll('.slider');

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, options);

slideElementsToShow.forEach((elem) => {
  observer.observe(elem);
});

//Console animation
const elementsToShow = document.querySelectorAll('.add-element');
const elementToHide = document.querySelector('.remove-element');

function hideELement() {
  setTimeout(() => {
    elementToHide.classList.add('hide');
  }, 800);
}

let timeoutArray = [];
function timeoutAdd(id, query, time) {
  timeoutArray[id] = setTimeout(() => {
    query.classList.remove('hide');
  }, time);
}

function clearTimeoutArray(arr) {
  for (timeout in arr) {
    clearTimeout(timeout);
  }
}

function handleAutoSetTimeout(arr) {
  timeoutRemove = hideELement();

  arr.forEach(([id, element, time]) => {
    timeoutAdd(id, element, time);
  });
}

let msArray = [];
let idQueryTime = [];

msArray = [
  300, 1200, 1500, 1800, 1900, 2000, 2100, 2400, 2900, 3200, 3300, 3800, 3900,
  4000, 4300, 5000,
];

for (let i = 0, n = elementsToShow.length; i < n; i++) {
  idQueryTime.push([i, elementsToShow[i], msArray[i]]);
}

window.addEventListener('load', handleAutoSetTimeout(idQueryTime));
window.removeEventListener('load', handleAutoSetTimeout(idQueryTime));

clearTimeout(timeoutRemove);
clearTimeoutArray(timeoutArray);
