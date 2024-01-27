// cab status


const bookCab = 
new Promise((resolve, reject) => {
   let cabBooked = false;

   if (cabBooked) {
    reject("Cab Cancelled");

    }else{
  resolve("Cab Arrived");
    }

    let cabCancell = true;
    if (cabCancell) {
        reject("Cab Cancelled");
    
    }else{
      resolve("Cab Arrivedc");
    }

}
);

bookCab
.then((message) => {console.log(message);})
.catch((error) => { console.log(error);})



