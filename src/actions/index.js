export  const update=()=>{
    return{
        type:"UPDATE"
    }
}


export  const details=(content)=>{
    return{
        type:"DETAILS",
        payload:content
    }
}