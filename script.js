
document.querySelectorAll('.shape').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.shape').forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
    });
});

function updateVisualization() {
    const shape = document.querySelector('.shape.selected')?.dataset.shape || "obdelnik";
    const roof = document.getElementById("roofType").value;

    const viz = document.getElementById("visualization");
    viz.innerHTML = `<svg width="150" height="150">
        ${drawShape(shape)}
    </svg><p>${roof.charAt(0).toUpperCase() + roof.slice(1)} střecha</p>`;
}

function drawShape(shape) {
    switch (shape) {
        case "l":
            return '<rect x="0" y="0" width="100" height="50" fill="#b2dfdb"/><rect x="0" y="50" width="50" height="50" fill="#b2dfdb"/>';
        case "t":
            return '<rect x="25" y="0" width="100" height="50" fill="#b2dfdb"/><rect x="65" y="50" width="20" height="50" fill="#b2dfdb"/>';
        case "u":
            return '<rect x="0" y="0" width="100" height="25" fill="#b2dfdb"/><rect x="0" y="25" width="25" height="50" fill="#b2dfdb"/><rect x="75" y="25" width="25" height="50" fill="#b2dfdb"/>';
        default:
            return '<rect x="10" y="10" width="100" height="80" fill="#b2dfdb"/>';
    }
}
