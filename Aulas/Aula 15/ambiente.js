let num = [1, 2, 8, 87, 45, 87, 22, 49, 71, 47, 55, 14, 25, 17, 36, 38, 34, 28, 19, 56]

num.push(65)

console.log(num.length)

num.sort()

console.log(num[2])

for (var c = 0; c < num.length; c++)
    {
        console.log(`Item ${c}: ${num[c]}`)
    }
