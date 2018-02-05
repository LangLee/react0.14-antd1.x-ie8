export const doLogin = () => {
  return (dispatch, getState)=>{
    dispatch({type: 'FETCH_SUCCESS_LOGIN'})
  }
};

export const cancelLogin = () => {
  return (dispatch, getState)=>{
    dispatch({type: 'FETCH_FAILED_LOGIN'})
  }
};
