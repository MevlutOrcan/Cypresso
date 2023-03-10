/// <reference types="cypress"/>
describe('POST With Auth',()=>{
    
    it('test',()=>{
    cy.request({
        url:'https://restful-booker.herokuapp.com/booking',
        method:"POST",
        auth:{
            "username" : "admin",
            "password" : "password123"
        },
        body:{
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2024-01-01",
                "checkout" : "2024-01-01"
            },
            "additionalneeds" : "Breakfast"
        },
        token:"abc123"

    }).then((response)=>{
        console.log(response)
        expect(response.body.booking.firstname).to.eq("Jim")
        expect(response.body.booking.lastname).to.eq("Brown")
        expect(response.body.booking.totalprice).to.eq(111)
        expect(response.headers.server).to.eq("Cowboy")
        expect(response.headers.connection).to.eq("keep-alive")
    })
/*
{
  "firstname": "Jim",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2024-01-01",
    "checkout": "2024-01-01"
  },
  "additionalneeds": "Breakfast"
}
 */

    })

})