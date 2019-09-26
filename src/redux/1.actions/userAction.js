import Axios from 'axios';
import {urlApi} from '../../3.helpers/database';
import swal from 'sweetalert';



export const onLogin = (userInput) =>{

    return (dispatch) =>{

        dispatch({
            type : 'IS_LOADING'
        })

        Axios.get(urlApi + 'users', {
            params : {
                username : userInput.nama,
                password : userInput.pass
            }
        })
        .then((res)=>{
            if(res.data.length > 0){
                dispatch ({
                    type : 'LOGIN_BERHASIL',
                    payload : {
                        username : res.data[0].username,
                        role : res.data[0].role,
                        id : res.data[0].id
                    }
                })
            }else{
                swal('akun tidak dikenal', 'Silahkan coba lagi', 'warning')
            }
         
        })
        .catch((err)=>{
            console.log(err)
            swal('error')
        })
    }

}

export const onRegister = (userObject) =>{

    return(dispatch) =>{
        dispatch({
            type : "IS_LOADING"
        })

    Axios.get(urlApi + 'users', {
        params : {
            username : userObject.username,
            role     : 'user'
        }
    })
    .then(res=>{


        if(res.data.length > 0){
        // dispatch({
        //     type : 'USERNAME_TAKEN',
        //     hasil : 'Username sudah ada bos'
        // })
            swal('Usernama sudah ada', 'Silahkan plih yang lain', 'info')
        }else if(res.data.length === 0){
            userObject.role = 'user'
            Axios.post(urlApi + 'users', userObject)
            .then(res=>{
                dispatch({
                    type : 'LOGIN_BERHASIL',
                    payload : {
                        id      : res.data.id,
                        username: res.data.username,
                        role    : res.data.role 
                    }
                })
                swal('Registrasi berhasil', 'data sudah terverifikasi', 'success')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })

    }
}

export const keepLogin = (cookieData) =>{
    return(dispatch)=>{
       Axios.get(urlApi + 'users', {params:{username : cookieData}})
       .then(res=>{
        dispatch({
            type : 'KEEP_LOGIN',
            payload : {
                username : res.data[0].username,
                role : res.data[0].role,
                id : res.data[0].id
            }
        })
       })
       .catch(err=>{
           console.log(err)
       })
    }
}

export const resetUser = () =>{
    return(dispatch)=>{
        dispatch({
            type : 'RESET_USER'
        })
    }
}