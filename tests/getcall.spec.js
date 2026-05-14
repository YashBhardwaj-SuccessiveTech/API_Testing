import {test, expect} from "@playwright/test"

test("Test GET API", async function({request}){
    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    // console.log(resp);

    // to get response status 
    const respStatus = await resp.status();
    // console.log(respStatus);

    //to get the response status text 
    const resStatusText = await resp.statusText();
    // console.log(resStatusText);

    // by using this we will get the response data in buffer
    const respbody = await resp.body();
    // console.log(respbody);

    // by using we will get the response data in the needed json format
    const resjson = await resp.json();
    // console.log(resjson);

    // Now, to get the response headers 
    const respHeaders = resp.headers();
    // console.log(respHeaders);

    // for getting the array of Headers 
    const respHeadersArray = resp.headersArray();
    // console.log(respHeadersArray);


    // NOW VALIDATIONS 
    expect(respStatus).toBe(200);
    expect(resStatusText).toBe("OK");
    expect(resp.ok()).toBeTruthy();
    expect(resjson).toHaveProperty("id",1);
    expect(resjson.body).toContain("quia et suscipit");
    

})




