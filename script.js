function toggleSection(header) {
  const section = header.parentElement;
  section.classList.toggle("active");
  const content = header.nextElementSibling;
  const isOpen = content.style.display === "block";
  content.style.display = isOpen ? "none" : "block";
}