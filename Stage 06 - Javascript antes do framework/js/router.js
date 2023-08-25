// Classe que lida com o roteamento das páginas
export class Router {
  // Objeto para armazenar as rote e suas páginas correspondentes
  routeMap = {};

  // Método para adicionar uma nova rote
  addRoute(routeName, page, backgroundPath) {
    // Armazena a página correspondente à rota
    this.routeMap[routeName] = page;
    // Define o caminho de fundo
    this.background = backgroundPath;
  }

  // Método para lidar com o redirecionamento de rota
  navigate(event) {
    // Garante que o evento seja válido
    event = event || window.event;
    event.preventDefault();

    // Atualiza a URL sem recarregar a página
    window.history.pushState({}, "", event.target.href);

    // Chama o método de manipulação
    this.handleRoute();
  }

  // Método para manipular a rota atual
  handleRoute() {
    const { pathname } = window.location;
    const route = this.routeMap[pathname] || this.routeMap[404];

    // Atualiza o plano de fundo
    this.changeBackground();

    // Busca a página correspondente à rota e a insere no elemento com id "app"
    fetch(route)
      .then(response => response.text())
      .then(html => {
        document.querySelector("#app").innerHTML = html;
      });

    // Exibe a rota no console
    console.log(route);
  }

  // Método para alterar o plano de fundo com base na rota
  changeBackground() {
    const { pathname } = window.location;
    const { body } = document;

    // Mapeia as rotas para classes de plano de fundo correspondentes
    const routeToBackgroundClass = {
      '/explore': 'explore-background',
      '/universe': 'universe-background',
      '/': 'home-background'
    };

    // Obtém a classe de plano de fundo correspondente à rota
    const backgroundClass = routeToBackgroundClass[pathname] || '';

    // Define a classe do corpo do documento para alterar o plano de fundo
    body.className = backgroundClass;
  }
}
