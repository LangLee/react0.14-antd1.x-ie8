/**
 * 创建人：lil
 * 创建时间：2017/5/7
 * 描述：
 */
const initState = {
    menu:[{key:'',path:''},{key:'', path:''},{key:'', path:''}]
};

const homeReducer = (state = initState, action = {}) => {
    var nextstate = {};
    switch (action.type) {
        default :
            nextstate = Object.assign({}, state);
    }
    return nextstate;
};

export default homeReducer;

