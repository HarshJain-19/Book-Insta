const booksCollection = [
    {
        name: "The Hell of a book",
        link: "https://images1.penguinrandomhouse.com/cover/9780593409343",
        price: 499,
    },
    {
        name: "Trump",
        link: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481488006/a-childs-first-book-of-trump-9781481488006_hr.jpg",
        price: 599,
    },
    {
        name: "The Hole Book",
        link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391904278l/1589466.jpg",
        price: 360,
    },
    {
        name: "Grizzly Bear",
        link: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529013979.jpg",
        price: 700,
    },
    {
        name: "How to stop time",
        link: "https://hive.dmmserver.com/media/640/97817821/9781782118640.jpg",
        price: 645,
    },
    {
        name: "The others",
        link: "https://d30a6s96kk7rhm.cloudfront.net/original/978/073/364/9780733641145.jpg",
        price: 800,
    },
    {
        name: "leave the word behind",
        link: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1609266429-leave-the-world-behind-1609266421.jpg?crop=1xw:1xh;center,top&resize=480:*",
        price: 200,
    },
    {
        name: "The last widow",
        link: "https://www.murderone.ie/wp-content/uploads/2019/03/last-window.jpg",
        price: 300,
    },
    {
        name: "your missing hearts",
        link: "https://images.seattletimes.com/wp-content/uploads/2022/12/12162022_12345_174602.jpg?d=1560x2355",
        price: 567,
    },
    {
        name: "The Half moon",
        link: "https://assets.vogue.in/photos/63c4f6cf7f1659176630545e/master/w_1600%2Cc_limit/The%2520Half%2520Moon%2520.jpeg",
        price: 742,
    },
    {
        name: "An Arrow to the moon",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYYWrryFeOOn-ff0A5CCH7cR_2lWHOD-B4819iWgFQB0y9l5aZWyudGbSRz8euEkAh-Y&usqp=CAU",
        price: 478,
    },
    {
        name: "More on the moon",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7T5z2iUzIWOp7IIO9d5yXOYniw-c2iCX_a0393mWRkHASUG1MPoXitogrPNw8NA3hhYQ&usqp=CAU",
        price: 500,
    },
    {
        name: "Shoot the moon",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVa3UKT-ySOHRWBlGlmTAOXKReBs86_tyt8opneH0vLHTngODjiewtsUkqA3trSc7lKU&usqp=CAU",
        price: 567,
    },
    {
        name: "no one can know",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7f5s6UPlXpibYTIhyeRRYIPTfwsKZyLpMRxlZ8IvIWOx-6JsQEN0Orx7iWojna7TmYds&usqp=CAU",
        price: 489,
    },
    {
        name: "happiness falls",
        link: "https://m.media-amazon.com/images/I/91Yq1j-jm4L._AC_UF1000,1000_QL80_.jpg",
        price: 699,
    },
    {
        name: "the east indian",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlR-QJC3q-o8gAGbskDVItbKSDP-1RxfxODhSRNCRJcRCFQQrTEVzV80099rKF-GAC-s&usqp=CAU",
        price: 700,
    },
    {
        name: "two states",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3-O-8AuzUoo5V2mJiCFWClTHlIr4U0wTnLbpPpx3_fCsap-kmjvBi388GZLLmxhIICI&usqp=CAU",
        price: 500,
    },
    {
        name: "normal people",
        link: "https://www.realsimple.com/thmb/-peF-thNTibpA5iArNXU693CTn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-to-read-normal-people-crop-0649ede28a2144808e96aed6a1600aed.jpg",
        price: 345,
    },
    {
        name: "disappearing the earth",
        link: "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        price: 560,
    },
    {
        name: "The deluge",
        link: "https://static01.nyt.com/images/2023/01/10/books/10stephen-markley-cover/10stephen-markley-cover-mediumSquareAt3X.jpg",
        price: 678,
    },
    {
        name: "The kite runner",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgaOEYQDeVXaC9X-g2H8J0ZR4JkGnvQ5kIg&usqp=CAU",
        price: 908,
    },
    {
        name: "a burnings",
        link: "https://pyxis.nymag.com/v1/imgs/fc2/851/5a6520ca1b968d9ded1ecbb0466cb9de0f-a-burning-majumdar.rdeep-vertical.w245.jpg",
        price: 675,
    },
    {
        name: "playing with fire",
        link: "https://m.media-amazon.com/images/I/61UbvLDnMkL._AC_UF1000,1000_QL80_.jpg",
        price: 345,
    },
    {
        name: "cast in fire",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiPAvkpv3nMc6T2bqr5XH1mXXrVKiYxjmiKL77vZSetA_tTYVHSshTDgOJmtfCB4UDQg&usqp=CAU",
        price: 678,
    },
    {
        name: "crime and punishment",
        link: "https://qph.cf2.quoracdn.net/main-qimg-f416dd41042f0e2fc3ae634618eb807d-lq",
        price: 545,
    },
    {
        name: "shearlock homes",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLFflpui-W9-WFewLncToLtiQGiCw_fEkwthqoVOX57mX8DHyVeP8Jkw-C4n-jwTJlqA&usqp=CAU",
        price: 999,
    },
    {
        name: "arrow wood",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5n3W4PPBslzU6_oVg0Sspr-VEF1D-bZ5YmtxXFRXMclztXr9WwUQ4izR9YByYw86E-uI&usqp=CAU",
        price: 564,
    },
    {
        name: "anne perry",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCajuAZw1XlKGiD07OFyJYhwGIQNKQ_OcXVOwAX_NJwiXmQzbVi4ADufl34Ub8zbgImvU&usqp=CAU",
        price: 200,
    },
];
