const fs = require('fs')

;(async ()=>{
    let json = await (await fetch("https://cdn.ituring.ir/research/api/weather")).json()
    
    
    fs.writeFileSync("./w.json", JSON.stringify(json,null,2))
    console.log("finished")
    //console.log(Object.keys(json))
    //console.log(JSON.stringify(json,null,2))
})()