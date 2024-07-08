console.log("Arrays")
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])

}


let arr1:any= [1, 2, 3, ["Dawood", "Shaikh"], 4, 5, 6];
console.log(arr1[3][1]);

//2d array
console.log("\n\"2D Array\"")
let arr2: String[][] = [["Ali", "Akbar", "Aslam"], ["Bilal", "Bisma", "Bilawal"]];

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        console.log(arr2[i][j]);
    }
}