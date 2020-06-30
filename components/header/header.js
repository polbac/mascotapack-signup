import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import { useScrollYPosition } from 'react-use-scroll-position';
import { useRouter } from 'next/router'


export default function Header() {
    const [navOpen, setNavOpen] = React.useState(false)
    const scrollY = useScrollYPosition();
    const router = useRouter()
    let showButton = false
    const isHome = router.route === '/'

    let isWhite = true

    if (process.browser) {
        if (isHome) {
            showButton = scrollY > window.innerHeight
            isWhite = !showButton
        } else {
            isWhite = true
        }
        
        if (!isHome) {
            showButton = true
            isWhite = false
        }
    }

    return (
        <header>
            <Navbar style={{ background: showButton ? 'white' : 'transparent'}} expand="lg" light className={`fixed-top` }>
            <Container>
                
                    <Col xs="2" >
                        <NavbarBrand href="/"><span>mascotapack  <img src="/logo.svg" /></span></NavbarBrand>
                    </Col>
                    <Col xs="10">
                        <NavbarToggler aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)} >
                            <img src="/menu.svg" width="20" />
                        </NavbarToggler>
                
                    
                        <Collapse navbar isOpen={navOpen}>
                            <Nav navbar className={`mr-auto`}>
                                <NavItem>
                                    <NavLink>
                                        <Link href="/">
                                            <a className={isWhite ? 'text-white' : ''}>HOME</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link href="/como-funciona">
                                            <a className={isWhite ? 'text-white' : ''}>CÓMO FUNCIONA</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink>
                                        <Link href="/zonas-de-entrega">
                                            <a className={isWhite ? 'text-white' : ''}>ZONAS DE ENTREGA</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                {showButton && (
                                    <NavItem>
                                        <NavLink>
                                            <Link href="/comenzar">
                                                <a className="btn btn-primary rounded-xl">COMENZAR</a>
                                            </Link>
                                        </NavLink>
                                    </NavItem>
                                )}
                            </Nav>
                        </Collapse>
                    </Col>
                
            </Container>
        </Navbar>
        </header>
    )
}