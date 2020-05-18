let inputStd = ''

process.stdin.on('data', function (data) {
    inputStd += data
})


process.stdin.on('end', function () {
    const lines = inputStd.split('\n')
    console.log(lines)
})