const superagent = require("superagent");
const baseUrl = "https://gorest.co.in/public/v2/";
const TOKEN = require("./resources/token");
const userData = require("./resources/testdata");

const createUser = async (userData) => {

    try {
        const res = await superagent
            .post(`${baseUrl}users`)
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(userData);
        return res;
    } catch (err) {
        console.log(err);
    }
}

createUser(userData);

const getUserById = async (userId) => {
    try {
        const res = await superagent
            .get(`${baseUrl}users/${userId}`)
            .set("Authorization", `Bearer ${TOKEN}`);
        return res;

    } catch (err) {
        console.log(err);
    }
}

//getUserById(1931167)

const updateUser = async(userId, newData) => {
    try {
        const res = await superagent
            .put(`${baseUrl}users/${userId}`)
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(newData);
        console.log(res.body);
        return res;
    } catch (err) {
        console.log(err);
    }
}


const deleteUser = async (userId) => {
    try {
        const res = await superagent
            .delete(`${baseUrl}users/${userId}`)
            .set("Authorization", `Bearer ${TOKEN}`)
        return res;    
    } catch (err) {
        console.log(err);
    }
}

module.exports = createUser, getUserById, updateUser, deleteUser;