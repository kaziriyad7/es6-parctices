const allFriendsAge = [22, 23, 24, 25];
const allbrothersAge = [26, 27, 28, 29];

// const totalAge = allFriendsAge.concat(allbrothersAge);

const totalAge = [...allFriendsAge, 10, 11, ...allbrothersAge,];
console.log(totalAge);

// maximum 
const business = 650;
const minister = 450;
const sochib = 250;

const maximum = Math.max(business, minister, sochib);
console.log(maximum);

