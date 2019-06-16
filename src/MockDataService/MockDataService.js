import {v4 as uuid } from 'uuid';

const products = [
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Avengers Endgame: Initiative",
        price: 499,
        exclusivePrice: 399,
        theme: "Marvel",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Marvel: More Than A Fan",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Avengers Endgame: Legendary",
        price: 499,
        exclusivePrice: 399,
        theme: "Marvel",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Iron Man: Arc Reactor Elemental (Glow in the Dark)",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Black Panther: T'Challa's Necklace",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Marvel: Logo",
        price: 499,
        exclusivePrice: 399,
        theme: "Marvel",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "T-Shirts",
        title: "Captain America: Logo",
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
        type: "Full-Sleeve T-Shirts",
        title: "GOT: Three Dragon",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "DC",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "Aladin",
        genere: "Disney"
    },
    {
        id: uuid(),
        type: "Full-Sleeve T-Shirts",
        title: "Avengers",
        price: 499,
        exclusivePrice: 399,
        theme: "DC",
        genere: "Disney"
    }
]
export function getTShirts() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(products);
        }, 1000);
    });
}