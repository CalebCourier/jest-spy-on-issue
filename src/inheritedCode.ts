import { promisify } from 'util';

const sleep = promisify(setTimeout);

export const funcOne = async function () {
  console.info('funcOne called!');
  return Promise.resolve();
};

export const main = async function () {
  funcOne()
    .then(() => {
      console.log('doing some other stuff  in the background');
    });
  return 'main return';
};