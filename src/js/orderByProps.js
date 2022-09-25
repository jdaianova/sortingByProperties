export default function orderByProps(obj, orderedProps) {
  const currentObj = obj;
  const resultArray = [];
  for (let i = 0; i < orderedProps.length; i += 1) {
    resultArray.push({ key: orderedProps[i], value: currentObj[orderedProps[i]] });
    delete currentObj[orderedProps[i]];
  }
  const arrRestKeys = Object.keys(currentObj).sort();
  for (let i = 0; i < arrRestKeys.length; i += 1) {
    resultArray.push({ key: arrRestKeys[i], value: currentObj[arrRestKeys[i]] });
  }

  return resultArray;
}
