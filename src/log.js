const header = document.createElement('h3'),
      greeting = document.createElement('p'),
      element = document.createDocumentFragment();

header.innerText = "Webpack - konfiguracja";
greeting.innerText = "Hello world!";

element.appendChild(header);
element.appendChild(greeting);

module.exports = element;
