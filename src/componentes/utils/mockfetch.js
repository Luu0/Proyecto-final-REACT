const products = [ // simulamos una respuesta de una API
    {id: 1, name: 'Mancuerna 3kg', category:"Mancuerna", price: 2000, stock: 500, description: 'Marcuerna 3kg hexagonales pvc', imageUrl: 'https://d22fxaf9t8d39k.cloudfront.net/c860055f853fbcf84836b7d1fa43da5b96d95943da4efa5e46acfb6e2181121463587.jpg'},
    {id: 2, name: 'Mancuerna 5kg', category:"Mancuerna", price: 10000, stock: 100, description: 'Mancuerna 5kg hexagonales de goma.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_966205-MLA50742744742_072022-O.webp'},
    {id: 3, name: 'Mancuerna 10kg', category:"Mancuerna", price: 20000, stock: 100, description: 'Mancuernas 10kg hexagonales de goma.', imageUrl: 'https://images.fravega.com/f500/49bc3af143de171af71dbbd432fc22a2.jpg'},
    {id: 4, name: 'Mancuerna 15kg', category:"Mancuerna", price: 40000, stock: 100, description: 'Mancuernas 15kg hexagonales de goma.', imageUrl: 'https://http2.mlstatic.com/D_Q_NP_987043-MLA70513077888_072023-O.webp'},
    {id: 5, name: 'Mancuerna Ajutstable 23 kg', category:"Mancuerna", price: 100000, stock: 50, description: 'Mancuerna ajustable de hasta 23 kg.', imageUrl: 'https://m.media-amazon.com/images/I/41vzExADMLL.jpg'},
    {id: 6, name: 'Barra olimpica 20kg', category:"Barra", price: 50000, stock: 35, description: 'Barra olimpica de 2,2M 20 kg.', imageUrl: 'https://http2.mlstatic.com/D_Q_NP_666626-MLU70080273678_062023-O.webp'},
    {id: 7, name: 'Disco 2,5kg', category:"Disco", price: 5000, stock: 75, description: 'Disco goma olimpico 2,5kg.', imageUrl: 'https://authogar.vtexassets.com/arquivos/ids/182688-500-auto?v=1778907402&width=500&height=auto&aspect=true'},
    {id: 8, name: 'Disco 5kg', category:"Disco", price: 15000, stock: 125, description: 'Disco goma olimpico 5kg.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_623044-MLA47016966667_082021-O.webp'},
    {id: 9, name: 'Disco 10kg', category:"Disco", price: 30000, stock: 125, description: 'Disco goma olimpico 10kg.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_951708-MLA46271511547_062021-O.webp'},
    {id: 10, name: 'Disco 15kg', category:"Disco", price: 50000, stock: 50, description: 'Disco goma olimpico 15kg.', imageUrl: 'https://www.ksportslaserena.cl/cdn/shop/products/DiscoProBumber15kg_250x250@2x.png?v=1634931095'},
    {id: 11, name: 'Disco 20kg', category:"Disco", price: 60000, stock: 80, description: 'Disco goma olimpico 20kg.', imageUrl: 'https://www.ksportslaserena.cl/cdn/shop/products/DiscoProBumber20kg_250x250@2x.png?v=1634931230'}
]

export const mFetch = (pid) => new Promise ((res, rej) => {
    setTimeout(() => {
      res(pid ? products.find(product => product.id === pid) : products) 
    }, 2000);
  
})

