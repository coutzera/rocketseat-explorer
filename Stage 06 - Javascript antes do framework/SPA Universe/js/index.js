import { Router } from './router.js'

const router = new Router();
router.add("/", "http://127.0.0.1:5500/Stage%2006%20-%20Javascript%20antes%20do%20framework/pages/home.html");
router.add("/universe", "http://127.0.0.1:5500/Stage%2006%20-%20Javascript%20antes%20do%20framework/pages/universe.html");
router.add("/exploration", "http://127.0.0.1:5500/Stage%2006%20-%20Javascript%20antes%20do%20framework/pages/exploration.html");
router.add(404, "http://127.0.0.1:5500/Stage%2006%20-%20Javascript%20antes%20do%20framework/pages/404.html");

// Lida com o redirecionamento quando a página é carregada
router.handle();

// Lida com o redirecionamento quando o botão "voltar" do navegador é pressionado
window.onpopstate = () => router.handle();

// Função para redirecionar manualmente
window.route = (event) => router.navigate(event);

// Exemplo de uso: route({ target: { href: '/' } }); // Redireciona para a página inicial
