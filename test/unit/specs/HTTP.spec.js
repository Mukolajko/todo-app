import http from '../../../src/services/http';

describe('HTTP library tests', () => {
  it ('should be correct type', () => {
    expect(typeof http).to.equal('object');
  });
  it ('should have required methods', () => {
    expect(typeof http.Get).to.equal('function');
    expect(typeof http.Post).to.equal('function');
    expect(typeof http.Put).to.equal('function');
  });
  //test all async method to check if they rejects with bad parameters
  //GET tests
  let getError = null;
  beforeEach(function(done) {
    http.Get()
      .then(() => {})
      .catch(err => {
        getError = err;
        done();
      });
  });
  it ('should reject if GET method called with bad arguments', () => {
    expect(getError).to.equal("Bad arguments");
  });
  //POST tests
  let postEmptyError = null;
  let postNoURLError = null;
  let postNoBodyDataError = null;
  let postBodyDataNotObjectError = null;
  beforeEach(function(done) {
    http.Post()
      .then(() => {})
      .catch(err => {
        postEmptyError = err;
        done();
      });
  });
  beforeEach(function(done) {
    http.Post(null, {test: [1,2,3]})
      .then(() => {})
      .catch(err => {
        postNoURLError = err;
        done();
      });
  });
  beforeEach(function(done) {
    http.Post("test.example.com", null)
      .then(() => {})
      .catch(err => {
        postNoBodyDataError = err;
        done();
      });
  });
  beforeEach(function(done) {
    http.Post("test.ggg.com", "this is bad")
      .then(() => {})
      .catch(err => {
        postBodyDataNotObjectError = err;
        done();
      });
  });
  it ('should reject if POST method called with bad arguments', () => {
    expect(postEmptyError).to.equal("Bad arguments");
    expect(postNoURLError).to.equal("Bad arguments");
    expect(postNoBodyDataError).to.equal("Bad arguments");
    expect(postBodyDataNotObjectError).to.equal("Bad arguments");
  });
  //PUT methods
  let putEmptyError = null;
  let putNoURLError = null;
  let putNoBodyDataError = null;
  let putBodyDataNotObjectError = null;
  beforeEach(function(done) {
    http.Put()
      .then(() => {})
      .catch(err => {
        putEmptyError = err;
        done();
      });
  });
  beforeEach(function(done) {
    http.Put(null, {test: [1,2,3]})
      .then(() => {})
      .catch(err => {
        putNoURLError = err;
        done();
      });
  });
  beforeEach(function(done) {
    http.Put("test.example.com", null)
      .then(() => {})
      .catch(err => {
        putNoBodyDataError = err;
        done();
      });
  });
  beforeEach(function(done) {
    http.Put("test.ggg.com", "this is bad")
      .then(() => {})
      .catch(err => {
        putBodyDataNotObjectError = err;
        done();
      });
  });
  it ('should reject if PUT method called with bad arguments', () => {
    expect(putEmptyError).to.equal("Bad arguments");
    expect(putNoURLError).to.equal("Bad arguments");
    expect(putNoBodyDataError).to.equal("Bad arguments");
    expect(putBodyDataNotObjectError).to.equal("Bad arguments");
  });
});
