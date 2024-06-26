import request from "../../util/request";
import { getToken, removeToken,setToken } from "../../util/auth";

// 用户注册
export function registerUser(data) {
    return request({
        method: "post",
        url: "/user/register",
        headers: {
            smsCode: data.smsCode,
            mobile: data.mobile,
        },
        data: {
            nickName: data.nickName,
            password: data.password,
            name: data.name,
            gender: data.gender,
            roleName: "普通用户",
        },
    });
}

// 用户名密码登录
export function loginUsername(data) {
    return request({
        method: "post",
        url: "/user/login/username",
        data: {
            userName: data.userName,
            password: data.password,
        },
    });
}

// 获取短信验证码
export function smsCodeGet(data) {
    return request({
        method: "get",
        url: "/common/code/mobile",
        params: {
            mobile: data.mobile,
        },
    });
}

// 手机号验证码登录
export function loginMobile(data) {
    return request({
        method: "post",
        url: "/user/login/mobile",
        headers: {
            mobile: data.mobile,
            smsCode: data.smsCode,
        },
    });
}

// 账号登出
export function logout() {
    return request({
        method: "post",
        url: "/user/logout1",
        headers: {
            token: getToken(),
        },
    });
}

// 获取用户信息
export function getInfo() {
    return request({
        method: "get",
        url: "/customer/list",
        headers: {
            token: getToken(),
        },
    });
}

// 获取本机ip
export function getIP() {
    return request({
        method: "get",
        url: "https://restapi.amap.com/v3/ip",
        params:{
            key:"a97860fb4b6caa184ab1d5c6034a8163"
        }
    });
}


// 获取本机ip所在城市天气
export function getIPCity(city) {
    return request({
        method: "get",
        url: `https://restapi.amap.com/v3/weather/weatherInfo`,
        params:{
            key: "a97860fb4b6caa184ab1d5c6034a8163",
            city:city
        }
    });
}
