import {test, expect} from "@playwright/test"

test("PUT and PATCH Request",async({request})=>{
    const authData = {
        "username" : "admin",
        "password" : "password123"
    }

    // First Generating the Token

    const tokenresp = await request.post("https://restful-booker.herokuapp.com/auth", {headers: {"Content-Type": "application/json"}, data: authData});
    const tokenrespjson = await tokenresp.json()
    console.log(tokenrespjson);
    const token = tokenrespjson.token;

    const newData = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }

    // Here, now adding the new data
    const respaddData = await request.post("https://restful-booker.herokuapp.com/booking", {headers: {"Content-Type": "application/json"}, data: newData});
    const respaddDatajson = await respaddData.json();
    console.log(respaddDatajson);

    const bookingid = respaddDatajson.bookingid;
    console.log(bookingid);

    const updateData = {
        "firstname" : "Shikha",
        "lastname" : "ishika",
        "totalprice" : 6000,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Dinner"
    }

    // Now here updating the Data that we entered 
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`, {headers: {"Content-Type": "application/json", "Accept": "application/json", "Cookie":"token="+token}, data: updateData});
    const updatedjsonresp = await response.json();

    console.log(updatedjsonresp);

    // Now the assertioin part
    // 1. verify price change or not 
    // 2. verify additionalneeds changed to Dinner
    const price = updatedjsonresp.totalprice;
    expect(price).toBe(6000);
    const updatedadditionalneeds = updatedjsonresp.additionalneeds;
    expect(updatedadditionalneeds).toBe("Dinner");

});



