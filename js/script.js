// navigate to section on nav item click
const sections = {
  section_one_btn: "section_one",
  section_two_btn: "section_two",
  section_four_btn: "section_four",
  section_five_btn: "section_five",
};

for (key in sections) {
  const $sectionBtn = document.querySelector(`#${key}`);
  const $section = document.querySelector(`#${sections[key]}`);
  $sectionBtn.addEventListener("click", () => {
    window.scrollTo({
      top: $section.offsetTop - 10,
      behavior: "smooth",
    });
  });
}

// services section
const services = {
  service_one_btn: "service_one_text",
  service_two_btn: "service_two_text",
  service_three_btn: "service_three_text",
};

for (key in services) {
  const $serviceBtn = document.querySelector(`#${key}`);
  const $arrowBtn = $serviceBtn.children[0];
  const $serviceText = document.querySelector(`#${services[key]}`);

  $serviceBtn.addEventListener("click", () => {
    if ($arrowBtn.classList.contains("fa-angle-down")) {
      $arrowBtn.classList.remove("fa-angle-down");
      $arrowBtn.classList.add("fa-angle-up");
    } else {
      $arrowBtn.classList.remove("fa-angle-up");
      $arrowBtn.classList.add("fa-angle-down");
    }

    $serviceText.style.display === "block"
      ? ($serviceText.style.display = "none")
      : ($serviceText.style.display = "block");
  });
}

// quotes section navigation
const quotes = [
  {
    text: '"I worked with Mina on a web development project, and his attention to detail impressed me. I highly recommend his services."',
    author: "- Alice Johnson",
  },
  {
    text: '"Not only Mina completed the web project on time but also introduced creative solutions that enhanced the overall user experience."',
    author: "- Adam Jackson",
  },
  {
    text: '"Working with Mina was a pleasure. His expertise in web development made a huge difference in the success of our project."',
    author: "- Elizabeth Carlson",
  },
  {
    text: '"I was pleased with the work Mina did on our website. He understood our the requirements and brought fresh ideas to the table."',
    author: "- Samson Daniels",
  },
];

const $quoteBtnLeft = document.querySelector("#quote_button_left");
const $quoteBtnRight = document.querySelector("#quote_button_right");
const $quoteText = document.querySelector("#quote_text");
const $quoteAuthor = document.querySelector("#quote_author");

let index = 0;
$quoteText.textContent = quotes[index].text;
$quoteAuthor.textContent = quotes[index].author;

$quoteBtnLeft.addEventListener("click", () => {
  index = (index + 1) % quotes.length;
  $quoteText.textContent = quotes[index].text;
  $quoteAuthor.textContent = quotes[index].author;
});

$quoteBtnRight.addEventListener("click", () => {
  index = (index - 1 + quotes.length) % quotes.length;
  $quoteText.textContent = quotes[index].text;
  $quoteAuthor.textContent = quotes[index].author;
});

// scroll up button
const $scrollUpBtn = document.querySelector("#scroll_up_btn");
const $body = document.querySelector("body");

$scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// light and dark theme
const $themeBtn = document.querySelector("#theme_btn");
$themeBtn.addEventListener("click", () => {
  console.log("clicked");
  if ($themeBtn.firstChild.classList.contains("fa-moon")) {
    $themeBtn.firstChild.classList.remove("fa-moon");
    $themeBtn.firstChild.classList.add("fa-sun");
    $body.classList.add("dark_mode");
  } else {
    $themeBtn.firstChild.classList.remove("fa-sun");
    $themeBtn.firstChild.classList.add("fa-moon");
    $body.classList.remove("dark_mode");
  }
});
