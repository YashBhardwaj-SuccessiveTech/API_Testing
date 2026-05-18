import {test, expect} from "@playwright/test";

test("post call example with token", async function ({request}) {
    
    const authData = {
        "username" : "admin",
        "password" : "password123"
    }

    const response = await request.post('https://restful-booker.herokuapp.com/auth', {headers:{'Content-Type': 'application/json'}, data:authData});

    console.log(response.status());

    console.log(await response.json());
    
    const responseData = await response.json();

    expect(responseData.token).not.toBeNull();

});

test("post call example with booking id", async function ({request}) {

    const authData = {
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
    
    const response = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{'Content-Type': 'application/json'},data: authData});

    console.log(response.status());
    console.log(await response.json());

});

