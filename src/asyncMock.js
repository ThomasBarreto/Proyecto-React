const productos = [
        {
            id:1,
            img:'https://www.fayerwayer.com/resizer/oEkz3MQo4UFz28MNBRqtyErAOjY=/arc-photo-metroworldnews/arc2-prod/public/XGI7GL4CCNEZJI7SINQGKDH5H4.jpg',
            nombre:'Nike Air Jordan 4 Red Thunder',
            categoria:'Sneakers',
            precio:230,
            stock:5,
        },
        {
            id:2,
            img:'https://www.kicksonfire.com/wp-content/uploads/2023/04/Bad-Bunny-adidas-Campus-Wild-Moss-ID7950.jpeg',
            nombre:'Adidas Bad Bunny x Campus Wild Moss',
            categoria:'Sneakers',
            precio:310,
            stock:9,
        },
        {
            id:3,
            img:'https://i.ebayimg.com/images/g/61YAAOSwZDtkBnp-/s-l1200.jpg',
            nombre:'Adidas Forum Bad Bunny Coffe',
            categoria:'Sneakers',
            precio:270,
            stock:10,
        },
        {
            id:4,
            img:'https://preview.redd.it/i-dont-want-to-know-who-bad-bunny-is-but-he-makes-great-v0-gjsrhk9zcr6a1.jpg?auto=webp&s=6434e4c71292748beb702ffe7677ecf60e3a3350',
            nombre:'Adidas Bad Bunny Last Forum',
            categoria:'Sneakers',
            precio:190,
            stock:4,
        },
        {
            id:5,
            img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/sdghjgfh1-72e06e7579f54ec0f616033985605395-1024-1024.jpg',
            nombre:'Air Jordan 1 Mid Light Smoke Grey',
            categoria:'Sneakers',
            precio:140,
            stock:3,
        },
        {
            id:6,
            img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/nike-air-jordan-1-low-553558-039-11-45cc742cb744536fa816202348454047-1024-1024.jpg',
            nombre:'Air Jordan Retro 1 Low Shadow',
            categoria:'Sneakers',
            precio:260,
            stock:6,
        },
        {
            id:7,
            img:'https://sneakernews.com/wp-content/uploads/2020/10/air-jordan-1-retro-high-og-co-jp-midnight-navy-kids-gs-575441-141-8.jpg',
            nombre:'Jordan 1 Retro High COJP Midnight Navy',
            categoria:'Sneakers',
            precio:350,
            stock:7,
        },
        {
            id:8,
            img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/air-jordan-1-zoom-cmft-psg-db3610-105-71-f837d5c21c3410782d16275112100479-1024-1024.jpg',
            nombre:'Air Jordan Retro 1 Zoom CMFT PSG',
            categoria:'Sneakers',
            precio:300,
            stock:12,
        },
        {
            id:9,
            img:'https://sneakernews.com/wp-content/uploads/2020/10/air-jordan-1-retro-high-og-co-jp-midnight-navy-kids-gs-575441-141-8.jpg',
            nombre:'Jordan 1 Low Red',
            categoria:'Sneakers',
            precio:240,
            stock:7,
        },
        {
            id:10,
            img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/air-jordan-1-zoom-cmft-psg-db3610-105-71-f837d5c21c3410782d16275112100479-1024-1024.jpg',
            nombre:'Jordan 1 Low Red',
            categoria:'Sneakers',
            precio:245,
            stock:12,
        },
        {
            id:11,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8f752e05/products/NIDQ8024-252/NIDQ8024-252-1.JPG',
            nombre:'Short Básquet Jordan Flight Mvp Hombre',
            categoria: 'Indumentaria',
            precio:130,
            stock:9,
        },
        {
            id:12,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf913d7ba/products/NI_955175-023/NI_955175-023-1.JPG',
            nombre:'Remera Jordan Short Sleeve Graphic',
            categoria:'Indumentaria',
            precio:130,
            stock:9,
        },
        {
            id:13,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw91ebbca3/products/ADIB1411/ADIB1411-1.JPG',
            nombre:'Campera adidas Adicolor Classics Ssst Hombre',
            categoria:'Indumentaria',
            precio:350,
            stock:10,
        },
        {
            id:14,
            img:'https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-new-york-knicks-59fifty-dual-logo-60288038-1_2.jpg',
            nombre:'Gorra New Era New York Knicks 59FIFTY Dual Logo',
            categoria:'Indumentaria',
            precio:80,
            stock:4,
        },
        {
            id:15,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcdfa96a1/products/NICJ0921-432/NICJ0921-432-1.JPG',
            nombre:'Remera Jordan Jumpman Ss Crew Hombre',
            categoria:'Indumentaria',
            precio:120,
            stock:3,
        },
        {
            id:16,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw52446166/products/NIDX0564-034/NIDX0564-034-1.JPG',
            nombre:'Pantalón Urbano Nike Swoosh Hombre',
            categoria:'Indumentaria',
            precio:120,
            stock:6,
        },
        {
            id:17,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb74e3cde/products/NICU4489-722/NICU4489-722-1.JPG',
            nombre:'Campera Urbano Nike Nsw Tch Flc Fz Wr Hombre',
            categoria:'Indumentaria',
            precio:120,
            stock:7,
        },
        {
            id:18,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw94175d20/products/NI95A773-023/NI95A773-023-1.JPG',
            nombre:'Musculosa Urbana Jordan 23',
            categoria:'Indumentaria',
            precio:75,
            stock:12,
        },
        {
            id:19,
            img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw62e4b1e0/products/NI95C184-023/NI95C184-023-1.JPG',
            nombre:'Buzo Jordan Essentials ',
            categoria:'Indumentaria',
            precio:120,
            stock:7,
        },
        {
            id:20,
            img:'https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/7/0/70343295-gorra-new-era-chicago-bulls-59fifty-otc_1_11.jpg',
            nombre:'Gorra New Era Chicago Bulls 59FIFTY',
            categoria:'Indumentaria',
            precio:75,
            stock:12,
        },
]

export const getProducts = () => {

    return new Promise( (resolve, reject) => {
        if( productos.length > 0) { 
            setTimeout( () => { 
                resolve(productos)
            }, 1500 )
        } else {
            reject(new Error("No hay productos disponibles"))
        }
    } )
}