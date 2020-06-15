import {
    Button
  } from "reactstrap";

function ActionButtons({nextActive, showPrev, nextAction, prevAction}) {

    const prev = showPrev && true
    return (
        <div className="text-center action-buttons">
            {prev && <Button color="#3d6afd" outline type="button" onClick={prevAction}>Volver</Button>}

            <Button onClick={nextAction} color="primary" type="button" disabled={!nextActive}>
                Siguiente
            </Button>
        </div>
    )
}

export default ActionButtons