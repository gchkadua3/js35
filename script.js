const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const navP = document.querySelectorAll('.left-nav a')
const languageP = document.querySelector('.language p')
const textH = document.querySelector('.texts h1')
const textP = document.querySelector('.texts p')
const bodyChange = 'bodyChange';
const textWhite = 'text-white';


// Toggle the theme when the user clicks the switch
themeToggle.addEventListener('change', () => {
  if (body.classList.contains(bodyChange) || languageP.classList.contains(textWhite) || textH.classList.contains(textWhite) || textP.classList.contains(textWhite)) {
    body.classList.remove(bodyChange);
    languageP.classList.remove(textWhite);
    textH.classList.remove(textWhite);
    textP.classList.remove(textWhite);
  } else {
    body.classList.add(bodyChange);
    languageP.classList.add(textWhite);
    textH.classList.add(textWhite);
    textP.classList.add(textWhite);
  }

  navP.forEach(element => {
    if (element.classList.contains(textWhite)) {
      element.classList.remove(textWhite);
    } else {
      element.classList.add(textWhite);
    }
  });
});

console.log(twoText);

