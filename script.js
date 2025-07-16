
let currentStep = 1;

function nextStep() {
  document.getElementById('step' + currentStep).style.display = 'none';
  currentStep++;
  document.getElementById('step' + currentStep).style.display = 'block';
}

function prevStep() {
  document.getElementById('step' + currentStep).style.display = 'none';
  currentStep--;
  document.getElementById('step' + currentStep).style.display = 'block';
}

function updateAreaDisplay() {
  const value = document.getElementById("area").value;
  document.getElementById("areaValue").textContent = value;
}

function getRoomCount(layout) {
  const [rooms, type] = layout.split("+");
  return parseInt(rooms) + (type === "kk" ? 1 : 0);
}

function renderSVGRooms() {
  const layout = document.getElementById("layout").value;
  const rooms = getRoomCount(layout);
  const cols = Math.ceil(Math.sqrt(rooms));
  const rows = Math.ceil(rooms / cols);
  const cellWidth = 180 / cols;
  const cellHeight = 100 / rows;

  let svg = "";
  let roomIndex = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (roomIndex >= rooms) break;
      const x = 10 + c * cellWidth;
      const y = 20 + r * cellHeight;
      const roomName = roomIndex === 0 ? "Obývák + KK" : "Pokoj " + roomIndex;
      svg += `<rect x="\${x}" y="\${y}" width="\${cellWidth}" height="\${cellHeight}" fill="#e0f7fa" stroke="#00695c" stroke-width="1"/>`;
      svg += `<text x="\${x + 4}" y="\${y + 15}" font-size="10" fill="#004d40">\${roomName}</text>`;
      roomIndex++;
    }
  }

  document.getElementById("visualBox").innerHTML = `<svg width="200" height="140">\${svg}</svg>`;
}

function generateSummary() {
  const plocha = parseInt(document.getElementById("area").value);
  const vybaveni = [];
  if (document.getElementById("kuchyne").checked) vybaveni.push("kuchyň");
  if (document.getElementById("vana").checked) vybaveni.push("vana");
  if (document.getElementById("sprcha").checked) vybaveni.push("sprcha");
  if (document.getElementById("skrine").checked) vybaveni.push("vestavné skříně");

  const deska = document.getElementById("zaklad").value;
  const dispozice = document.getElementById("layout").value;

  let basePrice = 25000;
  let price = plocha * basePrice;
  if (vybaveni.includes("kuchyň")) price += 100000;
  if (vybaveni.includes("vana")) price += 30000;
  if (vybaveni.includes("sprcha")) price += 20000;
  if (vybaveni.includes("vestavné skříně")) price += 40000;

  let deskaCena = deska === "beton" ? 0 : deska === "vruty" ? -50000 : 20000;
  price += deskaCena;

  const summary = `
    <p><strong>Dispozice:</strong> \${dispozice}</p>
    <p><strong>Plocha:</strong> \${plocha} m²</p>
    <p><strong>Vybavení:</strong> \${vybaveni.join(", ") || "Bez výběru"}</p>
    <p><strong>Základová deska:</strong> \${deska}</p>
    <p><strong>Celková cena:</strong> \${price.toLocaleString()} Kč</p>
  `;
  document.getElementById("summaryBox").innerHTML = summary;
  renderSVGRooms();
}

function submitForm() {
  alert("Odesláno! (propojení EmailJS + Google Sheets připraveno)");
}

function exportPDF() {
  window.jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF();
  doc.text("Rekapitulace domu Tvoje Hnízdo", 10, 10);
  doc.fromHTML(document.getElementById("summaryBox").innerHTML, 10, 20);
  doc.save("rekapitulace.pdf");
}
