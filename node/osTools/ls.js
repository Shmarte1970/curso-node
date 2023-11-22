const fs=require('node:fs')

fs.readdir('.', (error, files) =>{
    
    try{
        files.forEach(file =>{
            console.log(file)
        })
    }catch{
        console.log('Se ha producido un error ', error)
    }


})