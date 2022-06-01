export const arrayToMap = arr => {
  return new Map(arr.map(item => [item.id, item]))
}

export const mapToArray = map => {
  return [...map.values()];
}

export const mergeResolvers = resolversArr => {
  return resolversArr.reduce((allResolvers, resolver) => {

    Object.entries(resolver).forEach(([key, value]) => {
      if (allResolvers[key]) {
        allResolvers[key] = {...allResolvers[key], ...value}
      } else {
        allResolvers[key] = value;
      }
    })

    return allResolvers;

  }, {})
}

export const createUniqId = () => {
  return new Date().toString();
}