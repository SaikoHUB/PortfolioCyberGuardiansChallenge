// Navigation toggle for mobile
function toggleMenu() {
  const navMenu = document.getElementById("navMenu")
  navMenu.classList.toggle("active")
}

// Section navigation
const sections = [
  "accueil",
  "association", 
  "missions",
  "apprentissages",
  "environnement",
  "defis",
  "bilan",
  "situation-actuelle",
]

let currentSectionIndex = 0

function showSection(index) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  // Show current section
  const currentSection = document.getElementById(sections[index])
  if (currentSection) {
    currentSection.classList.add("active")
  }

  // Update navigation
  updateNavigation(index)
  updateProgressBar(index)
}

function updateNavigation(index) {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link, i) => {
    link.classList.remove("active")
    if (i === index) {
      link.classList.add("active")
    }
  })
}

function updateProgressBar(index) {
  const progress = ((index + 1) / sections.length) * 100
  const progressFill = document.getElementById("progressFill")
  if (progressFill) {
    progressFill.style.width = progress + "%"
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  const navMenu = document.getElementById("navMenu")

  // Handle navigation clicks
  navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || ""
      const isHash = href.startsWith("#")
      if (isHash) {
        e.preventDefault()
        currentSectionIndex = index
        showSection(currentSectionIndex)
        navMenu.classList.remove("active")
      }
    })
  })

  // Handle internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const href = link.getAttribute("href")
      const sectionId = href.replace("#", "")
      const sectionIndex = sections.indexOf(sectionId)
      if (sectionIndex !== -1) {
        currentSectionIndex = sectionIndex
        showSection(currentSectionIndex)
      }
    })
  })

  // Initialize first section
  showSection(0)
})