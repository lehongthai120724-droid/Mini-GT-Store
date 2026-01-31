const products = [
//porsche
    {
id: 1,name: "Porsche 911 GT3",brand:"porsche",price: 450000,image:"./image/porsche/porsche_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 2,name: "Porsche 911 Turbo S",brand:"porsche",price: 450000,image:"./image/porsche/porsche_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 3,name: "Porsche 911 R",brand:"porsche",price: 450000,image:"./image/porsche/porsche_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 4,name: "Porsche 918 Spyder",brand:"porsche",price: 450000,image:"./image/porsche/porsche_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},{
id: 5,name: "Porsche Cayman GT4",brand:"porsche",price: 450000,image:"./image/porsche/porsche_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 6,name: "Porsche 911 Carrera S",brand:"porsche",price: 450000,image:"./image/porsche/porsche_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 7,name: "Porsche Taycan Turbo",brand:"porsche",price: 450000,image:"./image/porsche/porsche_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 8,name: "Porsche 911 Targa 4S",brand:"porsche",price: 450000,image:"./image/porsche/porsche_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 9,name: "Porsche 935",brand:"porsche",price: 450000,image:"./image/porsche/porsche_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 10,name: "Porsche 356 Speedster",brand:"porsche",price: 450000,image:"./image/porsche/porsche_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//toyota
{
id:11 ,name: "Toyota GR Supra A90",brand:"toyota",price: 450000,image:"./image/toyota/toyota_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:12 ,name: "Toyota GR Supra A80",brand:"toyota",price: 450000,image:"./image/toyota/toyota_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 13,name: "Toyota GR86",brand:"toyota",price: 450000,image:"./image/toyota/toyota_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:14 ,name: "Toyota Corolla",brand:"toyota",price: 450000,image:"./image/toyota/toyota_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:15 ,name: "Toyota Celica GT-Four",brand:"toyota",price: 450000,image:"./image/toyota/toyota_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:16 ,name: "Toyota 2000GT",brand:"toyota",price: 450000,image:"./image/toyota/toyota_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:17 ,name: "Toyota Crown Athlete",brand:"toyota",price: 450000,image:"./image/toyota/toyota_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:18 ,name: "Toyota Land Cruiser 70",brand:"toyota",price: 450000,image:"./image/toyota/toyota_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 19,name: "Toyota Celica LB Turbo",brand:"toyota",price: 450000,image:"./image/toyota/toyota_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 20,name: "Toyota MR2",brand:"toyota",price: 450000,image:"./image/toyota/toyota_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//bmw
{
id: 21,name: "BMW M3 E30",brand:"bmw",price: 450000,image:"./image/bmw/bmw_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:22 ,name: "BMW M3 E46",brand:"bmw",price: 450000,image:"./image/bmw/bmw_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:23 ,name: "BMW M4 GTS",brand:"bmw",price: 450000,image:"./image/bmw/bmw_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:24 ,name: "BMW M5 E39",brand:"bmw",price: 450000,image:"./image/bmw/bmw_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:25 ,name: "BMW i8",brand:"bmw",price: 450000,image:"./image/bmw/bmw_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:26 ,name: "BMW Z4 M",brand:"bmw",price: 450000,image:"./image/bmw/bmw_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:27 ,name: "BMW 2002 Turbo",brand:"bmw",price: 450000,image:"./image/bmw/bmw_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:28 ,name: "BMW 1M Coupe",brand:"bmw",price: 450000,image:"./image/bmw/bmw_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:29 ,name: "TBMW M2 Competition",brand:"bmw",price: 450000,image:"./image/bmw/bmw_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:30 ,name: "BMW M6",brand:"bmw",price: 450000,image:"./image/bmw/bmw_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//bugati
{
id:31 ,name: "Bugatti Chiron",brand:"bugatti",price: 450000,image:"./image/bu/bu_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:32 ,name: "Bugatti Veyron",brand:"bugatti",price: 450000,image:"./image/bu/bu_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:33 ,name: "Bugatti Divo",brand:"bugatti",price: 450000,image:"./image/bu/bu_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:34 ,name: "Bugatti Chiron Pur Sport",brand:"bugatti",price: 450000,image:"./image/bu/bu_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:35 ,name: "Bugatti EB110",brand:"bugatti",price: 450000,image:"./image/bu/bu_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:36 ,name: "Bugatti Type 57SC",brand:"bugatti",price: 450000,image:"./image/bu/bu_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:37 ,name: "Bugatti Centodieci",brand:"bugatti",price: 450000,image:"./image/bu/bu_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:38 ,name: "Bugatti La Voiture Noire",brand:"bugatti",price: 450000,image:"./image/bu/bu_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:39 ,name: "Bugatti 16C Galibier",brand:"bugatti",price: 450000,image:"./image/bu/bu_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 40,name: "Bugatti Vision Gran Turismo",brand:"bugatti",price: 450000,image:"./image/bu/bu_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//ford
{
id: 41,name: "Ford GT (2017)",brand:"ford",price: 450000,image:"./image/ford/ford_.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 42,name: "Ford GT40",brand:"ford",price: 450000,image:"./image/ford/ford_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 43,name: "Ford Mustang GT",brand:"ford",price: 450000,image:"./image/ford/ford_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 44,name: "Ford Mustang Shelby GT500",brand:"ford",price: 450000,image:"./image/ford/ford_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 45,name: "Ford Escort Cosworth",brand:"ford",price: 450000,image:"./image/ford/ford_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 46,name: "Ford Fiesta ST",brand:"ford",price: 450000,image:"./image/ford/ford_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 47,name: "Ford Focus RS",brand:"ford",price: 450000,image:"./image/ford/ford_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:48 ,name: "Ford Capri RS3100",brand:"ford",price: 450000,image:"./image/ford/ford_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 49,name: "Ford Bronco",brand:"ford",price: 450000,image:"./image/ford/ford_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:50 ,name: "Ford F-150 Raptor",brand:"ford",price: 450000,image:"./image/ford/ford_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//honda
{
id:51 ,name: "Honda NSX NA1",brand:"honda",price: 450000,image:"./image/honda/honda_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:52 ,name: "Honda NSX-R",brand:"honda",price: 450000,image:"./image/honda/honda_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:53 ,name: "Honda NSX GT500",brand:"honda",price: 450000,image:"./image/honda/honda_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:54 ,name: "Honda Civic Type R FK8",brand:"honda",price: 450000,image:"./image/honda/honda_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:55 ,name: "Honda Civic EG6",brand:"honda",price: 450000,image:"./image/honda/honda_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:56 ,name: "Honda S2000",brand:"honda",price: 450000,image:"./image/honda/honda_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:57 ,name: "Honda Accord Euro R",brand:"honda",price: 450000,image:"./image/honda/honda_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:58 ,name: "Honda Beat",brand:"honda",price: 450000,image:"./image/honda/honda_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:59 ,name: "Honda Integra Type R",brand:"honda",price: 450000,image:"./image/honda/honda_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 60,name: "Honda City Turbo",brand:"honda",price: 450000,image:"./image/honda/honda_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//lambo
{
id: 61,name: "Lamborghini Aventador SVJ",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 62,name: "Lamborghini Huracán STO",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 63,name: "Lamborghini Murciélago",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 64,name: "Lamborghini Gallardo LP570",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:65 ,name: "Lamborghini Sián FKP 37",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:66 ,name: "Lamborghini Urus",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:67 ,name: "Lamborghini Diablo VT",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:68 ,name: "Lamborghini Countach",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:69 ,name: "Lamborghini Aventador LP700",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:70 ,name: "Lamborghini Huracán GT3 EVO",brand:"lamborghini",price: 450000,image:"./image/lambo/lambo_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//mclaren
{
id:71 ,name: "McLaren 720S",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:72 ,name: "McLaren 650S",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:73 ,name: "McLaren P1",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:74 ,name: "McLaren Senna",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 75,name: "McLaren 570S",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 76,name: "McLaren Artura",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 77,name: "McLaren 675LT",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 78,name: "McLaren 600LT",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 79,name: "McLaren Elva",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id: 80,name: "McLaren 12C",brand:"mclaren",price: 450000,image:"./image/mclaren/mclaren_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//mer
{
id: 81,name: "Mercedes AMG GT R",brand:"mercedes",price: 450000,image:"./image/mer/mer_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:82 ,name: "Mercedes 300SL Gullwing",brand:"mercedes",price: 450000,image:"./image/mer/mer_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:83 ,name: "Mercedes SLS AMG",brand:"mercedes",price: 450000,image:"./image/mer/mer_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:84 ,name: "Mercedes C63 AMG",brand:"mercedes",price: 450000,image:"./image/mer/mer_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:85,name: "Mercedes E55 AMG",brand:"mercedes",price: 450000,image:"./image/mer/mer_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:86,name: "Mercedes G63 AMG",brand:"mercedes",price: 450000,image:"./image/mer/mer_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:87,name: "Mercedes CLK GTR",brand:"mercedes",price: 450000,image:"./image/mer/mer_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:88,name: "Mercedes 190E 2.5-16",brand:"mercedes",price: 450000,image:"./image/mer/mer_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:89,name: "Mercedes SLK 55 AMG",brand:"mercedes",price: 450000,image:"./image/mer/mer_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:90,name: "Mercedes S-Class W140",brand:"mercedes",price: 450000,image:"./image/mer/mer_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
//nissan
{
id:91 ,name: "Nissan GT-R R35",brand:"nissan",price: 450000,image:"./image/nissan/nissan_1.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:92 ,name: "Nissan 370Z",brand:"nissan",price: 450000,image:"./image/nissan/nissan_2.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:93 ,name: "Nissan Silvia S15",brand:"nissan",price: 450000,image:"./image/nissan/nissan_3.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:94 ,name: "Nissan Skyline GT-R R34",brand:"nissan",price: 450000,image:"./image/nissan/nissan_4.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:95 ,name: "Nissan Skyline GT-R R32",brand:"nissan",price: 450000,image:"./image/nissan/nissan_5.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:96 ,name: "Nissan 300ZX Z32",brand:"nissan",price: 450000,image:"./image/nissan/nissan_6.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:97 ,name: "Nissan Fairlady Z",brand:"nissan",price: 450000,image:"./image/nissan/nissan_7.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:98 ,name: "Nissan GT-R NISMO",brand:"nissan",price: 450000,image:"./image/nissan/nissan_8.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:99 ,name: "Nissan Skyline C110 (Kenmeri)",brand:"nissan",price: 450000,image:"./image/nissan/nissan_9.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
{
id:100 ,name: "Nissan March Super Turbo",brand:"nissan",price: 450000,image:"./image/nissan/nissan_10.jpg",scale: "1:64",material: "Kim loại + nhựa"
},
]