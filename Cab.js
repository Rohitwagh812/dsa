
// Rohit cab booking status

const bookCab = 
new Promise((resolve, reject) => {
   let cabBooked = true;

   if (!cabBooked) {
    reject("Cab Cancelled");

    }else{
  resolve("Cab Arrived");
    }

    // let cabCancell = true;
    // if (cabCancell) {
    //     reject("Cab Cancelled");
    
    // }else{
    //   resolve("Cab Arrivedc");
    // }

}
);

bookCab
.then((message) => {console.log(message);})
.catch((error) => { console.log(error);})


let rohit = [
  {
    index: 1,
      name: "Rohit",
      age: 22,
      city: "Pune",
      lastName: 'Wagh'
  },
  {
      index: 2,
  }
  ,
  {
      index: 3,
      name: "Rohit",
      age: 22,
      city: "Pune",
      lastName: 'Wagh'

  }
]

console.table(rohit)


const FakeApi = "https://fakestoreapi.com/";

function fetchData(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchData(FakeApi);