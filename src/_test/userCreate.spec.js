const request = require('supertest');
// const {expect} = require('chai');

const console = require("node:console");
const url = 'http://localhost:7000/'

let respData =null;
let postData = null;


describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TEST', () => {
        it('user create all fields', (done) => {
            postData = {
                query: `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`,
                variables: {
                    userInput: {
                        firstName: 'testFirstName',
                        lastName: 'testLastName'
                    }
                }
            }
            request(url)
                .post('/')
                .send()
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body;
                    console.log(respData);
                    // expect(respData.eq())
                    done()
                })
        })
    })
})
//              it('user create all fields successfully',(done) => {
//
//              })
//          })
//     })
//
// describe('USER CREATE - NEGATIVE TEST', () => {
//
//   })
// })
