import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import { useScrollYPosition } from 'react-use-scroll-position';
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { useLayoutEffect, useState, useCallback } from 'react';

function getScrollPosition() {
    if (!process.browser) return { x: 0, y: 0 }
    return { x: window.scrollX, y: window.scrollY }
}

export default function Header() {
    const [navOpen, setNavOpen] = React.useState(false)
    let router = useRouter()
    let isHome = router.route === '/home'
    let isSignup = router.route === '/comenzar'
    const [showButton, setShowButton] = useState(!isHome && !isSignup)
    const [isWhite, setIsWhite] = useState(!isHome)
    
    if (process.browser) {
        useLayoutEffect(() => {
            const handleScroll = () => {
                const scrollY = getScrollPosition().y
                isHome = document.location.pathname === '/home'
                isSignup = document.location.pathname === '/comenzar'
                if (isHome) {
                    setShowButton(scrollY > window.innerHeight)
                    setIsWhite(scrollY > window.innerHeight)
                } else {
                    setIsWhite(true)
                    setShowButton(!isSignup)
                }
            }
            window.addEventListener('popstate', handleScroll);
            window.addEventListener('scroll', handleScroll)
            setInterval(handleScroll, 500)
            return () => window.removeEventListener('scroll', handleScroll)
            }, [])
    }

    const toggleMenu = () => {
        setNavOpen(!navOpen)
    }

    return (
        <header>
            {navOpen && (
                <div className="nav-mobile">
                    <Link href="/home"><span className="mobile-logo"><b>MASCOTAPACK</b>  <img width="30" src="/logo.png"/></span></Link>
                <NavItem>
                <NavLink>
                    <Link href="/home">
                        <a onClick={toggleMenu}>HOME</a>
                    </Link>
                </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link href="/como-funciona">
                            <a onClick={toggleMenu}>CÓMO FUNCIONA</a>
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                        <Link href="/zonas-de-entrega">
                            <a onClick={toggleMenu}>ZONAS DE ENTREGA</a>
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link href="/comenzar">
                            <a onClick={toggleMenu} className="btn btn-primary rounded-xl">COMENZAR</a>
                        </Link>
                    </NavLink>
                </NavItem>
                </div>
            )}
            <Navbar expand="lg" className={classnames({
                'fixed-top': true,
                'white': isWhite
            })}>
            <Container>
                
                    <Col xs="2" >
                        <NavbarBrand href="/"><span>mascotapack  <img src={isWhite ? "/logo.png" : "/logo_black.png"} /></span></NavbarBrand>
                    </Col>
                    <Col xs="10">
                        
                        <div className="menu-mobile" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                
                    
                        <Collapse navbar >
                            <Nav navbar className={`mr-auto`}>
                                <NavItem>
                                    <NavLink>
                                        <Link href="/home">
                                            <a >HOME</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link href="/como-funciona">
                                            <a >CÓMO FUNCIONA</a>
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink>
                                        <Link href="/zonas-de-entrega">
                                            <a >ZONAS DE ENTREGA</a>
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