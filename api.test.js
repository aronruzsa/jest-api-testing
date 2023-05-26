import {describe, test, it, jest, beforeAll } from '@jest/globals';
import {createUser, getUserById, updateUser, deleteUser} from "./api.js";
import { expect } from 'chai';

const userData = {
    email: `test${Math.floor(Math.random() * 1000 + 1)}@testemail.com`,
    name: "David Hasselhoff",
    gender: "male",
    status: "inactive"
};

const newData = {
    name: "Clark Kent",
    status: "active"
};

describe("API tests", () => {
    let userId = 2171623;
    let user = null;
    
    test.skip("Create a new user", async () => {
        const res = await createUser(userData);
        userId = res.body.id;
        user = res.body;
        expect(res.body).to.deep.include(userData);
        expect(res.status).to.eq(201);

    });

    test("Get user by ID", async () => {
        const res = await getUserById(userId);
        expect(res.body.gender).to.eq("male");
        expect(res.status).to.eq(200);
    })

    test("Update user", async () => {
        const res = await updateUser(userId, newData);
        expect(res.body).to.deep.include(newData);
        expect(res.status).to.eq(200);

    })

    test("Delete user", async () => {
        const res = await deleteUser(userId);
        expect(res.status).to.eq(204);
    })
})

