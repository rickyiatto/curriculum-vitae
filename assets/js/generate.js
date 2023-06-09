function render(data) {
    document.getElementById("name").innerHTML = data.nome + " " + data.cognome;
    document.getElementById("born").innerHTML = "Nato a " + data.luogoNascita + " (" + data.provinciaNascita + "), il " + data.dataNascita;
    document.getElementById("address").innerHTML = "Residente in " + data.indirizzoResidenza;
    document.getElementById("phone").innerHTML = data.telefono;
    document.getElementById("mail").innerHTML = data.mail;
}