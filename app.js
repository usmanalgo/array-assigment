// var num1 = document.querySelector('#num1')
// var num2 = document.querySelector('#num2')
// var result=document.querySelector("#result")
// function collect(){
//     var sum = +num1.value + +num2.value
//     result.innerHTML='sum of all no' + sum
// }

// var head = document.querySelector("#head");
// var num = 0
// function changeText() {
//     console.log("hello")
//     head.innerHTML = "change through javascript " + num
//     // num = num + 1
//     num += 1

// }



// var english = document.querySelector('#english')
// var urdu = document.querySelector('#urdu')
// var maths = document.querySelector('#maths')
// var islamiat = document.querySelector('#islamiat')
// var total = document.querySelector('#para')
// var percantage = document.querySelector('#para2')
// var grade = document.querySelector('#grade')

// function sumno() {
//     var sum = +english.value + +urdu.value + +maths.value + +islamiat.value
//     total.innerHTML = 'total marks ' + sum
//     var getpercantage = sum / 400 * 100
//     percantage.innerHTML = 'you got ' + getpercantage + ' %'
//     var gradevalue
    // getpercantage.replace(/\.00$/,'');
    // let getpercantage = Math.trunc(getpercantage)

//     if (getpercantage >= 80) {
//         gradevalue = "A+"
//         console.log("2", gradevalue);
//     } else if (getpercantage >= 70) {
//         gradevalue = "A"
//         console.log("3", gradevalue);
//     } else if (getpercantage >= 60) {
//         gradevalue = "B"
//         console.log("4", gradevalue);
//     } else if (getpercantage >= 50) {
//         gradevalue = "c"
//         console.log(gradevalue);
//     } else {
//         gradevalue = 'fail'
//     }
//     console.log("finallll",gradevalue);
//     grade.innerHTML = 'you get ' +  gradevalue + " grade"

// }

// if(hour > 24 || hour < 1){
//     console.log('sahi nahi ha bhai!')
// } else if(hour >= 22 || hour <= 5){
//     console.log('good night')
// } else if(hour > 5 && hour <= 12){
//     console.log('good morning')
// } else if(hour > 12 && hour <= 16){
//     console.log('good afternoon')
// } else {
//     console.log('good evening')
// }


// var country = ['paksitan' ,'russia' ,'ukrain', 'india' , 'usa' ,  'africa' , 'canadata']
// console.log(country);


var NestedArray = [ [ [ [1, 2], [3, 4] ], [ [5, 6], [7, 8] ] ], [ [ [9, 10], [11, 12] ], [ [13, 14], [15, 16] ] ], [ [ [17, 18], [19, 20] ], [ [21, 22], [23, 24] ] ] ];

console.log(NestedArray [2][0][1][1])