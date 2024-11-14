let cacheName = "pwa-receitas";
//let filesToCache = ["/", "/index.html", "/manifest.json", "/Doces/doces", "/Doces/brownie", "/imagens"];
let filesToCache = ["/", "/index.html", "/manifest.json", "/js/main.js",
"/Carnes/carnes", "/Carnes/BifeParmegiana", "/Carnes/fileMignon", "/Carnes/lombo", 
"/Doces/doces", "/Doces/brigadeiro", "/Doces/brownie", "/Doces/tortaDeLimao",
"/Massas/massas", "/Massas/fettuccine", "/Massas/lasanha", "/Massas/spaghetti", 
"/css/bifePamergiana.css", "/css/brigadeiro.css", "/css/brownie.css", "/css/carnes.css", "/css/doces.css", "/css/fettuccine.css",
"/css/fileMignon.css", "/css/index.css", "/css/lasanha.css", "/css/lombo.css", "/css/massas.css", "/css/spaghetti.css", "/css/tortaLimao.css",
"/imagens/bife-a-parmegiana.jpg", "/imagens/brigadeiro.jpg", "/imagens/brownie.jpg", "/imagens/carnes.jpg", "/imagens/doces.jpg",
"/imagens/fettuccine.jpg", "/imagens/file-mignon.jpg", "/imagens/lasanha.jpg", "/imagens/lombo-com-molho-agridoce.jpg","/imagens/massas.jpg",
"/imagens/spaghetti.jpg", "/imagens/torta-de-limão.jpg", "/imagens", "favicon.ico"
];

/*inicializando a service worker e fazendo o download do conteúdo da aplicação */

self.addEventListener("install", (e) => {

    e.waitUntil(caches.open(cacheName).then(function (cache) { return cache.addAll(filesToCache); }));
});

/*disponibilizando o conteudo quando estiver offline */

self.addEventListener("fetch", (e) => {

    e.respondWith(

        caches.match(e.request).then((response) => {

            return response || fetch(e.request);

        })
    );
});