function render(data) {
    document.getElementById("name").innerHTML = data.nome + " " + data.cognome;
    document.getElementById("born").innerHTML = "Nato a " + data.luogoNascita + " (" + data.provinciaNascita + "), il " + data.dataNascita;
    document.getElementById("address").innerHTML = "Residente in " + data.indirizzoResidenza;
    document.getElementById("phone").innerHTML = data.telefono;
    document.getElementById("mail").innerHTML = data.mail;

    document.getElementById("cv-el-container").innerHTML = renderEl(data.esperienzeLavorative);
}

function renderEl(data) {
    let returnedHtml = "";
    const BASE_INDENT = "                    ";
    for (el of data) {
        returnedHtml += BASE_INDENT + "<div class=\"card shadow-sm cv-el-card\">";
        returnedHtml += BASE_INDENT + "    <div class=\"card-body pt-2 pb-2\">";
        returnedHtml += BASE_INDENT + "        <p class=\"el-descrizione\">" + el.descrizione + "</p>";
        returnedHtml += BASE_INDENT + "        <p class=\"el-azienda\">" + el.azienda + "</p>";
        returnedHtml += BASE_INDENT + "        <div class=\"row el-info\">";
        returnedHtml += BASE_INDENT + "            <div class=\"col\">";
        returnedHtml += BASE_INDENT + "                <i class=\"bi bi-calendar2-week inline\"></i>";
        returnedHtml += BASE_INDENT + "                <p class=\"inline\">" + el.periodo + "</p>";
        returnedHtml += BASE_INDENT + "                <i class=\"bi bi-geo-alt-fill inline space-before\"></i>";
        returnedHtml += BASE_INDENT + "                <p class=\"inline\">" + el.luogo + "</p>";
        returnedHtml += BASE_INDENT + "            </div>";
        returnedHtml += BASE_INDENT + "        </div>";
        returnedHtml += BASE_INDENT + "    </div>";
        returnedHtml += BASE_INDENT + "</div>";
    }

    return returnedHtml;
}
