const { assert } = require('chai');
const request = require('request');

const server = 'http://localhost:10010';

exports.testCreator = (describeText, its) => {
  describe(describeText, () => {
    its.forEach(({ url, title, body, isTrue }) => {
      it(title, () => {
        request(
          {
            url: server + url,
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body
          },
          function(error, response, body) {
            const code = JSON.parse(body).code;
            error && console.error(error.message);
            isTrue && assert.equal(code, 200);
            !isTrue && assert.notEqual(code, 200);
          }
        );
      });
    });
  });
};
