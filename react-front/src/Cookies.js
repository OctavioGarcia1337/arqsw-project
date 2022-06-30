import React from "react";
import Cookies from "universal-cookie";

const Cookie = new Cookies();

export async function  loginCookies(token){
    let cookie =  Cookie.get("User")
    if(cookie == undefined){
        console.log("Tokento cookies", token)
        Cookie.set("User",token,{path:"/"})
        return true
    }
    let newCookie = token
    console.log("New Token", token)
    Cookie.set("User",newCookie,{path:"/"})
    return true
}

export function logOutCookies(){
    let cookie = Cookie.get("User")
    if(cookie==undefined){
        return
    }
    Cookie.remove("User")
}
export function getUserCookies(){
    let cookie = Cookie.get("User")
    if (cookie == undefined){
        return 
    }
    console.log("Cookie")
    return cookie

}