const fs = require('fs-extra');
const service = require('./Service/FsExtraService');

const folder = './temp';
service.tempExists(folder)
    .then(() => {
        return service.deleteFolder(folder)
    })
    .then(() => {
        return service.createfolder(folder)
    })
    .then(() => {
        fs.writeJson('./temp/pub.json', [
            {
                "name": "Arawak",
                "owner": {
                    "firstName": "Nicolas",
                    "lastName": "Hodicq",
                    "mail": "nhodicq@bewizyu.com"
                },
                "openDays": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "openHours": {
                    "start": 22,
                    "end": 1
                },
                "beers": [
                    {
                        "type": "Blonde",
                        "name": "Triple Karmeliet"
                    },
                    {
                        "type": "Brune",
                        "name": "Guiness"
                    },
                    {
                        "type": "Blonde",
                        "name": "cuvee des Trolls"
                    },
                    {
                        "type": "Blonde",
                        "name": "Fee Torchette"
                    },
                    {
                        "type": "Blanche",
                        "name": "Edelweiss"
                    }
                ]
            },
            {
                "name": "La Fin Du Monde",
                "owner": {
                    "firstName": "Jables",
                    "lastName": "Altaron",
                    "mail": "jables@live.fr"
                },
                "openDays": [
                    "Monday",
                    "Tuesday",
                    "Thursday",
                    "Friday"
                ],
                "openHours": {
                    "start": 19,
                    "end": 21
                },
                "beers": [
                    {
                        "type": "Ambrée",
                        "name": "Farrow"
                    },
                    {
                        "type": "Blonde",
                        "name": "cuvee des Trolls"
                    },
                    {
                        "type": "Blonde",
                        "name": "Fee Torchette"
                    },
                    {
                        "type": "Blanche",
                        "name": "Hoegarden"
                    }
                ]
            },
            {
                "name": "Gastro Pub",
                "owner": {
                    "firstName": "Angelo",
                    "lastName": "Basso",
                    "mail": "angelo67170@gmail.com"
                },
                "openDays": [
                    "Monday",
                    "Sunday",
                    "Saturday",
                    "Friday"
                ],
                "openHours": {
                    "start": 20,
                    "end": 23
                },
                "beers": [
                    {
                        "type": "Ambrée",
                        "name": "Farrow"
                    },
                    {
                        "type": "Blonde",
                        "name": "cuvee des Trolls"
                    },
                    {
                        "type": "Ambrée",
                        "name": "Bêtes des Vosges"
                    },
                    {
                        "type": "Blonde",
                        "name": "Picon"
                    }
                ]
            }
        ]);
        console.log('écriture réussie');
    })
    .catch(err => console.log(err.message));
