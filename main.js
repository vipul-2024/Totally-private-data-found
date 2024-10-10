import data from "./data.js";

// const finalArr=[];

// for (let object of data){
//     const fullName=`${object.name.first} ${object.name.last}`
//     // console.log(object.name.first)
//     console.log(fullName)
//     const birthDate = new Date(object.dob.date).toDateString();
//     console.log (birthDate)
//     finalArr.push({fullName,birthDate})
// }
// //  console.log(data)
// console.log(finalArr)


const finalArr=data.map((object) => {
    const fullName=`${object.name.first} ${object.name.last}`
    const birthDate = new Date(object.dob.date).toDateString();
    return { fullName,birthDate}
})
console.log(finalArr)