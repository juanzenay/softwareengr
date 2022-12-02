var request = require ('supertest');
var express = require('express');
var indexRouter = require('.././routes/index');
const app = new express();

app.use('/', indexRouter);

describe('Test Handlers', function () {

    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.text).toEqual("\"aaaaaaaaaaaaaaaaaaaaaaaaaa\"");
    });

});