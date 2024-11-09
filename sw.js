let cacheName = "pwa-receitas";

let filesToCache = ["/", "/index.html", "/Carnes/BifeParmegiana", "/Carnes/carnes", "/Cares/fileMignon", "/Carnes/lombo", 
    "/Doces/brigadeiro", "/Doces/brownie","/Doces/doces", "/Doces/tortaDeLimao", 
    "/Massas/fettuccine", "/Massas/lasanha", "/Massas/massas", "/Massas/spaghetti", 
    "/css/bifePamergiana.css", "/css/brigadeiro.css", "/css/brownie.css", "/css/carnes.css", "/css/doces", "/css/fettuccine.css", "/css/fineMignon.css", "/css/index.css", 
    "/css/lasanha.css", "/css/lombo.css", "/css/massas.css", "/css/spaghetti.css", "/css/tortaLimao.css",
    "/imagens/bife-a-parmegiana.jpg", "/imagens/brigadeiro.jpg", "/imagens/brownie.jpg", "/imagens/carnes.jpg", "/imagens/doces.jpg", "/imagens/fettuccine.jpg", "/imagens/file-mignon",
    "/imagens/lasanha.css", "/imagens/lombo-com-molho-agridoce.jpg", "/imagens/massas.jpg", "/imagens/spaghetti.jpg", "/imagens/torta-de-limão.jpg", 
    "/js/main.js",
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