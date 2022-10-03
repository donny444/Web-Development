var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
}
//My own object

var nameValue = myDog.name
var friendsValue = myDog.friends

function checkObj(checkProp) {
    if (myDog.hasOwnPorperty(checkProp)) {
        return myDog[checkProp]
    } else {
        return "Not Found"
    }
}
console.log(checkObj("tails"))