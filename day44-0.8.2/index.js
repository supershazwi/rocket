const randomNumber = () => Math.floor(Math.random() * 1000);

const setDelay = (delay) => {
  console.log(`delaying ${delay}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('done with timeout');
      resolve(delay);
    }, delay);
  });
};

const doStuff = async () => {
  console.log('about to set timeout');
  await setDelay(randomNumber());
  console.log('after call setTimeout');
};

console.log('about to call do stuff');
doStuff();
console.log('finished call do stuff');