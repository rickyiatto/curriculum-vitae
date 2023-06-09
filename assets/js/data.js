function getData() {
    let data = {
        nome: "Riccardo",
        cognome: "Iattoni",
        luogoNascita: "Bologna",
        provinciaNascita: "BO",
        dataNascita: "9 giugno 1992",
        indirizzoResidenza: "Via Campidori 14, 48018 Faenza (RA)",
        telefono: "+39 339 7612313",
        mail: "riccardo.iattoni92@gmail.com",
        esperienzeLavorative: [
            {
                periodo: "03/2022-oggi",
                descrizione: "ANALISTA PROGRAMMATORE a tempo indeterminato presso IMOLA INFORMATICA SPA",
                luogo: "IMOLA"
            },
            {
                periodo: "07/2021-03/2022",
                descrizione: "CO.CO.CO. presso IMOLA INFORMATICA SPA",
                luogo: "IMOLA"
            },
            {
                periodo: "08/2020-09/2020",
                descrizione: "TIROCINIO CURRICOLARE presso IMOLA INFORMATICA SPA",
                luogo: "IMOLA"
            },
            {
                periodo: "05/2019-oggi",
                descrizione: "GRAFICO FREELANCE presso EVENTI CATERING",
                luogo: "RUSSI"
            },
            {
                periodo: "08/2015-05/2022",
                descrizione: "GIOCATORE SEMIPROFESSIONISTA di pallacanestro (Serie B LNP)"
            },
            {
                periodo: "Stagione estiva 2018",
                descrizione: "RESPONSABILE BAR ESTERNO presso AMARISSIMO",
                luogo: "LIDO di SAVIO"
            }
        ],
        percorsoEducativo: [
            {
                periodo: "03/2022",
                descrizione: "ALMA MATER STUDIORUM - Laurea Triennale in Informatica per il Management con LODE",
                luogo: "BOLOGNA"
            },
            {
                periodo: "07/2015",
                descrizione: "ALMA MATER STUDIORUM - Laurea Triennale in Ingegneria Energetica",
                luogo: "BOLOGNA"
            },
            {
                periodo: "07/2021",
                descrizione: "LICEO SCIENTIFICO N.COPERNICO - Diploma di istruzione liceale",
                luogo: "BOLOGNA"
            }
        ],
        competenzeLinguistiche: [
            {
                lingua: "MADRELINGUA",
                livello: "Italiano"
            },
            {
                lingua: "LIVELLO INTERMEDIO",
                livello: "Inglese"
            }
        ],
        conoscenzeInformatiche: [
            {
                livello: "BASE",
                conoscenza: "Principali sistemi operativi (Windows, MacOS, Linux)"
            },
            {
                livello: "BASE",
                conoscenza: "Framework frontend (React, Angular)"
            },
            {
                livello: "INTERMEDIO",
                conoscenza: "Pacchetto Microsoft Office"
            },
            {
                livello: "INTERMEDIO",
                conoscenza: "Pipeline CI/CD (Jenkins)"
            },
            {
                livello: "INTERMEDIO",
                conoscenza: "Sistemi di versionamento del codice (git)"
            },
            {
                livello: "AVANZATA",
                conoscenza: "Software per la grafica 2D (Inkscape, Gimp, AutoCAD)"
            },
            {
                livello: "AVANZATA",
                conoscenza: "Principi della programmazione OOP e relativi Design Patterns"
            },
            {
                livello: "AVANZATA",
                conoscenza: "Linguaggi di programmazione (Java, Javascript, HTML, css)"
            },
            {
                livello: "AVANZATA",
                conoscenza: "Framework backend (SpringBoot)"
            },
            {
                livello: "AVANZATA",
                conoscenza: "Database SQL (MySQL, Oracle, Postgres)"
            }        
        ],

        altreInfo: [
            {
                periodo: "2010-oggi",
                informazione: "Patente di guida cat.B, automunito"
            }
        ]
    }

    return data;
}