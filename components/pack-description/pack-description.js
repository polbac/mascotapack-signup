import { Row, Col } from 'reactstrap'
import { useScrollYPosition } from 'react-use-scroll-position';
import { useState, useRef } from 'react'

export default function PackDescription() {
    const [ showed, setShowed ] = useState(false)
    const ref = useRef()
    const scrollY = useScrollYPosition();

    if (!showed && ref.current) {
        if (scrollY > ref.current.offsetTop - 100) {
            setShowed(true)
        }
    }

    return (
        <div className={`pack-description text-center ${showed ? 'opened' : 'closed'}`} ref={ref}>
            <div className="pack-animation"></div>
            <div className={`box closed ${showed ? 'opened' : 'closed'}`}>
                <h4>¿Qué puede contener el pack?</h4>
                <p>Todo lo necesario que tu mascota necesita en un mes</p>
                <Row>
                    <Col>
                        <p className='item'>Comida</p>  
                        <p className='item'>Piedritas/Bolsitas</p>  
                    </Col>
                    <Col>
                        <p className='item'>Pipeta antipulgas</p>  
                        <p className='item'>Golosinas</p>  
                    </Col>
                </Row>
            </div>
        </div>
    )
}