
      window.addEventListener("load", function () {
        // Initialize card animations
        document.querySelectorAll(".guideline-card").forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100);
        });

        // Tab switching functionality
        const tabs = document.querySelectorAll(".nav-tab");
        const sections = document.querySelectorAll(".section");

        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            // Remove active class from all tabs and sections
            tabs.forEach((t) => t.classList.remove("active"));
            sections.forEach((s) => s.classList.remove("active"));

            // Add active class to clicked tab and corresponding section
            tab.classList.add("active");
            const sectionId = tab.getAttribute("data-section");
            document.getElementById(sectionId).classList.add("active");

            // Reinitialize card animations for newly visible section
            document
              .querySelectorAll(`#${sectionId} .guideline-card`)
              .forEach((card, index) => {
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                setTimeout(() => {
                  card.style.opacity = "1";
                  card.style.transform = "translateY(0)";
                }, index * 100);
              });
          });
        });

        // Search functionality
        const searchBox = document.getElementById("search-box");
        const guidelineCards = document.querySelectorAll(".guideline-card");

        searchBox.addEventListener("input", () => {
          const searchTerm = searchBox.value.toLowerCase();

          guidelineCards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });
