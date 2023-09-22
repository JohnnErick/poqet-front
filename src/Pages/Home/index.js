import Topbar from 'Components/Topbar';
import CollectionCard from 'Components/CollectionCard';

import { Container, List } from './styles';

export default function Home() {
  const items = [{
    name: 'pikachu',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
    href: '/collection'
  }, {
    name: 'pikachu',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
    href: '/collection'
  }, {
    name: 'pikachu',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
    href: '/collection'
  }, {
    name: 'pikachu',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
    href: '/collection'
  }];

  return (
    <Container>
      <Topbar title="Home" />
      <main>
        <List>
          {items.map((item, index) => (
            <CollectionCard
              cover={item.url}
              key={`item-${index}`}
              name={item.name}
              url={item.href}
            />
          ))}
        </List>
      </main>
    </Container>
  )
}
