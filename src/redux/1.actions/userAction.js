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
                swal('akun tidak dikenal', 'error')
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
            password : userObject.password
        }
    })
    .then(res=>{
        if(res.data.length > 0){
        dispatch({
            type : 'USERNAME_TAKEN',
            hasil : 'Username sudah ada bos'
        })
        }else{
            userObject.role = 'role'
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