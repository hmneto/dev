const phantom = require('phantom')

const takeSnapshot = async(url)=>{
    const instance = await phantom.create()
    const page = await instance.createPage()

    const status = await page.open(url)
    console.log(status)
    
    //const content = await page.property('content')
    //console.log(content)

    await page.render('google.png')

    await instance.exit()
}

takeSnapshot('http://google.com')