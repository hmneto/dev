// const fs = require('fs')

// fs.readFile(__dirname + '/.env-cmdrc', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     const transform = JSON.parse(data)
//     transform.prod.REACT_APP_BASE_URL = 'new url'
//     transform.prod.REACT_APP_BASE_URL2 = 'new url'

    // fs.writeFile(__dirname + '/.env-cmdrc', JSON.stringify(transform), err => {
    //     if (err) {
    //         console.error(err)
    //         return
    //     }else{
    //         console.log('File created')
    //     }
    // })
// })



const fs = require('fs').promises



async function teste() {
    const texto = await fs.readFile(__dirname + '/.env-cmdrc', 'utf8')
    const transform = JSON.parse(texto)
    transform.prod.REACT_APP_BASE_URL = await fs.readFile(__dirname + '/url-api', 'utf8')
    transform.prod.REACT_APP_BASE_URL2 = await fs.readFile(__dirname + '/url-server-images', 'utf8')
    console.log(transform)
    await fs.writeFile(__dirname + '/.env-cmdrc', JSON.stringify(transform))
}

teste()
