
function selectShape(shape) {
  document.getElementById("shape").value = shape;
  document.querySelectorAll(".shape").forEach(el => el.classList.remove("selected"));
  document.getElementById("shape-" + shape).classList.add("selected");
  renderVisualization();
}

function renderVisualization() {
  const shape = document.getElementById("shape").value;
  const roof = document.getElementById("roof").value;
  let svgShape = '';
  let roofSvg = '';

  if (shape === "obdelnik") {
    svgShape = '<rect x="20" y="40" width="160" height="80" fill="#81c784" />';
  } else if (shape === "L") {
    svgShape = '<path d="M20 40 H100 V100 H180 V120 H20 Z" fill="#81c784"/>';
  } else if (shape === "T") {
    svgShape = '<path d="M20 40 H180 V60 H120 V120 H80 V60 H20 Z" fill="#81c784"/>';
  } else if (shape === "U") {
    svgShape = '<path d="M20 40 H60 V100 H140 V40 H180 V120 H20 Z" fill="#81c784"/>';
  }

  if (roof === "sedlova") {
    roofSvg = '<polygon points="20,40 100,10 180,40" fill="#4caf50" />';
  } else if (roof === "valbova") {
    roofSvg = '<polygon points="20,40 100,10 180,40 160,40 100,20 40,40" fill="#4caf50" />';
  } else if (roof === "pultova") {
    roofSvg = '<polygon points="20,40 180,30 180,40 20,50" fill="#4caf50" />';
  } else if (roof === "plochá") {
    roofSvg = '<rect x="20" y="30" width="160" height="8" fill="#4caf50" />';
  }

  document.getElementById("visualBox").innerHTML = `
    <svg width="200" height="140" xmlns="http://www.w3.org/2000/svg">
      ${roofSvg}
      ${svgShape}
    </svg>
    <p style="font-size: 0.9em; color: #555;">Tvar: ${shape.toUpperCase()}, Střecha: ${roof}</p>
  `;
}
