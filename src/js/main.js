import '../styles/main.css'

let arr0 = []
let arr1 = []
let arr2 = []

let degreesArray = [
    0, 20, 40, 60, 80, 100,
    120, 140, 160, 180, 200, 220, 
    240, 260, 280, 300, 320, 340
]

for(let i=1; i<19; i++) {
    arr0.push(document.getElementById(`Zero_char${i}`))
    arr1.push(document.getElementById(`First_char${i}`))
    arr2.push(document.getElementById(`Second_char${i}`))
}

function circleTextAnimation(Arr, DegArr, Duration, Direction) {
    for (let i = 0; i < Arr.length; i++) {
        Arr[i].animate(
        [
            {transform: `rotate(${DegArr[i]}deg)`},
            {transform: `rotate(${DegArr[i]+360}deg)`}
        ], 
        { duration: Duration, iterations: Infinity, direction: Direction}
        )  
    }
    
}

window.requestAnimationFrame(()=> {
    return (
        circleTextAnimation(arr0, degreesArray, 31000, 'normal'),
        circleTextAnimation(arr1, degreesArray, 31000, 'reverse'),
        circleTextAnimation(arr2, degreesArray, 26000, 'normal')
    )
})


