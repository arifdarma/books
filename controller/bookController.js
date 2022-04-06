var bookRepository = require('../repository/book')

module.exports={
    getBooks : async function(req,res){
        var url = "https://www.googleapis.com/books/v1/volumes?q="+req.params.title
        var result = await bookRepository.findBook(url)
        console.log(result)
        res.render('listBook',{result:result})
    },
    saveWishList : async function(req,res){
        var result = await bookRepository.addWishList(req)
        res.redirect('showWishList')
    },
    showWishList : function(req,res){
        res.render('wishlist')
    }
}