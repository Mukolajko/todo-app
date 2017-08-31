import helpers from '../../../src/assets/js/helpers';

describe('Helpers library tests', () => {
  it ('should be correct type', () => {
    expect(typeof helpers).to.equal('object');
  });
  it ('should have required methods', () => {
    expect(typeof helpers.setSessionStorage).to.equal('function');
    expect(typeof helpers.getSessionStorage).to.equal('function');
    expect(typeof helpers.clearSessionStorage).to.equal('function');
    expect(typeof helpers.parseJson).to.equal('function');
    expect(typeof helpers.showErrorMessage).to.equal('function');
  });
  it ('should set session storage', () => {
    helpers.setSessionStorage('q', 'test');
    expect(helpers.getSessionStorage('q')).to.equal('test');
  });
  it ('should get session storage', () => {
    helpers.setSessionStorage('good', 'valid');
    let good = helpers.getSessionStorage('good');
    let bad = helpers.getSessionStorage('notdefined');
    expect(good).to.equal('valid');
    expect(helpers.getSessionStorage('q')).to.equal('test');
    expect(bad).to.equal(null);
  });
  it ('should clear session storage', () => {
    helpers.clearSessionStorage();
    let good = helpers.getSessionStorage('good');
    let bad = helpers.getSessionStorage('notdefined');
    let q = helpers.getSessionStorage('q');
    expect(good).to.equal(null);
    expect(bad).to.equal(null);
    expect(q).to.equal(null);
  });
  it ('should parseJSON from string', () => {
    let testString = '{"qqq": [1,2,3], "test": "all ok"}';
    let json = helpers.parseJson(testString);

    expect(typeof json).to.equal('object');
    expect(json.qqq.length).to.equal(3);
    expect(json.test).to.equal('all ok');
  });
  it ('should return null if string is not valid json', () => {
    let testString = '{"qqq": [1,2,3], "test": "all ok", bad: 1}';
    let json = helpers.parseJson(testString);
    let json2 = helpers.parseJson();
    expect(json).to.equal(null);
    expect(json2).to.equal(null);
  });
});
