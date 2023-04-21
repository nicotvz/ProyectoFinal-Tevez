// const products = [
//   {
//     id: "intel-i5",
//     name: "Intel i5 12600K",
//     price: 100999,
//     category: "procesadores",
//     img: "/images/i5.png",
//     description: "10 cores, up to 4.90 GHz",
//     stock: 7,
//   },
//   {
//     id: "intel-i7",
//     name: "Intel i7 12700K",
//     price: 155999,
//     category: "procesadores",
//     img: "/images/i7.png",
//     description: "12 cores, up to 5.00 GHz",
//     stock: 9,
//   },
//   {
//     id: "intel-i9",
//     name: "Intel i9 12900k",
//     price: 189999,
//     category: "procesadores",
//     img: "/images/i9.png",
//     description: "16 cores, up to 5.20 GHz",
//     stock: 5,
//   },
//   {
//     id: "msi-690",
//     name: "MSi Z690 Carbon WiFi",
//     price: 128999,
//     category: "motherboards",
//     img: "/images/msi.png",
//     description: "",
//     stock: 14,
//   },
//   {
//     id: "aorus-690",
//     name: "Aorus Z690 Master",
//     price: 133999,
//     category: "motherboards",
//     img: "/images/aorus.png",
//     description: "",
//     stock: 12,
//   },
//   {
//     id: "asus-690",
//     name: "Asus ROG Strix Z690-F WiFi",
//     price: 139999,
//     category: "motherboards",
//     img: "/images/asus.png",
//     description: "",
//     stock: 8,
//   },
//   {
//     id: "corsair-8",
//     name: "Corsair Vengeance Pro",
//     price: 24999,
//     category: "memorias-ram",
//     img: "/images/vengeance.png",
//     description: "8gb 3200mhz",
//     stock: 0,
//   },
//   {
//     id: "corsair-16",
//     name: "Corsair Vengeance Pro",
//     price: 37999,
//     category: "memorias-ram",
//     img: "/images/vengeance2.png",
//     description: " 2x8gb 3200mhz",
//     stock: 11,
//   },
//   {
//     id: "msi-3060",
//     name: "MSi Gaming Z Trio",
//     price: 166999,
//     category: "placas-de-video",
//     img: "/images/3060.png",
//     description: "12gb GDDR6",
//     stock: 5,
//   },
//   {
//     id: "aorus-3070",
//     name: "Aorus Master GeForce RTX 3070 8gb",
//     price: 284999,
//     category: "placas-de-video",
//     img: "/images/3070.png",
//     description: "8gb GDDR6",
//     stock: 9,
//   },
//   {
//     id: "asus-3080",
//     name: "Asus ROG Strix GeForce RTX 3080 10gb",
//     price: 449999,
//     category: "placas-de-video",
//     img: "/images/3080.png",
//     description: "10gb GDDR6",
//     stock: 3,
//   },
//   {
//     id: "seasonic-750",
//     name: "Seasonic Focus GX-750 750w",
//     price: 31999,
//     category: "fuentes",
//     img: "/images/seasonic1.png",
//     description: "80Plus Gold",
//     stock: 6,
//   },
//   {
//     id: "seasonic-850",
//     name: "Seasonic Focus GX-850 850w",
//     price: 45999,
//     category: "fuentes",
//     img: "/images/seasonic2.png",
//     description: "80Plus Gold",
//     stock: 8,
//   },
//   {
//     id: "seasonic-1000",
//     name: "Seasonic Focus GX-1000 1000w",
//     price: 52999,
//     category: "fuentes",
//     img: "/images/seasonic3.png",
//     description: "80Plus Gold",
//     stock: 5,
//   },
// ];

// export const getProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 1000);
//   });
// };

// export const getProductsByCategory = (categoryId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products.filter((prod) => prod.category === categoryId));
//     }, 1000);
//   });
// };

// export const getProductById = (productId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products.find((prod) => prod.id === productId));
//     }, 1000);
//   });
// };
