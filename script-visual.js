
function updateArea() {
  document.getElementById("areaValue").textContent = document.getElementById("area").value;
}
function generateSummary() {
  const layout = document.getElementById("layout").value;
  const area = parseInt(document.getElementById("area").value);
  const electro = document.getElementById("electro").value;

  let price = area * (electro === "chytra" ? 28000 : 23000);

  document.getElementById("summaryBox").innerHTML = `
    <p>Dispozice: <strong>${layout}</strong></p>
    <p>Plocha: <strong>${area} m²</strong></p>
    <p>Elektro: <strong>${electro}</strong></p>
    <p><strong>Cena: ${price.toLocaleString()} Kč</strong></p>
  `;

  renderVisualization();
}

function renderVisualization() {
  const shape = document.getElementById("shape")?.value || "obdelnik";
  let svg = '';
  if (shape === "obdelnik") {
    svg = '<rect x="10" y="10" width="180" height="100" fill="#4caf50" />';
  } else if (shape === "L") {
    svg = '<path d="M10 10 H80 V90 H160 V110 H10 Z" fill="#4caf50"/>';
  } else if (shape === "T") {
    svg = '<path d="M10 10 H180 V40 H110 V110 H80 V40 H10 Z" fill="#4caf50"/>';
  } else if (shape === "U") {
    svg = '<path d="M10 10 H40 V90 H150 V10 H180 V110 H10 Z" fill="#4caf50"/>';
  }

  document.getElementById("visualBox").innerHTML = `
    <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">${svg}</svg>
    <p style="font-size: 0.9em; color: #555;">Tvar: ${shape.toUpperCase()}</p>
  `;
}

function selectShape(shape) {
  document.getElementById("shape").value = shape;
  document.querySelectorAll(".shape").forEach(el => el.classList.remove("selected"));
  document.getElementById("shape-" + shape).classList.add("selected");
  renderVisualization();
}
