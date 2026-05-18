import {test, expect} from "@playwright/test"

test("", async ({request})=>{
    test.setTimeout(0);
    while(true){
        const response = await request.get("https://restful-booker.herokuapp.com/ping");
        const status = response.status();
        console.log(status);
        expect(status).toBe(201);
    }
})