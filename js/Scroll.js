// Step 1: Get all the section elements
const sections = document.getElementsByTagName("section");
console.log("All sections:", sections);

// Step 2: Set the threshold or active point on the screen
const threshold = 260;
console.log("Threshold:", threshold);

// Step 3: Handle the scroll event and perform an action
document.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section
  Array.from(sections).forEach((section) => {
    // Get the top position of the section relative to the viewport
    const rect = section.getBoundingClientRect();
    const top = rect.top + scrollPosition;
    if (scrollPosition + threshold > top) {
      section.classList.add("fade-in");
      section.classList.remove("fade-out");
    } else {
      section.classList.add("fade-out");
      section.classList.remove("fade-in");
    }
  });
});
