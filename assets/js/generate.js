function render(data) {
    document.getElementById("name").innerHTML = data.nome + " " + data.cognome;
    document.getElementById("born").innerHTML = "Nato a " + data.luogoNascita + " (" + data.provinciaNascita + "), il " + data.dataNascita;
    document.getElementById("address").innerHTML = "Residente in " + data.indirizzoResidenza;
    document.getElementById("phone").innerHTML = data.telefono;
    document.getElementById("mail").innerHTML = data.mail;

    document.getElementById("cv-el-container").innerHTML = renderEl_PE(data.esperienzeLavorative);
    document.getElementById("cv-pe-container").innerHTML = renderEl_PE(data.percorsoEducativo);
    document.getElementById("cv-cl-container").innerHTML = renderCl(data.competenzeLinguistiche);
    document.getElementById("cv-ci-container").innerHTML = renderCi(data.competenzeInformatiche);
}

function renderEl_PE(data) {
    let returnedHtml = "";
    const BASE_INDENT = "                    ";
    for (item of data) {
        returnedHtml += BASE_INDENT + "<div class=\"card shadow-sm cv-el-card\">";
        returnedHtml += BASE_INDENT + "    <div class=\"card-body pt-2 pb-2\">";
        returnedHtml += BASE_INDENT + "        <p class=\"el-descrizione\">" + item.descrizione + "</p>";
        returnedHtml += BASE_INDENT + "        <p class=\"el-azienda\">" + item.azienda + "</p>";
        returnedHtml += BASE_INDENT + "        <div class=\"row el-info\">";
        returnedHtml += BASE_INDENT + "            <div class=\"col\">";
        returnedHtml += BASE_INDENT + "                <i class=\"bi bi-calendar2-week inline\"></i>";
        returnedHtml += BASE_INDENT + "                <p class=\"inline\">" + item.periodo + "</p>";
        returnedHtml += BASE_INDENT + "                <i class=\"bi bi-geo-alt-fill inline space-before\"></i>";
        returnedHtml += BASE_INDENT + "                <p class=\"inline\">" + item.luogo + "</p>";
        returnedHtml += BASE_INDENT + "            </div>";
        returnedHtml += BASE_INDENT + "        </div>";
        returnedHtml += BASE_INDENT + "    </div>";
        returnedHtml += BASE_INDENT + "</div>";
    }

    return returnedHtml;
}

function renderCl(data) {
    let returnedHtml = "";
    const BASE_INDENT = "                    ";
    for (item of data) {
        let width;
        if (item.livello == "MADRELINGUA") {
            width = 100;
        } else if (item.livello == "LIVELLO AVANZATO") {
            width = 80;
        } else if (item.livello == "LIVELLO INTERMEDIO") {
            width = 60;
        } else if (item.livello == "LIVELLO BASE") {
            width = 40;
        }
        returnedHtml += BASE_INDENT + "<div class=\"card shadow-sm cv-el-card\">";
        returnedHtml += BASE_INDENT + "    <div class=\"card-body pt-2 pb-2\">";
        returnedHtml += BASE_INDENT + "        <p class=\"cl-lingua\">" + item.lingua + "</p>";
        returnedHtml += BASE_INDENT + "        <div class=\"progress\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"height: 1rem\">";
        returnedHtml += BASE_INDENT + "            <div class=\"progress-bar\" style=\"width: " + width + "%\">" + item.livello + "</div>";
        returnedHtml += BASE_INDENT + "        </div>";
        returnedHtml += BASE_INDENT + "    </div>";
        returnedHtml += BASE_INDENT + "</div>";
    }

    return returnedHtml;
}

function renderCi(data) {
    let returnedHtml = "";
    const BASE_INDENT = "                    ";

    // livello avanzato
    returnedHtml += BASE_INDENT + "<div class=\"card shadow-sm cv-el-card\">";
    returnedHtml += BASE_INDENT + "    <div class=\"card-body pt-2 pb-2\">";
    returnedHtml += BASE_INDENT + "        <p class=\"cl-lingua mb-1\">LIVELLO AVANZATO</p>";
    returnedHtml += BASE_INDENT + "        <div>";
    for (item of data) {
        if (item.livello == "LIVELLO AVANZATO") {
            returnedHtml += BASE_INDENT + "        <span class=\"badge rounded-pill\">" + item.competenza + "</span>";
        }
    }
    returnedHtml += BASE_INDENT + "        </div>";
    returnedHtml += BASE_INDENT + "    </div>";
    returnedHtml += BASE_INDENT + "</div>";

    // livello intermedio
    returnedHtml += BASE_INDENT + "<div class=\"card shadow-sm cv-el-card\">";
    returnedHtml += BASE_INDENT + "    <div class=\"card-body pt-2 pb-2\">";
    returnedHtml += BASE_INDENT + "        <p class=\"cl-lingua mb-1\">LIVELLO INTERMEDIO</p>";
    returnedHtml += BASE_INDENT + "        <div>";
    for (item of data) {
        if (item.livello == "LIVELLO INTERMEDIO") {
            returnedHtml += BASE_INDENT + "        <span class=\"badge rounded-pill\">" + item.competenza + "</span>";
        }
    }
    returnedHtml += BASE_INDENT + "        </div>";
    returnedHtml += BASE_INDENT + "    </div>";
    returnedHtml += BASE_INDENT + "</div>";

    // livello base
    returnedHtml += BASE_INDENT + "<div class=\"card shadow-sm cv-el-card\">";
    returnedHtml += BASE_INDENT + "    <div class=\"card-body pt-2 pb-2\">";
    returnedHtml += BASE_INDENT + "        <p class=\"cl-lingua mb-1\">LIVELLO BASE</p>";
    returnedHtml += BASE_INDENT + "        <div>";
    for (item of data) {
        if (item.livello == "LIVELLO BASE") {
            returnedHtml += BASE_INDENT + "        <span class=\"badge rounded-pill\">" + item.competenza + "</span>";
        }
    }
    returnedHtml += BASE_INDENT + "        </div>";
    returnedHtml += BASE_INDENT + "    </div>";
    returnedHtml += BASE_INDENT + "</div>";


    return returnedHtml;
}
