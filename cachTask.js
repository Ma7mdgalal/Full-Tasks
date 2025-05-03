function sumWithCache() {
  const cache = {};

  return function(a, b) {
    const key = `${a},${b}`;

    if (cache[key] !== undefined) {
      console.log('Returning from cache');
      return cache[key];
    }

    console.log('Calculating...');
    const result = a + b;
    cache[key] = result;
    return result;
  };
}