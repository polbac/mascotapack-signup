import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import { useScrollYPosition } from 'react-use-scroll-position';
import { useRouter } from 'next/router'

export default function Header() {
    const [navOpen, setNavOpen] = React.useState(false)
    const scrollY = useScrollYPosition();
    const router = useRouter()
    let showButton = true
    const isHome = router.route === '/'

    let isWhite = false
    if (process.browser && isHome) {
        showButton = scrollY > window.innerHeight
        isWhite = !showButton
    }

    return (
        <Navbar expand="lg" light className={`fixed-top` }>
            <Container>
                
                    <Col xs="2" >
                        <NavbarBrand href="/"><span>mascotapack  </span></NavbarBrand>
                    </Col>
                    <Col xs="10">
                        <NavbarToggler aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)} ><i className="fa fa-bars" /></NavbarToggler>
                
                    
                        <Collapse navbar isOpen={navOpen}>
                            <Nav navbar className={`mr-auto`}>
                                <NavItem>
                                    <NavLink>
                                        <Link href="/">
                                            <a className={isWhite ? 'text-dark' : ''}>HOME</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link href="/como-funciona">
                                            <a className={isWhite ? 'text-dark' : ''}>CÓMO FUNCIONA</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink>
                                        <Link href="/acerca">
                                            <a className={isWhite ? 'text-dark' : ''}>ZONAS DE ENTREGA</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                {showButton && (
                                    <NavItem>
                                        <NavLink>
                                            <Link href="/comenzar">
                                                <a color="primary">COMENZAR</a>
                                            </Link>
                                        </NavLink>
                                    </NavItem>
                                )}
                            </Nav>
                        </Collapse>
                    </Col>
                
            </Container>
        </Navbar>
    )
}