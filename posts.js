const superagent = require("superagent");
const postsUrl = "https://gorest.co.in/public/v2/posts/";
const TOKEN = require("./token");

export const createPost = async (postData) => {
    try {
        const res = await superagent
            .post(postsUrl)
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(postData);
        //console.log(res.body);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const getPostById = async (postId) => {
    try {
        const res = await superagent
            .get(`${postsUrl}${postId}`)
            .set("Authorization", `Bearer ${TOKEN}`);
        //console.log(res.body);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = async (postId, newData) => {
    try {
        const res = await superagent
            .put(`${postsUrl}${postId}`)
            .set("Authorization", `Bearer ${TOKEN}`)
            .send(newData);
        //console.log(res.body);
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = async (postId) => {
    try {
        const res = await superagent
            .delete(`${postsUrl}${postId}`)
            .set("Authorization", `Bearer ${TOKEN}`)
        //console.log(res.body);
        return res;
    } catch (err) {
        console.log(err);
    }
}