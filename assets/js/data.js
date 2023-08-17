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
                periodo: "03/2022 - oggi",
                descrizione: "ANALISTA PROGRAMMATORE a tempo indeterminato",
                azienda: "Imola Informatica S.P.A.",
                luogo: "Imola (BO)"
            },
            {
                periodo: "07/2021 - 03/2022",
                descrizione: "CO.CO.CO.",
                azienda: "Imola Informatica S.P.A.",
                luogo: "Imola (BO)"
            },
            {
                periodo: "08/2020 - 09/2020",
                descrizione: "TIROCINIO CURRICOLARE",
                azienda: "Imola Informatica S.P.A.",
                luogo: "Imola (BO)"
            },
            {
                periodo: "05/2019 - oggi",
                descrizione: "GRAFICO FREELANCE",
                azienda: "Eventi Catering",
                luogo: "Russi (RA)"
            },
            {
                periodo: "08/2015 - 05/2022",
                descrizione: "GIOCATORE SEMIPROFESSIONISTA di pallacanestro (Serie B LNP)",
                azienda: "Lega Nazionale Pallacanestro",
                luogo: "Italia"
            },
            {
                periodo: "05/2018 - 09/2018",
                descrizione: "RESPONSABILE BAR ESTERNO",
                azienda: "Amarissimo",
                luogo: "Lido di Savio (RA)"
            }
        ],
        percorsoEducativo: [
            {
                periodo: "03/2022",
                descrizione: "Laurea Triennale in Informatica per il Management con LODE",
                azienda: "Alma Mater Studiorum",
                luogo: "Bologna (BO)"
            },
            {
                periodo: "07/2015",
                descrizione: "Laurea Triennale in Ingegneria Energetica",
                azienda: "Alma Mater Studiorum",
                luogo: "Bologna (BO)"
            },
            {
                periodo: "07/2011",
                descrizione: "Diploma di istruzione liceale",
                azienda: "Liceo Scientifico N.Copernico",
                luogo: "Bologna (BO)"
            }
        ],
        competenzeLinguistiche: [
            {
                lingua: "Italiano",
                livello: "MADRELINGUA"
            },
            {
                lingua: "Inglese",
                livello: "LIVELLO INTERMEDIO"
            }
        ],
        competenzeInformatiche: [
            {
                livello: "LIVELLO BASE",
                competenza: "Windows"
            },
            {
                livello: "LIVELLO BASE",
                competenza: "MacOS"
            },
            {
                livello: "LIVELLO BASE",
                competenza: "Linux"
            },
            {
                livello: "LIVELLO BASE",
                competenza: "MongoDB"
            },
            {
                livello: "LIVELLO INTERMEDIO",
                competenza: "React"
            },
            {
                livello: "LIVELLO INTERMEDIO",
                competenza: "Angular"
            },
            {
                livello: "LIVELLO INTERMEDIO",
                competenza: "Pacchetto Microsoft Office"
            },
            {
                livello: "LIVELLO INTERMEDIO",
                competenza: "Pipeline CI/CD (Jenkins)"
            },
            {
                livello: "LIVELLO INTERMEDIO",
                competenza: "Git"
            },
            {
                livello: "LIVELLO INTERMEDIO",
                competenza: "Gitflow"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Principi della programmazione OOP"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Design Patterns"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Java"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Javascript"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "HTML"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "css"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "SpringBoot"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "MySQL"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Oracle"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Postgres"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Inkscape"
            },
            {
                livello: "LIVELLO AVANZATO",
                competenza: "Gimp"
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