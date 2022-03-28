"use strict";
const assert = require("assert");

const { EMAIL_FROM, EMAIL_PASS } = process.env;

assert(EMAIL_FROM, "EMAIL_FROM is required");
assert(EMAIL_PASS, "EMAIL_PASS is required");

module.exports = {
    email: EMAIL_FROM,
    email_pass: EMAIL_PASS,
};
