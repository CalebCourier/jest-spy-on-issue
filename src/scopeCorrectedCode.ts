const thing = {
  async funcOne () {
    console.info('funcOne called!');
    return Promise.resolve();
  },
  
  async main () {
    this.funcOne()
      .then(() => {
        console.log('doing some other stuff in the background');
      });
    return 'main return';
  }
}

export default thing;