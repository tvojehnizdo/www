
function updateArea() {
  document.getElementById("areaValue").textContent = document.getElementById("area").value;
}
function updateTerasa() {
  document.getElementById("terasaValue").textContent = document.getElementById("terasaArea").value;
}
function toggleTerasa() {
  const show = document.getElementById("terasa").checked;
  document.getElementById("terasaOptions").style.display = show ? "block" : "none";
}
function selectShape(shape) {
  document.getElementById("shape").value = shape;
  document.querySelectorAll(".shape").forEach(el => el.classList.remove("selected"));
  document.getElementById("shape-" + shape).classList.add("selected");
  renderVisualization();
}
function renderVisualization() {
  const shape = document.getElementById("shape").value;
  const roof = document.getElementById("roof").value;
  let svg = '';
  let roofSvg = '';

  if (shape === "obdelnik") svg = '<rect x="20" y="50" width="160" height="80" fill="#81c784"/>';
  else if (shape === "L") svg = '<path d="M20 50 H100 V110 H180 V130 H20 Z" fill="#81c784"/>';
  else if (shape === "T") svg = '<path d="M20 50 H180 V70 H120 V130 H80 V70 H20 Z" fill="#81c784"/>';
  else if (shape === "U") svg = '<path d="M20 50 H60 V110 H140 V50 H180 V130 H20 Z" fill="#81c784"/>';

  if (roof === "sedlova") roofSvg = '<polygon points="20,50 100,10 180,50" fill="#4caf50"/>';
  else if (roof === "valbova") roofSvg = '<polygon points="20,50 100,10 180,50 160,50 100,20 40,50" fill="#4caf50"/>';
  else if (roof === "pultova") roofSvg = '<polygon points="20,50 180,40 180,50 20,60" fill="#4caf50"/>';
  else if (roof === "plochá") roofSvg = '<rect x="20" y="40" width="160" height="8" fill="#4caf50"/>';

  document.getElementById("visualBox").innerHTML = `
    <svg width="200" height="140">${roofSvg}${svg}</svg>
  `;
}

function generateSummary() {
  const area = parseInt(document.getElementById("area").value);
  const terasa = document.getElementById("terasa").checked;
  const terasaArea = terasa ? parseInt(document.getElementById("terasaArea").value) : 0;
  const zastreseni = terasa && document.getElementById("zastreseni").checked;
  const dokonceni = document.getElementById("dokonceni").value;
  const electro = document.getElementById("electro").value;

  let basePrice = dokonceni === "hruba" ? 16500 : dokonceni === "dokonceni" ? 24500 : 30500;
  let price = area * basePrice;
  if (terasa) price += terasaArea * 2500;
  if (electro === "chytra") price += 60000;
  else if (electro === "plne_chytra") price += 165000;

  document.getElementById("summaryBox").innerHTML = `
    <p><strong>Cena domu: ${price.toLocaleString()} Kč</strong></p>
    <p>Dispozice: ${document.getElementById("layout").value}, ${area} m²</p>
    ${terasa ? `<p>Terasa: ${terasaArea} m² ${zastreseni ? "(zastřešená)" : ""}</p>` : ""}
    <p>Střecha: ${document.getElementById("roof").value}</p>
    <p>Elektro: ${electro}</p>
    <p>Dokončení: ${dokonceni}</p>
  `;
}

function sendForm() {
  alert("Odesláno! (propojení s EmailJS připraveno)");
}
