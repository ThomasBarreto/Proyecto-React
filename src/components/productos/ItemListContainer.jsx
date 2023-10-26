import { Card } from "./Card"
import './Card.modules.css';
import './ItemListContainer.modules.css'

const sneakers = [
    {
        img:'https://www.fayerwayer.com/resizer/oEkz3MQo4UFz28MNBRqtyErAOjY=/arc-photo-metroworldnews/arc2-prod/public/XGI7GL4CCNEZJI7SINQGKDH5H4.jpg',
        nombre:'Jordan 1 Mid French Blue Fire Red',
        precio:230,
    },
    {
        img:'https://www.kicksonfire.com/wp-content/uploads/2023/04/Bad-Bunny-adidas-Campus-Wild-Moss-ID7950.jpeg',
        nombre:'Jordan Retro 4',
        precio:130,
    },
    {
        img:'https://i.ebayimg.com/images/g/61YAAOSwZDtkBnp-/s-l1200.jpg',
        nombre:'Jordan 1 Mid Panda',
        precio:350,
    },
    {
        img:'https://preview.redd.it/i-dont-want-to-know-who-bad-bunny-is-but-he-makes-great-v0-gjsrhk9zcr6a1.jpg?auto=webp&s=6434e4c71292748beb702ffe7677ecf60e3a3350',
        nombre:'Jordan 1 Low Red',
        precio:120,
    },
    {
        img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/sdghjgfh1-72e06e7579f54ec0f616033985605395-1024-1024.jpg',
        nombre:'Jordan 1 Low Red',
        precio:120,
    },
    {
        img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/nike-air-jordan-1-low-553558-039-11-45cc742cb744536fa816202348454047-1024-1024.jpg',
        nombre:'Jordan 1 Low Red',
        precio:120,
    },
    {
        img:'https://sneakernews.com/wp-content/uploads/2020/10/air-jordan-1-retro-high-og-co-jp-midnight-navy-kids-gs-575441-141-8.jpg',
        nombre:'Jordan 1 Low Red',
        precio:120,
    },
    {
        img:'https://d2r9epyceweg5n.cloudfront.net/stores/905/494/products/air-jordan-1-zoom-cmft-psg-db3610-105-71-f837d5c21c3410782d16275112100479-1024-1024.jpg',
        nombre:'Jordan 1 Low Red',
        precio:120,
    },
]

export default sneakers;

export const ItemListContainer = ({message}) => {
    return (
        <>
            <div className="itemListContainer">
                <h2>{message}</h2>
                <Card />
            </div>  
        </>
    )
}
