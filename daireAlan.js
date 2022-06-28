
const yaricap = process.argv[2];
const pi = Math.PI;

function daireAlan(r){
    console.log("Yarıçapı (", r,") olan dairenin alanı : ", pi*r**2);
}

daireAlan(yaricap*1);