const oM = [
    {
      id: 0,
      name: "Cloud Controls & Logging Simulation",
      description: "Configured and audited AWS IAM policies across 5 accounts, establishing baseline security controls. Identified 3 compliance gaps and remediated misalignments.",
      image: "images/projects/theiqic.jpeg",
      tags: ["aws", "python", "security"],
      liveview: null,
      alt: "Cloud Controls and Logging Simulation",
    },
    {
      id: 1,
      name: "AI Threat Intelligence Platform",
      description: "Architected threat pipeline; ML detected phishing, 50+ adversarial infrastructure elements.",
      image: "https://placehold.co/334x300/0d1117/FF6B6B?text=AI+Threat+Intel",
      tags: ["python", "ml", "neo4j"],
      liveview: null,
      alt: "AI Threat Intelligence Platform",
    },
    {
      id: 2,
      name: "Real-Time Network IPS",
      description: "Developed Python-based Intrusion Prevention System monitoring live traffic across 20+ network segments. Configured 30+ detection rules, blocking 50+ suspicious connections daily.",
      image: "images/projects/studybuddy.jpeg",
      tags: ["python", "security", "network"],
      liveview: null,
      alt: "Real-Time Network Intrusion Prevention System",
    },
    {
      id: 3,
      name: "Federated Learning Privacy Framework",
      description: "Engineered property inference attacks against 5 Federated Learning models in smart home environments. Evaluated privacy defenses against 12 threat vectors.",
      image: "images/projects/opentalk.jpeg",
      tags: ["python", "ml", "tensorflow"],
      liveview: null,
      alt: "Federated Learning Privacy Framework",
    },
    {
      id: 4,
      name: "Cyber-Attack Classification (ML)",
      description: "Constructed ML pipeline with Random Forest and Naive Bayes achieving 94% classification accuracy on 50,000+ network traffic samples across 15 threat categories.",
      image: "images/projects/opentalk.jpeg",
      tags: ["python", "ml", "security"],
      liveview: "https://github.com/ItsDarker/Cyber-Attack-Classification-Using-Supervised-ML",
      alt: "Cyber-Attack Classification Using Supervised ML",
    },
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  