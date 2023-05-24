const {createUser, getUserById, updateUser, deleteUser} = require('./api');
const {userData, newData} = require('./resources/testdata') ;
const {describe, expect, test, it} = require('@jest/globals');


//1931167
describe("API tests", () => {
    let userId = null;
    let user = null;

    it("Create a new user", async () => {
        try {
            const res = await createUser(userData);
            userId = res.body.id;
            user = res.body;
            expect(res.body).toEqual(expect.objectContaining(userData));
            expect(res.status).toBe(200);
        } catch (err) {
            console.log(err);
        }
    });
    
    it("Get user by ID", async () => {
        try {
            const res = await getUserById(userId);
            expect(res.body).toEqual(user);
            expect(res.status).toBe(200);
        } catch (err) {
            console.log(err);
        }
    })
    
    it("Update user", async () => {
        try {
            const res = await updateUser(userId, newData);
            expect(res.body).toEqual(expect.objectContaining(newData));
            expect(res.status).toBe(200);
        } catch (err) {
            console.log(err);
        }
    })
    
    it("Delete user", async () => {
        try {
            const res = await deleteUser(userId);
            expect(res.body).toEqual({});
            expect(res.status).toBe(204);
        } catch (err) {
            console.log(err);
        }
    })
})

