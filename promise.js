const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
    let hasil = 0
      try {
        let dataTheaterIXX = await promiseTheaterIXX()
        let dataTheaterVGC = await promiseTheaterVGC()

        await dataTheaterIXX.forEach(element => {
          hasil += element.hasil === emosi ? 1 : 0
        });
        await dataTheaterVGC.forEach(element => {
          hasil += element.hasil === emosi ? 1 : 0
        });
      } catch (error) {
        console.log(error)
      }
    return hasil
};


module.exports = {
  promiseOutput,
};
