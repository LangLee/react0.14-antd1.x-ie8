/**
 * 创建人：lil
 * 创建时间：2017/5/7
 * 描述：
 */
const initState = {
	isAutoLogin: false, // 是否自动登陆
	isLogin: false, // 是否登陆成功 
	status: null,  // 登陆状态
	msg: null // 提示信息
};

const loginReducer = (state = initState, action = {}) => {
    var nextstate = {};
    switch (action.type) {
        case 'FETCH_REQUEST_LOGIN':
            console.log("登录中...");
            break;
        case 'FETCH_SUCCESS_LOGIN':
            console.log("登录成功...");
            nextstate = Object.assign({}, state, {isLogin:true});
            break;
        case 'FETCH_FAILED_LOGIN':
            console.log("登录失败...");
            nextstate = Object.assign({}, state, {isLogin:false});
            break;
        default :
            nextstate = Object.assign({}, state);
    }
    return nextstate;
};

export default loginReducer;

