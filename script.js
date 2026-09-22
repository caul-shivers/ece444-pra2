const projects = [
  {
    title: "Skin Lesion Classification",
    description:
      "Created a machine learning model in Python using PyTorch and NumPy to classify skin lesions as cancerous or benign from input images. The model outperformed a simple fully-connected neural network used as a baseline.",
    technologies: "Python, PyTorch, NumPy"
  },
  {
    title: "FPGA Guitar Tuner",
    description:
      "Developed a guitar tuner by programming an FPGA using NIOS II Assembly.",
    technologies: "FPGA, NIOS II Assembly"
  },
  {
    title: "FPGA Tetris",
    description:
      "Created a Verilog implementation of Tetris running on an FPGA.",
    technologies: "Verilog, FPGA"
  },
  {
    title: "GIS Mapper",
    description:
      "Created a GIS mapper for displaying and interacting with geographic data.",
    technologies: "GIS, Programming"
  }
];

const projectsContainer = document.getElementById("projects-container");
const loadMoreButton = document.getElementById("load-more-btn");

let displayedProjects = 2;

function displayProjects() {
  projectsContainer.innerHTML = "";

  for (let i = 0; i < displayedProjects; i++) {
    const project = projects[i];

    const projectHTML = `
      <div class="col s12 m6">
        <div class="card">
          <div class="card-content">
            <span class="card-title">${project.title}</span>
            <p>${project.description}</p>
            <br>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
          </div>
        </div>
      </div>
    `;

    projectsContainer.innerHTML += projectHTML;
  }

  if (displayedProjects >= projects.length) {
    loadMoreButton.style.display = "none";
  }
}

loadMoreButton.addEventListener("click", function () {
  displayedProjects = projects.length;
  displayProjects();
});

displayProjects();