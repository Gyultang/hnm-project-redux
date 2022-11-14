function login(id,password){
    return (dispatch, getState)=>{
        console.log("로그인 성공?")
        dispatch({type:"LOGIN_SUCCESS", payload:{id,password}})
    };
}

export const authenticateAction = {login};