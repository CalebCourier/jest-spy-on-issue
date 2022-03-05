import * as index from '../src/inheritedCode';

describe('inherited code tests', () => {
  let funcOneSpy;
  beforeAll(() => {
    funcOneSpy = jest.spyOn(index, 'funcOne');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it ('main calls funcOne - 1', async () => {
    const result = await index.main();
    
    expect(result).toEqual('main return');
    expect(index.funcOne).toBeCalled();
    expect(funcOneSpy).toBeCalled();
  });
  
  it ('main calls funcOne - 2', async () => {
    const result = await index.main();
    
    expect(result).toEqual('main return');
    expect(index.funcOne).toBeCalled();
    expect(funcOneSpy).toBeCalled();
  });

});