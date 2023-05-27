const superagent = require("superagent");
const usersUrl = "https://gorest.co.in/public/v2/users/";
const TOKEN = require("./token");

const userData = {
    email: `test${Math.floor(Math.random() * 1000 + 1)}@testemail.com`,
    name: "Andrew Bernard",
    gender: "male",
    status: "inactive"
};

const newData = {
    name: "Clark Kent",
    status: "active"
};

let userId = null;

export const createUser = async (userData) => {
    try {
        const res = await superagent
            .post(usersUrl)
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(userData);
        //userId = res.body.id;
        //console.log(userId);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const getUserById = async (userId) => {
    try {
        const res = await superagent
            .get(`${usersUrl}${userId}`)
            .set("Authorization", `Bearer ${TOKEN}`);
        //console.log(res.body);
        return res;

    } catch (err) {
        console.log(err);
    }
}

export const updateUser = async(userId, newData) => {
    try {
        const res = await superagent
            .put(`${usersUrl}${userId}`)
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(newData);
        //console.log(res.body);
        return res;
    } catch (err) {
        console.log(err);
    }
}


export const deleteUser = async (userId) => {
    try {
        const res = await superagent
            .delete(`${usersUrl}${userId}`)
            .set("content-type", "application/json")
            .set("Authorization", `Bearer ${TOKEN}`)
        //console.log(res.body);
        return res;    
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    try {
        await createUser(userData);
        await getUserById(userId);
        await updateUser(userId, newData);
        await deleteUser(userId);
    } catch (err) {
        console.log(err);
    }
});
