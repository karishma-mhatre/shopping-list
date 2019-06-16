import {v4 as uuid } from 'uuid';

const products = [
    {
        id: uuid(),
        type: "T-Shirts",
        title: "A",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Av",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Ave",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Aven",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Aveng",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Avenge",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Avenger",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-S",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399
    },
    {
        id: uuid(),
        type: "T-Sh",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399
    },
    {
        id: uuid(),
        type: "T-Shi",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
    },
    {
        id: uuid(),
        type: "T-Shir",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399
    },
    {
        id: uuid(),
        type: "T-Shirt",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399
    }
]
export function getTShirts() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(products);
        }, 1000);
    });
}