// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    // return drivers.map(function(driver) {
    //   return driver.toLowerCase();
    // });
  const lowerCaseNames = drivers.map(name => name.toLowerCase());

  return lowerCaseNames;
}

function nameToAttributes(drivers) {
  // return drivers.map(function(driver) {
  // const driverFirst = driver.split(' ')[0];
  // const driverLast = driver.split(' ')[1];
  //
  // return { firstName: driverFirst, lastName: driverLast };

  const newObject = drivers.map(function(name) {
    const words = name.split(" ");
    return Object.assign({}, { firstName: words[0], lastName: words[1]});
  });

  return newObject;
}

function attributesToPhrase(drivers) {
  const newObject = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });

  return newObject;
}
