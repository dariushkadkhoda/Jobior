import Container from '../../components/Container'
import MainNav from './components/MainNav'
import TopBar from './components/TopBar'

function Header() {
  return (
    <header>
      {/* Container: horizontal spacing, 108px on desktop, 16px on mobile */}
      <Container>
        {/* Logo + Quick Icons */}
        <TopBar />
        {/* down: Navigation Menu */}
        <MainNav />
      </Container>
    </header>
  )
}

export default Header