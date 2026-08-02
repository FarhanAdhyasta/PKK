const tempat = document.getElementById("tempat");
const tanggal = document.getElementById("tanggal");
const jam = document.getElementById("jam");
const foto = document.getElementById("foto");

const vTempat = document.getElementById("vTempat");
const vTanggal = document.getElementById("vTanggal");
const vJam = document.getElementById("vJam");
const previewFoto = document.getElementById("previewFoto");

function updatePreview() {
    vTempat.textContent = tempat.value || "-";
    vTanggal.textContent = tanggal.value || "-";
    vJam.textContent = jam.value || "-";
}

tempat.addEventListener("input", updatePreview);
tanggal.addEventListener("input", updatePreview);
jam.addEventListener("input", updatePreview);

foto.addEventListener("change", function(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(ev){

        previewFoto.src = ev.target.result;
        previewFoto.style.display = "block";

    }

    reader.readAsDataURL(file);

});

updatePreview();
