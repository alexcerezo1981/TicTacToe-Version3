   
   
function IntialMenu(key){   
    
    if (key==="1"){
        console.log ("Human V Human") 
        return "1" 
    }else if (key==="2"){
        console.log ("Human (X) V PC (O)") 
        return "2"
    }else if (key==="3"){
        console.log ("PC (X) V Human (X)")
        return "3"
    }else if (key==="4"){
        process.exit()
    }else{
        console.log ("Please press one of the avialable options")
    }
        

}


module.exports.IntialMenu=IntialMenu;