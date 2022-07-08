const updateCart=(state=0,action)=>{
    switch(action.type){
        case "UPDATE":
            return state+1
        default :
            return state
    }
}

export default updateCart