
const INITIAL_STATE = {

            id : 0,
            username : '',
            role : '',
            loading : false,
            msg     : ''
            
}

export default (state = INITIAL_STATE, action)=>{

        switch(action.type){
            case 'TESTING' :
                return {...state, username : 'Andi'}
            case 'LOGIN_BERHASIL' :
                return  {...INITIAL_STATE, username : action.payload.username, role : action.payload.role, id : action.payload.id}
            case 'IS_LOADING' :
                return {...INITIAL_STATE, loading : true}
            case 'USERNAME_TAKEN' :
                return{...INITIAL_STATE, msg : action.hasil}
            default :
                return state
        }
}