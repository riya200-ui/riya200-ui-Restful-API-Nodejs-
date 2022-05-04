/*const request = require('supertest')
const app = require('../app');

 test('should sign up for a user', async() =>{
     await request(app).post('/users')
     .send({
         name: 'test',
         email:'test@test.com',
         password:'test123'
     })
     .expect(201)
     
 })*/


 //const { TestWatcher } = require('jest')
 const validatePassword = require('../validatePassword')
 test("return false given an empty string", () => {
     expect(validatePassword("")).toBe(true)
 })

 test("return false given a password that is 8 chaRACTERS longer ,a letter", ()=> {
    expect(validatePassword("123567a")).toBe(false)
})

 test("return false given a password that is 8 chaRACTERS long ,but no letter", ()=> {
     expect(validatePassword("123567a")).toBe(false)
 })