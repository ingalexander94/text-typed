const $textTech = document.querySelector(".typed-text");
const $profession = document.querySelector(".profession");
const $cursor1 = document.querySelector(".cursor1");
const $cursor2 = document.querySelector(".cursor2");

const myTech = [
  {
    name: "Javascript",
    color: "gold",
  },
  {
    name: "React JS",
    color: "mediumslateblue",
  },
  {
    name: "Angular 2+",
    color: "red",
  },
  {
    name: "Node JS",
    color: "limegreen",
  },
  {
    name: "React Native",
    color: "lightskyblue",
  },
];

const myProfession = [
  {
    name: "web junior",
    color: "magenta",
  },
  {
    name: "móvil junior",
    color: "orange",
  },
];

const createAnimation = (array, cursor, text) => {
  let chartIndex = 0,
    i = 0;
  const printWord = () => {
    if (chartIndex <= array[i].name.length) {
      cursor.classList.add("typed");
      text.style.color = array[i].color;
      text.textContent += array[i].name.charAt(chartIndex);
      chartIndex++;
      setTimeout(() => printWord(array, i, chartIndex), 100);
    } else {
      cursor.classList.remove("typed");
      setTimeout(() => eraseWord(array, i, chartIndex), 2000);
    }
  };

  const eraseWord = () => {
    if (chartIndex >= 0) {
      cursor.classList.add("typed");
      text.textContent = array[i].name.substring(0, chartIndex);
      chartIndex--;
      setTimeout(() => eraseWord(array, i, chartIndex), 100);
    } else {
      i = i < array.length - 1 ? i + 1 : 0;
      cursor.classList.remove("typed");
      setTimeout(() => printWord(array, i, 0), 2000);
    }
  };
  return () => printWord();
};

const techs = createAnimation(myTech, $cursor1, $textTech);
const prof = createAnimation(myProfession, $cursor2, $profession);

document.addEventListener("DOMContentLoaded", () => {
  techs();
  prof();
});
