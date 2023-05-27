import { faker } from '@faker-js/faker';

export const userData = {
    email: `test${Math.floor(Math.random() * 1000 + 1)}@testemail.com`,
    name: faker.person.fullName({sex: "male"}),
    gender: "male",
    status: "inactive"
};

export const newData = {
    name: faker.person.fullName({sex: "male"}),
    status: "active"
};

export const emptyPostResponse = [
        {
          "field": "user",
          "message": "must exist"
        },
        {
          "field": "user_id",
          "message": "is not a number"
        },
        {
          "field": "title",
          "message": "can't be blank"
        },
        {
          "field": "body",
          "message": "can't be blank"
        }
];
