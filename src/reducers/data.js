const productdetails=(state=[],action)=>{
    // [...state,action.payload]
    function check(data){
        let final
        state.find((item)=>{
            if(item.title===data.title){
                final=item.count+=1
            }
        })
        return final?[...state]:[...state,data]

        
    }

    switch(action.type){
        case "DETAILS":
            return check(action.payload)
 
            
        default :
            return state
    }
}

export default productdetails
