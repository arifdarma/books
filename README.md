#List View
## Show All Book By Parameter
URL : `http://localhost:3000/book/title/{param}`
Response : All list book
## Save Wishlist
URL : `http://localhost:3000/book/showWishList`
Response : Page with form `title, preview, ratings`

#List API

## Query all books by parameter
Url : `/books/title/:title`
### Body :
`null`
### Param :
string `title`
### Request :
Url : `http://localhost:3000/book/title/pemrograman` <br>
Body : 
```
null
```
### Response : 
```
[
  {
    title: 'Dasar Logika Pemrograman Komputer',
    author: [ 'Abdul Kadir' ],
    preview: 'http://books.google.co.id/books?id=HkBlDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=1&source=gbs_api',
    rating: 5
  },
  {
    title: 'Pemrograman Java Mulai Dari Nol Sampai Master',
    author: [ 'Vivian Siahaan', 'Rismon Hasiholan Sianipar' ],
    preview: 'http://books.google.co.id/books?id=CBFfDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=2&source=gbs_api',
    rating: undefined
  },
  {
    title: 'BUKU AJAR KONSEP DASAR PEMROGRAMAN WEBSITE DENGAN PHP',
    author: [ 'Elgamar' ],
    preview: 'http://books.google.co.id/books?id=sgLyDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=3&source=gbs_api',
    rating: undefined
  },
  {
    title: 'Algoritma dan Pemrograman',
    author: [ 'Lamhot Sitorus' ],
    preview: 'http://books.google.co.id/books?id=MRHwCgAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=4&source=gbs_api',
    rating: undefined
  },
  {
    title: 'Algoritma & Pemrograman Menggunakan Matlab (Matrix Laboratory)',
    author: [ 'Prof. Dr. H. Sahyar, M.S., M.M.' ],
    preview: 'http://books.google.co.id/books?id=0wovDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=5&source=gbs_api',
    rating: 4
  },
  {
    title: 'Logika Pemrograman Menggunakan C++',
    author: [ 'Abdul Kadir' ],
    preview: 'http://books.google.co.id/books?id=ikyrDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=6&source=gbs_api',
    rating: undefined
  },
  {
    title: 'Pemrograman Web dengan Menggunakan PHP dan Framework Codeigniter',
    author: [ 'Supono dan Vidiandry Putratama' ],
    preview: 'http://books.google.co.id/books?id=7SllDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=7&source=gbs_api',
    rating: 5
  },
  {
    title: 'Pemrograman Python untuk Penanganan Big Data',
    author: [ 'Hanna Arini Parhusip ' ],
    preview: 'http://books.google.co.id/books?id=Osf2DwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=8&source=gbs_api',
    rating: undefined
  },
  {
    title: 'Logika Pemrograman Java',
    author: [ 'Abdul Kadir' ],
    preview: 'http://books.google.co.id/books?id=6mXrDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=9&source=gbs_api',
    rating: undefined
  },
  {
    title: 'Konsep dan Implementasi Pemrograman Python',
    author: [ 'Vivian Siahaan', 'Rismon Hasiholan Sianipar' ],
    preview: 'http://books.google.co.id/books?id=yxWaDwAAQBAJ&printsec=frontcover&dq=pemrograman&hl=&cd=10&source=gbs_api',
    rating: undefined
  }
]
```

## Save wishlist
Url : `/books/wishlist`
### Body :
`null`
### Param :
`null`
### Request :
Url : `http://localhost:3000/book/wishlist` <br>
Body : 
```
{
    "title":"Aplikasi Sederhana Matematika dalam Kehidupan Kita",
    "preview":"http://books.google.co.id/books?id=4oJ3DQAAQBAJ&printsec=frontcover&dq=matematika&hl=&cd=9&source=gbs_api",
    "userId":"1"
}
```
### Response : 
```
Data Added
```