import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Button } from "../button/Button";
import { Indumentaria} from "./Indumentaria"
import './IndumentariaListContainer.modules.css'
import { useState } from "react";



const prodsIndumentaria = [
    {
        id:1,
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8f752e05/products/NIDQ8024-252/NIDQ8024-252-1.JPG',
        nombre:'Short Básquet Jordan Flight Mvp Hombre',
        categoria: 'Ropa',
        precio:130,
        stock:9,
    },
    {
        id:2,
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf913d7ba/products/NI_955175-023/NI_955175-023-1.JPG',
        nombre:'Remera Jordan Short Sleeve Graphic',
        categoria:'Ropa',
        precio:130,
        stock:9,
    },
    {
        id:3,
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw91ebbca3/products/ADIB1411/ADIB1411-1.JPG',
        nombre:'Campera adidas Adicolor Classics Ssst Hombre',
        categoria:'Ropa',
        precio:350,
        stock:10,
    },
    {
        id:4,
        img:'https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/g/o/gorra-new-era-new-york-knicks-59fifty-dual-logo-60288038-1_2.jpg',
        nombre:'Gorra New Era New York Knicks 59FIFTY Dual Logo',
        categoria:'Ropa',
        precio:80,
        stock:4,
    },
    {
        id:5,
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw91ebbca3/products/ADIB1411/ADIB1411-1.JPG',
        nombre:'Campera adidas Adicolor Classics Ssst Hombre',
        categoria:'Ropa',
        precio:120,
        stock:3,
    },
    {
        id:6,
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw91ebbca3/products/ADIB1411/ADIB1411-1.JPG',
        nombre:'Campera adidas Adicolor Classics Ssst Hombre',
        categoria:'Ropa',
        precio:120,
        stock:6,
    },
    {
        id:7,
        img:'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw91ebbca3/products/ADIB1411/ADIB1411-1.JPG',
        nombre:'Campera adidas Adicolor Classics Ssst Hombre',
        categoria:'Ropa',
        precio:120,
        stock:7,
    },
    {
        id:8,
        img:'https://media.newera.com.ar/catalog/product/cache/06cfaa02c67cf3a5c3c05d775284c631/7/0/70343295-gorra-new-era-chicago-bulls-59fifty-otc_1_11.jpg',
        nombre:'Gorra New Era Chicago Bulls 59FIFTY',
        categoria:'Ropa',
        precio:75,
        stock:12,
    },
]


export default prodsIndumentaria;


export const IndumentariaListContainer = ({message}) => {
    const [pages, setPages] = useState(1)
    
    const handleNextPage = () =>{
        setPages(pages + 1)
    }

    const handlePrevPage = () =>{
        setPages(pages - 1)
    }

    return (
        <>
        <div className="indumentariaListContainer">
            <h1>{message}</h1>
            <Indumentaria prodsIndumentaria={prodsIndumentaria}/>
            <div className="pages">
                    {pages > 1 && <Button className='prev' text={<BsArrowLeftCircle/>} onClick={handlePrevPage}/>}
                    <strong className="numberPage">{pages}</strong>
                    <Button className='next' text={<BsArrowRightCircle/>} onClick={handleNextPage} />
            </div>
        </div>
        </>
    )
}
