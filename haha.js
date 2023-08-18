// დავალება 1
//ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (i = 5; i<=100; i++){
    console.log (i);
}

//დავალება 2 

// მოცემულია მასივი:
// 
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i of array1 ){
    if (i > 0 && i <10 ) {
        console.log(i);
    }
}

// დავალება 3
// //მოცემულია მასივი
// //ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი


let array3= [1, 2, 3, 4, 5];
let sum3 = 0;

for ( let i of array3 ){
    sum3 +=  i;
}

console.log(sum3);

// // // დავალება 4
// // //მოცემულია მასივი
// // // //გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)
let array4 = [1, 2, 3, 7, 6, 9];

let sum = 0 ; 
 
for (let element of array4){
    sum += element;
}

// // // დავალება 5 

let result = sum / array4.length; 
console.log(result);

let user1 = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  
console.log(user1.studentstatus);

console.log(user1["studentstatus"]);


// //დავალება 6 

// // თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// // hello;
// // თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// // თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// // ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user = {
    name: 'nana',
    age:  30,
    studentstatus: 'bad'
}

if (user.age < 18 && user.studentstatus =='active'){
    console.log("hello")
} else if (user.name == "levan") {
    console.log("hello levan");

} else if (user.studetstatus == "active" || user.age < 25){
    console.log("hello world");
} else {
    console.log('error');
}

// // დავალება 7 

// // მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:


let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];

 
  for (let i = 0; i <array.length; i++){
    let numbArray = array[i];
    // console.log(numbArray);
    for (let item = 0; item < numbArray.length; item++){
        let elements = numbArray[item];
        if ( elements >= 0 ){
            console.log(elements);
        }
    }
}

for (let element of array ){
    // console.log(element);
    for (let item of element) {
        if (item >= 0 ){
            console.log(item);
        }
    }
}

// // დავალება 8

//მოცემულია მასივი
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}

// მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 
   
let name3 = "mariam";

let result1 = (name3 == "mariam") ? true : false;

console.log(result1);

// მოცემულია ცვლადი, რომლის მნიშვნელობაა 
// მარიამ. switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,ყველა სხვა 
// დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let name14 = "ia";

switch ( name14){
    case "mariam" :
        console.log(true);
        break;
    case "ana" :
        console.log(false);
        break;
        default:
        console.log("nothing");
}





