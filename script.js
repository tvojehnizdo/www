
function updateArea() {
  document.getElementById("areaValue").textContent = document.getElementById("area").value;
}
function toggleTerrace() {
  document.getElementById("terraceSettings").style.display =
    document.getElementById("terraceToggle").checked ? "block" : "none";
}
function updateTerraceSize() {
  document.getElementById("terraceSizeValue").textContent = document.getElementById("terraceSize").value;
}
function selectShape(shape) {
  document.getElementById("shape").value = shape;
  document.querySelectorAll(".shape").forEach(el => el.classList.remove("selected"));
  document.getElementById("shape-" + shape).classList.add("selected");
}
function generateSummary() {
  const layout = document.getElementById("layout").value;
  const area = parseInt(document.getElementById("area").value);
  const electro = document.getElementById("electro").value;
  const wc = document.getElementById("wcCount").value;
  const bathroom = document.getElementById("bathroom").value;
  const terrace = document.getElementById("terraceToggle").checked;
  const terraceSize = terrace ? parseInt(document.getElementById("terraceSize").value) : 0;
  const terraceRoof = document.getElementById("terraceRoof").checked;

  let price = area * (electro === "chytra" ? 28000 : 23000);
  if (terrace) price += terraceSize * 2500;

  document.getElementById("summaryBox").innerHTML = `
    <p>Dispozice: <strong>${layout}</strong></p>
    <p>Plocha: <strong>${area} m²</strong></p>
    <p>Elektro: <strong>${electro}</strong></p>
    <p>Počet WC: <strong>${wc}</strong></p>
    <p>Koupelna: <strong>${bathroom}</strong></p>
    ${terrace ? `<p>Terasa: ${terraceSize} m² ${terraceRoof ? '(zastřešená)' : ''}</p>` : ''}
    <p><strong>Cena: ${price.toLocaleString()} Kč</strong></p>
  `;
}
function exportPDF() {
  const { jsPDF } = window.jspdf;
  html2canvas(document.getElementById("summaryBox")).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.text("Rekapitulace domu", 10, 10);
    pdf.addImage(imgData, 'PNG', 10, 20, 180, 0);
    pdf.save("rekapitulace.pdf");
  });
}
function sendEmail() {
  emailjs.init("user_xxxxxxxxxxxxxxxxx"); // <- vlož vlastní public key
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    region: document.getElementById("region").value,
    date: document.getElementById("date").value,
    summary: document.getElementById("summaryBox").innerText
  };
  emailjs.send("default_service", "template_xxx", params)
    .then(() => alert("Odesláno!"), err => alert("Chyba: " + JSON.stringify(err)));
}
