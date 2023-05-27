const superagent = require("superagent");
const postsUrl = "https://gorest.co.in/public/v2/posts";

export const postWithoutAuth = async (postData) => {
        const res = await superagent
            .post(postsUrl)
            .send(postData);
        console.log(res.body);
        return res;
}

export const postWithBadAuth = async (postData) => {
        const res = await superagent
            .post(postsUrl)
            .set("Authorization", "Bearer 123456789")
            .send(postData);
        console.log(res.body);
        return res;
}