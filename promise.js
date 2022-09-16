const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
    let hasil = 0
    return new Promise(async (resolve, reject) => {
      try {
        let dataTheaterIXX = await promiseTheaterIXX()
        let dataTheaterVGC = await promiseTheaterVGC()

        await dataTheaterIXX.forEach(element => {
          hasil += element.hasil === emosi ? 1 : 0
        });
        await dataTheaterVGC.forEach(element => {
          hasil += element.hasil === emosi ? 1 : 0
        });
        resolve(hasil)
      } catch (error) {
        reject(error)
      }
    })
    
};


module.exports = {
  promiseOutput,
};
