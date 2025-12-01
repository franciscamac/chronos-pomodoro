import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
