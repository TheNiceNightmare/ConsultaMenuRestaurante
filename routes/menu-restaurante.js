const express = require('express');

const router = express.Router();

const MENU = [
    [
        {
            id: "1",
            plato: "Filete Mignon",
            descripción: "Jugoso filete de ternera servido con una guarnición de vegetales frescos y puré de patatas.",
            precio: "$25.99",
            categoría: "Carnes"
        },
        {
            id: "2",
            plato: "Salmón a la Parrilla",
            descripción: "Filete de salmón fresco asado a la parrilla y acompañado de arroz pilaf y espárragos.",
            precio: "$22.50",
            categoría: "Pescados"
        },
        {
            id: "3",
            plato: "Ensalada César",
            descripción: "Mezcla de lechugas frescas, crutones, queso parmesano y aderezo César.",
            precio: "$12.99",
            categoría: "Ensaladas"
        },
        {
            id: "4",
            plato: "Pizza Margarita",
            descripción: "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca.",
            precio: "$15.99",
            categoría: "Pizzas"
        },
        {
            id: "5",
            plato: "Pasta Alfredo",
            descripción: "Pasta fettuccine servida con una cremosa salsa Alfredo y pollo a la parrilla.",
            precio: "$18.50",
            categoría: "Pastas"
        },
        {
            id: "6",
            plato: "Sopa de Tomate",
            descripción: "Sopa caliente de tomate fresco con hierbas aromáticas y un toque de crema.",
            precio: "$8.99",
            categoría: "Sopas"
        },
        {
            id: "7",
            plato: "Hamburguesa Clásica",
            descripción: "Carne de res a la parrilla servida con lechuga, tomate, cebolla y papas fritas.",
            precio: "$14.99",
            categoría: "Hamburguesas"
        },
        {
            id: "8",
            plato: "Sushi Variado",
            descripción: "Variedad de sushi fresco incluyendo rollos de salmón, atún y aguacate.",
            precio: "$20.99",
            categoría: "Sushi"
        },
        {
            id: "9",
            plato: "Pollo a la Parrilla",
            descripción: "Pechuga de pollo a la parrilla con una mezcla de especias y vegetales asados.",
            precio: "$16.50",
            categoría: "Carnes"
        },
        {
            id: "10",
            plato: "Camarones al Ajillo",
            descripción: "Camarones grandes salteados en aceite de oliva, ajo y perejil.",
            precio: "$19.99",
            categoría: "Mariscos"
        },
        {
            id: "11",
            plato: "Risotto de Champiñones",
            descripción: "Arroz cremoso cocido lentamente con champiñones frescos y queso parmesano.",
            precio: "$17.50",
            categoría: "Risottos"
        },
        {
            id: "12",
            plato: "Burrito de Carne",
            descripción: "Tortilla de trigo rellena de carne de res, frijoles, arroz y salsa picante.",
            precio: "$13.99",
            categoría: "Mexicana"
        },
        {
            id: "13",
            plato: "Ensalada de Frutas",
            descripción: "Selección de frutas frescas de temporada cortadas en trozos y servidas con yogur.",
            precio: "$10.50",
            categoría: "Ensaladas"
        },
        {
            id: "14",
            plato: "Lasagna de Verduras",
            descripción: "Lasagna casera con capas de pasta, verduras frescas y salsa de tomate.",
            precio: "$16.99",
            categoría: "Pastas"
        },
        {
            id: "15",
            plato: "Tacos de Pescado",
            descripción: "Tortillas de maíz rellenas de pescado fresco, repollo, salsa de aguacate y lima.",
            precio: "$14.50",
            categoría: "Mexicana"
        },
        {
            id: "16",
            plato: "Pollo Tikka Masala",
            descripción: "Pollo marinado en especias, cocido en una salsa cremosa de tomate y servido con arroz basmati.",
            precio: "$18.99",
            categoría: "Internacional"
        },
        {
            id: "17",
            plato: "Parrillada Mixta",
            descripción: "Selección de carnes a la parrilla incluyendo pollo, res y cerdo, acompañadas de papas y vegetales.",
            precio: "$24.99",
            categoría: "Carnes"
        },
        {
            id: "18",
            plato: "Sándwich Cubano",
            descripción: "Pan cubano relleno de jamón, carne de cerdo, queso suizo, pepinillos y mostaza.",
            precio: "$13.50",
            categoría: "Sandwiches"
        },
        {
            id: "19",
            plato: "Sopa de Mariscos",
            descripción: "Caldo de mariscos con camarones, mejillones, calamares y pescado fresco.",
            precio: "$21.50",
            categoría: "Sopas"
        },
        {
            id: "20",
            plato: "Parrillada de Verduras",
            descripción: "Variedad de vegetales asados a la parrilla con hierbas y aceite de oliva.",
            precio: "$15.99",
            categoría: "Vegetariano"
        }
    ]
];
    
    
    

router.get('/', (req, res, next)=>{
    res.json({menu : MENU});
});

module.exports = router;

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get(':pid', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const formattedMenu = JSON.stringify(MENU, null, 2);
    res.send(formattedMenu);
});