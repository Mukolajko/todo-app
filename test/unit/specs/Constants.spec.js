import constants from '../../../src/config/constants';

describe('Constants tests', () => {
  it ('should be correct type', () => {
    expect(typeof constants).to.equal('object');
  });
  it ('should have required properties', () => {
    expect(typeof constants.url).to.equal('string');
    expect(typeof constants.userPath).to.equal('string');
    expect(typeof constants.todosPath).to.equal('string');
  });
});
