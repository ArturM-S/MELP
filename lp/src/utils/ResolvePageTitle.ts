export function ResolvePageTitle(path: string): string {
  switch (path) {
    case '/':
      return 'Home';

    case '/Sobre':
      return 'Sobre';

    case '/marcas':
      return 'Marcas';

    case '/dark-kitchen':
      return 'Dark Kitchen';

    case '/politicas-de-privacidade':
      return 'Políticas de Privacidade';

    default:
      return '';
  }
}
