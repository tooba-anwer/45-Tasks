interface bio_data {
    name : string ;
    class : string ;
    RollNo : number ;
    adress : string ;
    State : string ;
    phoneNumber : number ;
    email : string ;
}

const myBioData : bio_data = {
    name : "Ahmed",
    class : "intermediate",
    RollNo : 24 ,
    adress : "ABC Street" ,
    State : "Karachi",
    phoneNumber : 453872 ,
    email : "something@gmail.com" ,
}
console.log(myBioData);