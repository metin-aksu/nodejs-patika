
const param = process.argv.slice(2);
const pi = Math.PI;

function daireAlan(yaricap){
    console.log("Yarıçapı (", yaricap,") olan dairenin alanı : ", pi*yaricap**2);
}

daireAlan(param[0]*1);