let otpgenertor = (digit)=>{
    // one 
    // let otp = Math.floor(Math.random()*Math.pow(10,digit));
    // return otp;

    //two 

    let num = '0123456789';
    let otp = '';
    for(let i=0;i<digit;i++){
        otp += num[Math.floor(Math.random()*10)];
    }
    return otp;

}
console.log(otpgenertor(5));