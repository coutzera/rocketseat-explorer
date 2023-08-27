import { Router } from './router.js'

const router = new Router();
router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/exploration.html");
router.add(404, "./pages/404.html");

// Lida com o redirecionamento quando a página é carregada
router.handle();

// Lida com o redirecionamento quando o botão "voltar" do navegador é pressionado
window.onpopstate = () => router.handle();

// Função para redirecionar manualmente
window.route = (event) => router.navigate(event);

// Exemplo de uso: route({ target: { href: '/' } }); // Redireciona para a página inicial
