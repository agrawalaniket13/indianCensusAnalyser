const fs = require('fs')
const csv = require('csv-parser')
const user = [];

try{
  fs.createReadStream('StateCensus.csv')
  .pipe(csv())
  .on('data', function (row) {

    const state = {
        state: row.State,
        population: row.Population,
        areaInSqKm: row.AreaInSqKm,
        densityPerSqKm: row.DensityPerSqKm,
       }
    user.push(state)
  })
  .on('end', function () {
      console.table(user)
    })
} catch(error){
  console.log(error);
}
