const menu = [{
        title: "slow roasted beef",
        products: [{
                name: "Classic Beef & Cheddar",
                slug: "classic-beef-n-cheddar",
                calories: 450,
                description: "",
                calories_description: "",
                type: 2, // keep it false if the product should not show the type or "1" for classic, "2" for double and "3" for half pound
                image: require("~/assets/images/beef_n_cheddar_1.png"),
            },
            {
                name: "double beef & cheddar",
                slug: "double-beef-n-cheddar",
                calories: 630,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_beef_n_cheddar.png"),
            },
            {
                name: "HALF POUND BEEF & CHEDDAR",
                calories: 740,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/half_pound_beef_n_cheddar.png"),
            },
            {
                name: "Classic Roast Beef",
                calories: 306,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/classic_roasted_beef.png"),
            },
            {
                name: "DOUBLE ROAST BEEF",
                slug: "",
                calories: 506,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_roasted_beef.png"),
            },
            {
                name: "HALF POUND ROAST BEEF",
                calories: 610,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/half_pound_roasted_beef.png"),
            },
            {
                name: "Deluxe Beef & Cheddar",
                calories: 460,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/deluxe_beef_n_cheddar.png"),
            },
            {
                name: "double Deluxe Beef & Cheddar",
                slug: "",
                calories: 640,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_deluxe_beef_n_cheddar.png"),
            },
            {
                name: "half pound Deluxe Beef & Cheddar",
                slug: "",
                calories: 750,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/half_pound_deluxe_beef_n_cheddar.png"),
            },
        ],
    },
    {
        title: "Slow Smoked Beef brisket",
        products: [{
                name: "Smokehouse Beef Brisket",
                slug: "",
                calories: 360,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/smokehouse_beef_brisket.png"),
            },
            {
                name: "Deluxe Smokehouse Beef Brisket",
                slug: "",
                calories: 690,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_smokehouse_beef_brisket.png"),
            },
        ],
    },
    {
        title: "Sweet & Smoked Pork",
        products: [{
                name: "pulled pork",
                slug: "",
                calories: 560,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/pulled_pork.png"),
            },
            {
                name: "Triple Thick BLT",
                slug: "",
                calories: 540,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/tripple_thick_blt.png"),
            },
        ],
    },
    {
        title: "Turkey",
        products: [{
                name: "Turkey Avocado Bacon Club",
                slug: "",
                calories: 730,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/TurkeyAvocadoClub_full build 1.png"),
            },
            {
                name: "Triple Cheese Turkey BLT",
                slug: "",
                calories: 780,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Triple Cheese Turkey BLT 1.png"),
            },
            {
                name: "Roast Turkey & Swiss",
                slug: "",
                calories: 720,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/TurkeySwiss_Full Build 1.png"),
            },
            {
                name: "Roast Turkey Ranch & Bacon",
                slug: "",
                calories: 810,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Website_MF_Sandwich_TBR 1.png"),
            },
        ],
    },
    {
        title: "roasted chicken",
        products: [{
                name: "Classic Roasted Chicken",
                slug: "",
                calories: 370,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/ClassicRoastChicken_full build 1.png"),
            },
            {
                name: "CHICKEN BACON SWISS",
                slug: "",
                calories: 610,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Chicken_Chicken_Bacon_Swiss_Roast 1.png"),
            },
            {
                name: "Chicken Club Wrap",
                slug: "",
                calories: 650,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/chicken_club_wrap.png"),
            },
        ],
    },
    {
        title: "crispy chicken",
        products: [{
                name: "Classic Crispy Chicken",
                slug: "",
                calories: 510,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/ClassicRoastChicken_full build 1.png"),
            },
            {
                name: "Chicken Bacon Swiss ",
                slug: "",
                calories: 610,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Chicken_Chicken_Bacon_Swiss_Roast 1.png"),
            },
            {
                name: "Crispy Chicken & Cheese",
                slug: "",
                calories: 610,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/chicken_club_wrap.png"),
            },
            {
                name: "Chicken Tenders",
                slug: "",
                nutrations: [{
                        piezas: 3,
                        caloriaz: 370,
                    },
                    {
                        piezas: 5,
                        caloriaz: 610,
                    },
                ],
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/chicken_tender.png"),
            },
        ],
    },
    {
        title: "Acompañantes",
        products: [{
                name: "curly fries",
                slug: "",
                calories: "S 410 | M 550, L 650",
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Website_Side_Fries_Small 1.png"),
            },
            {
                name: "Loaded Curly Fries",
                slug: "",
                calories: 670,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Loaded Curly Fries.png"),
            },
            {
                name: "Onion Rings",
                slug: "",
                nutrations: [{ piezas: 2, caloriaz: 466 }],
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/ARB19_OnionRings_silo 1.png"),
            },
            {
                name: "side salad",
                slug: "",
                calories: 80,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/side salad.png"),
            },
            {
                name: "Potato cakes",
                slug: "",
                nutrations: [
                    { piezas: 2, caloriaz: 250 },
                    { piezas: 3, caloriaz: 370 },
                    { piezas: 4, caloriaz: 490 },
                ],
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/potato cakes.png"),
            },
            {
                name: "Mozzarella Sticks",
                slug: "",
                nutrations: [
                    { piezas: 4, caloriaz: 440 },
                    { piezas: 6, caloriaz: 650 },
                ],
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Mozzarella Sticks.png"),
            },
        ],
    },
    {
        title: "batidas",
        products: [{
                name: "Jamocha",
                slug: "",
                calories: "S 590 | M 830 | L 1060",
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Jamocha.png"),
            },
            {
                name: "Chocolate",
                slug: "",
                calories: "S 590 | M 830 | L 1050",
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/chocolate.png"),
            },
            {
                name: "Vainilla",
                slug: "",
                calories: "S 490 | M 690 | L 900",
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Vainilla.png"),
            },
        ],
    },
    {
        title: "postres",
        products: [{
                name: "Triple Chocolate",
                slug: "",
                calories: 450,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Triple Chocolate.png"),
            },
            {
                name: "Salted Caramel",
                slug: "",
                calories: 430,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Salted Caramel.png"),
            },
            {
                name: "Apple turnover",
                slug: "",
                calories: 390,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Apple turnover.png"),
            },
            {
                name: "Cherry turnover",
                slug: "",
                calories: 430,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Cherry turnover.png"),
            },
            {
                name: "quesito",
                slug: "",
                calories: 340,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Quesito-01 1.png"),
            },
        ],
    },
    {
        title: "Bebidas",
        products: [{
                name: "Coca-Cola",
                slug: "",
                calories: 160,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Website_Bev_Coke 1.png"),
            },
            {
                name: "Coca Cola Zero Sugar",
                slug: "",
                calories: 0,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Coca Cola Zero Sugar.png"),
            },
            {
                name: "Diet Coke",
                slug: "",
                calories: 0,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Diet Coke.png"),
            },
            {
                name: "Sprite",
                slug: "",
                calories: 160,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Sprite.png"),
            },
            {
                name: "HI-C Fruit Punch",
                slug: "",
                calories: 170,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/HI-C Fruit Punch.png"),
            },
            {
                name: "Fanta",
                slug: "",
                calories: 170,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Fanta.png"),
            },
        ],
    },
    {
        title: "desayuno",
        subtitle: "(HASTA LAS 10:30 AM)",
        products: [{
                name: "Tostadas con Mantequilla",
                slug: "",
                calories: 470,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/ARBYS DESAYUNO-2 1.png"),
            },
            {
                name: "Tostadas con Queso",
                slug: "",
                calories: 700,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/ARBYS DESAYUNO-7 1.png"),
            },
            {
                name: "Revoltillo al Plato",
                slug: "",
                calories: "160 - 200",
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/EggPlatterSinglePotatoCake_silo.png"),
            },
            {
                name: "Revoltillo deluxe al plato",
                slug: "",
                calories: "180 - 200",
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/EggPlatter_DeluxeSinglePotatoCake_silo.png"),
            },
            {
                name: "Sandwich de Jamón o Bacon",
                slug: "",
                calories: 840,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Img_Brkfst_Criollo_BaconEggCheese.png"),
            },
            {
                name: "Criollo Sandwich",
                slug: "",
                calories: 820,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Img_Brkfst_Criollo_HamBaconEggCheese.png"),
            },
            {
                name: "Avocado Sandwich Jamón o Bacon y queso suizo",
                slug: "",
                calories: 810,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/Img_Brkfst_Criollo_AvocadoHamCheese.png"),
            },
            {
                name: "Café negro",
                slug: "",
                calories: 0,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Café espresso con leche",
                slug: "",
                calories: 50,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Cappuccino",
                slug: "",
                calories: 70,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Chocolate",
                slug: "",
                calories: 220,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Mochaccino",
                slug: "",
                calories: 130,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "French vanilla",
                slug: "",
                calories: 130,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Café Cortadito",
                slug: "",
                calories: 15,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Doble espresso americano",
                slug: "",
                calories: 0,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Cappuccino vainilla",
                slug: "",
                calories: 190,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
            {
                name: "Choco vainilla",
                slug: "",
                calories: 220,
                description: "",
                calories_description: "",
                type: false,
                //image: require("~/assets/images/NESCAFE-ARBYS- CAFÉ_1 copy 2.png"),
                image: require("~/assets/images/NESCAFE-ARBYS-LOGOpng 1.png"),
            },
        ],
    },
    //
];

const menuDeNinos = [{
        title: "slow roasted beef",
        products: [{
                name: "Classic Beef & Cheddar",
                slug: "",
                calories: 450,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/beef_n_cheddar_1.png"),
            },
            {
                name: "double beef & cheddar",
                slug: "",
                calories: 630,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_beef_n_cheddar.png"),
            },
            {
                name: "HALF POUND BEEF & CHEDDAR",
                slug: "",
                calories: 740,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/half_pound_beef_n_cheddar.png"),
            },
            {
                name: "Classic Roast Beef",
                slug: "",
                calories: 306,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/classic_roasted_beef.png"),
            },
            {
                name: "DOUBLE ROAST BEEF",
                slug: "",
                calories: 506,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_roasted_beef.png"),
            },
            {
                name: "HALF POUND ROAST BEEF",
                slug: "",
                calories: 610,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/half_pound_roasted_beef.png"),
            },
            {
                name: "Deluxe Beef & Cheddar",
                slug: "",
                calories: 460,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/deluxe_beef_n_cheddar.png"),
            },
            {
                name: "double Deluxe Beef & Cheddar",
                slug: "",
                calories: 640,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_deluxe_beef_n_cheddar.png"),
            },
            {
                name: "half pound Deluxe Beef & Cheddar",
                slug: "",
                calories: 750,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/half_pound_deluxe_beef_n_cheddar.png"),
            },
        ],
    },
    {
        title: "Slow Smoked Beef brisket",
        products: [{
                name: "Smokehouse Beef Brisket",
                slug: "",
                calories: 360,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/smokehouse_beef_brisket.png"),
            },
            {
                name: "Deluxe Smokehouse Beef Brisket",
                slug: "",
                calories: 690,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/double_smokehouse_beef_brisket.png"),
            },
        ],
    },
    {
        title: "Sweet & Smoked Pork",
        products: [{
                name: "pulled pork",
                slug: "",
                calories: 560,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/pulled_pork.png"),
            },
            {
                name: "Triple Thick BLT",
                slug: "",
                calories: 540,
                description: "",
                calories_description: "",
                type: false,
                image: require("~/assets/images/tripple_thick_blt.png"),
            },
        ],
    },
];

export {
    menuDeNinos,
    menu
}