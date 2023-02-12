// -----------1------------------

describe('describe', () => {
  it('test', () => {});
});

// -----------2------------------
let assert = chai.assert;

describe('valid string', () => {
  it('not an empty string', () => {
    assert.equal(validateEmail(''), false);
    assert.equal(validateEmail('      '), false);
  });
  it('typeof string', () => {
    assert.equal(validateEmail(222), false, 'number error');
    assert.equal(validateEmail(true), false, 'boolean error');
    assert.equal(validateEmail({}), false, 'object error');
  });
});

describe('valid data', () => {
  it("Don't have the @ or @ is the first character", () => {
    assert.isFalse(validateEmail('emailgmail.com'), "Don't have the @");
    assert.isFalse(validateEmail('@email@gmail.com'), '@ the first character');
  });
});

describe('valid length', () => {
  it('length more then 5 characters', () => {
    assert.equal(validateEmail('12345'), false, 'length is too short');
  });
});
