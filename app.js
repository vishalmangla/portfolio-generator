//var commandLineArgs = process.argv.slice(2, process.argv.length);
//console.log(commandLineArgs);

const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');
//console.log(animalArray);

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';
//console.log(personObj);

const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);


const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  //profileDataArr.forEach((profileItem) => {
    //console.log(profileItem)
  profileDataArr.forEach(profileItem => console.log(profileItem));
  
};
printProfileData(profileDataArgs);

