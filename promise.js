const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(parameter)=>{
    let hasil = 0
    let dataTheaterIXX 
    let dataTheaterVGC 
    const hitungPromiseOutput = async ()=>{
      try {
        dataTheaterIXX = await promiseTheaterIXX()
        dataTheaterVGC = await promiseTheaterVGC()

        await dataTheaterIXX.forEach(element => {
          hasil += element.hasil === parameter ? 1 : 0
        });
        await dataTheaterVGC.forEach(element => {
          hasil += element.hasil === parameter ? 1 : 0
        });
      } catch (error) {
        console.log(error)
      }
    }
    await hitungPromiseOutput()
    return hasil
};


module.exports = {
  promiseOutput,
};
