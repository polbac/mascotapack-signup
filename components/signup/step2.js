import {
    Row,
    Col,
    Container
  } from "reactstrap";
import ActionButtons from '../action-buttons/action-buttons'
import { usePersonalInformation, useStepNumber } from '../../hooks/signupStateForm'
import { useApi } from "../../hooks/ueApi";

export default function Step2() {
    const { loading, error, data } = useApi()
    const { prev, next } = useStepNumber()

    return (
        <>
            <Row>
            <h2>¡Tu pack!</h2>
            </Row>

            
            
            <div className="text-center box-step box-step-2">
        
          {loading ?
            (<div className='loading-dog'>
                <img src='/doganimation.gif' width="250"/><br/><br/><br/>
                buscando el pack que más se ajuste a tus mascotas...
            </div>)
            :
            (<div>
                <h4 className='pack-title'>Este pack te va a rendir <u>1</u> mes<br/>y contiene los siguiente productos:</h4>
                <Container>
                {data.items.map(({item_name, price, photo}) => (
                    <>
                    <Row className="align-items-baseline">
                      <Col>
                      <img className="img-fluid rounded shadow" width='70' src={photo}/>
                      </Col>
                      <Col >
                        <p className='pack-name'>{item_name}</p>
                      </Col>
                      <Col >
                      <p className='pack-price'>$ {price}</p>
                      </Col>
                    </Row>
                    <br/>
                    <br/>
                    </>
                    
                ))}
                </Container>
                
                <div className='total-price text-center'>Total: $ {data.total}</div>
                
            </div>)
        }
            
            </div>

            <ActionButtons showPrev={true} prevAction={prev} nextActive={!loading} nextAction={next} />
          
        </>
    )
}