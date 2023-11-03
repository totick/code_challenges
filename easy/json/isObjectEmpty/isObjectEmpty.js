const isObjectEmpty = (obj) => {
  if (typeof obj !== 'object') return undefined;
  return Array.isArray(obj)
    ? obj.length === 0
    : Reflect.ownKeys(obj).length === 0;

  //Better solution (the values method returns an array with the values of the properties in an obj or the values on an array)
  // return Object.values(obj).length === 0;
};

export { isObjectEmpty };
