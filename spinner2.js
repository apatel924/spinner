const animation = (array,delay) => {
  setTimeout(() => {
    for (let i = 0; i < array.length; i++){
      process.stdout.write(array[0]);
      let newArr = array.slice(1);
      animation(newArr, delay);
    }
  }, delay);
};
setTimeout(() => {
  console.log('\n');
}, 3000)
animation(['\r|   ', '\r/   ','\r-   ' , '\r\\   ', '\r|   '], 500);
