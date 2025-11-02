import MainNav from './components/MainNav'
import TopBar from './components/TopBar'

function Header() {
  return (
    <header>
        {/* Logo + Quick Icons */}
        <TopBar />
        {/* down: Navigation Menu */}
        <MainNav />
    </header>
  )
}

export default Header