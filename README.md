# Fino Franklin — 3D Portfolio

> An interactive 3D portfolio website built with Three.js, GSAP, and WebGL, showcasing projects, skills, and experience in cybersecurity engineering and full-stack development.

**Live:** [fino-portfolio.netlify.app](https://fino-portfolio.netlify.app) &nbsp;|&nbsp; **GitHub:** [github.com/ItsDarker](https://github.com/ItsDarker)

---

## About

Security-focused engineer pursuing an MS in Cybersecurity at Illinois Institute of Technology, Chicago. This portfolio features a fully interactive 3D environment with animated scenes, a project carousel, skills panel, and contact form — all rendered in the browser using WebGL.

---

## Tech Stack

| Layer | Technology |
|---|---|
| 3D Rendering | Three.js, WebGL, GLSL Shaders |
| Animations | GSAP (GreenSock) |
| Build | Vite |
| Styling | CSS3, custom animations |
| Fonts | Poppins, Electrolize |
| Icons | Font Awesome 5 |
| Audio | Web Audio API |

---

## Featured Projects

| Project | Tech | Repo |
|---|---|---|
| Build-Track | TypeScript, Next.js, PostgreSQL, Docker, Prisma | [↗](https://github.com/ItsDarker/Build-Track) |
| AI Threat Intelligence Platform | Python, Flask, Neo4j, Docker, MongoDB | [↗](https://github.com/ItsDarker/ai-threat-intelligence-platform) |
| Real-Time Network IPS | Python, Scapy, PyQt5 | [↗](https://github.com/ItsDarker/real-time-network-ips) |
| Federated Learning Privacy Framework | Python, PyTorch, NumPy | [↗](https://github.com/ItsDarker/fl_smarthome_privacy) |
| Cyber-Attack Classification (ML) | Python, scikit-learn, Django, Jupyter | [↗](https://github.com/ItsDarker/Cyber-Attack-Classification-Using-Supervised-ML) |
| Visitor Logger (Pentest Framework) | Python, Flask | [↗](https://github.com/ItsDarker/Visitor-Logger-App) |
| Home Automation System | Java, Python, IoT | [↗](https://github.com/ItsDarker/Home-Automation-System) |
| Bug Bounty Recon Tool | Python | [↗](https://github.com/ItsDarker/Bug-bounty-recon) |

---

## Running Locally

**Requirements:** Node.js 14+

```bash
# Clone the repo
git clone https://github.com/ItsDarker/portfolio-3d.git
cd portfolio-3d

# Serve with npx (no install needed)
npx serve . --listen 3000
```

Open [http://localhost:3000](http://localhost:3000)

> The project is pre-built — no build step required. All assets are already bundled.

---

## Project Structure

```
portfolio-3d/
├── index.html          # Main HTML — layout, SVG panels, social links
├── index.js            # Bundled app — Three.js scene, UI, project/skills data
├── index.css           # Global styles
├── addcards.js         # Project card data (reference file)
├── Resume.pdf          # Fino Franklin resume
├── models/             # 3D GLTF models
├── textures/           # WebGL textures
├── images/             # Project screenshots
├── icons/              # Pixel art icons used in about section
├── sounds/             # UI audio files
└── head/               # Favicons, manifests, PWA assets
```

---

## Customising Content

All portfolio content lives in `index.js`. Search for these constants:

| Constant | Purpose |
|---|---|
| `oM` | Projects array — name, description, tags, github/liveview URLs |
| `cM` | Skills array — name and proficiency width |
| `aM` | Tag definitions — label HTML with colors |

To edit the about section, landing headline, or social links, update `index.html` directly.

---

## Connect

| Platform | Link |
|---|---|
| Email | [finofranklin@gmail.com](mailto:finofranklin@gmail.com) |
| LinkedIn | [linkedin.com/in/5fino-franklin](https://www.linkedin.com/in/5fino-franklin) |
| GitHub | [github.com/ItsDarker](https://github.com/ItsDarker) |
| Portfolio | [fino-portfolio.netlify.app](https://fino-portfolio.netlify.app) |

---

## Certifications

- CNSP — Certified Network Security Practitioner
- CSEH+ — Certified Ethical Hacker
- CompTIA Security+
- Google Cybersecurity Certificate

---

## License

This project is for personal portfolio use. The 3D framework and scene were originally built on an open-source Three.js portfolio template and have been fully customised for Fino Franklin.
