var db = require('../database')
var axios = require('axios').default

module.exports={addWishList,findBook}

async function addWishList(req) {
    const{title,preview,userId}=req.body
    try {
        var query = `INSERT INTO books VALUES('${title}','${preview}','${userId}')`
        await db.promise().query(query)
        result='Data Added'
    } catch (error) {
        result='Error '+error
    }
    return result
}

async function findBook(url) {
    console.log(url)
    let result
    let response = await axios.get(url)
    result = response.data.items.map(function(elem){
        let itemMap = {
            title: elem.volumeInfo.title,
            author: elem.volumeInfo.authors,
            preview: elem.volumeInfo.previewLink,
            rating: elem.volumeInfo.averageRating
        }
        return itemMap
    })
    return result
}