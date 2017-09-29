const fs = require('fs-extra');


function tempExists(folder) {
  //  return fs.pathExists(folder);
    return new Promise((resolve, reject) => {
        fs.pathExists(folder)
            .then(exists => {
                console.log(`${folder} exists`, exists);
              return  resolve(exists);
            })
            .catch(() => {
                reject();
            })
    });
}
function deleteFolder(folder) {
    // if(exists){
    //     return
    // }
    return new Promise((resolve, reject) => {
        fs.remove(folder)
            .then((exists) => {
                //if(exists) {
                    console.log(`${folder} deleted`);
                    return resolve(exists);
              //  },
                // else{
                //     return createfolder(folder);
                // }
            })
            .catch(() => {
                reject();
            })
    });
}
function createfolder(folder) {
    return new Promise((resolve, reject) => {
        fs.ensureDir(folder)
            .then(exists => {
                console.log(`${folder} créé`);
                return resolve(exists);
            })
            .catch(() => {
                reject();
            })
    });
}
//function createJson



// fs.pathExists(folder)
//     .then(exists => {
//         if (exists) {
//             fs.remove(folder)
//                 .then(() => {
//                     fs.ensureDir(folder)
//                         .then(() => console.log(`le dossier ${folder} existait, il a été supprimé puis créé`))
//                 });
//         }
//         else {
//             fs.ensureDir(folder).then(() => console.log(`le dossier ${folder} n'existait pas, il a été créé`));
//         }
//     })
//     .catch(err => console.log(err.message));




module.exports = {
    tempExists,
    deleteFolder,
    createfolder
};
