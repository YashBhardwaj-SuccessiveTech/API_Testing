import {test, expect} from "@playwright/test";

test("Delete API", async ({request})=>{
    // token creation 
    const authData = {
        "username" : "admin",
        "password" : "password123"
    }

    // First Generating the Token

    const tokenresp = await request.post("https://restful-booker.herokuapp.com/auth", {headers: {"Content-Type": "application/json"}, data: authData});
    const tokenrespjson = await tokenresp.json()
    console.log(tokenrespjson);
    const token = tokenrespjson.token;
    console.log(token)
    // now deleting the booking by using id 
    // always to prefer creating own data using post and then delete to avoid already deleted conflict
    
    const id = 288;
    const resp = await request.delete(`https://restful-booker.herokuapp.com/booking/${id}`,{ headers: {"Content-Type":"application/json", "Cookie":"token="+ token}})
    // const respjson = await resp.json();
    console.log(resp.status());

})