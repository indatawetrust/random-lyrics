import test from 'ava';
import rl from './src/index';

test('#1', async t => {
  
  const song = await rl()

  t.deepEqual(['artist', 'song', 'lyrics'], Object.keys(song))

})

