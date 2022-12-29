const authReducer = (state={data:null},action) =>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
            return {...state,data: action?.data}

            
    
        default:
            break;
    }
}
// in order to provide action auth file is used
export default authReducer
