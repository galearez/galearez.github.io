const slideElements = document.querySelectorAll('.slider');

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

slideElements.forEach((elem) => {
  observer.observe(elem);
});

const consoleElement_1 = document.querySelector('.console-1');
const consoleElement_2 = document.querySelector('.console-2');
const consoleElement_3 = document.querySelector('.console-3');
const consoleElement_4 = document.querySelector('.console-4');
const consoleElement_5 = document.querySelector('.console-5');
const consoleElement_6 = document.querySelector('.console-6');
const consoleElement_7 = document.querySelector('.console-7');
const consoleElement_8 = document.querySelector('.console-8');
const consoleElement_9 = document.querySelector('.console-9');
const consoleElement_10 = document.querySelector('.console-10');
const consoleElement_11 = document.querySelector('.console-11');
const consoleElement_12 = document.querySelector('.console-12');
const consoleElement_13 = document.querySelector('.console-13');
const consoleElement_14 = document.querySelector('.console-14');
const consoleElement_15 = document.querySelector('.console-15');
const consoleElement_16 = document.querySelector('.console-16');
const consoleElement_17 = document.querySelector('.console-17');

function shortTimeout(query, timeout) {
  setTimeout(() => {
    query.classList.remove('prueba');
  }, timeout);
}

function longTimeout(query) {
  setTimeout(() => {
    query.classList.add('prueba');
  }, 800);
}

const body = document.querySelector('body');

window.addEventListener('load', () => {
  shortTimeout(consoleElement_1, 300);
  longTimeout(consoleElement_2);
  shortTimeout(consoleElement_3, 1200);
  shortTimeout(consoleElement_4, 1500);
  shortTimeout(consoleElement_5, 1800);
  shortTimeout(consoleElement_6, 1900);
  shortTimeout(consoleElement_7, 2000);
  shortTimeout(consoleElement_8, 2100);
  shortTimeout(consoleElement_9, 2400);
  shortTimeout(consoleElement_10, 2900);
  shortTimeout(consoleElement_11, 3200);
  shortTimeout(consoleElement_12, 3300);
  shortTimeout(consoleElement_13, 3800);
  shortTimeout(consoleElement_14, 3900);
  shortTimeout(consoleElement_15, 4000);
  shortTimeout(consoleElement_16, 4300);
  shortTimeout(consoleElement_17, 5000);
});
