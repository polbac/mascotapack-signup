import {
    Button
  } from "reactstrap";

function ActionButtons({nextActive, showPrev, nextAction, prevAction, nextDisabled}) {

    const prev = showPrev && true
    return (
        <div className="text-center action-buttons">
            {prev && <Button color="#3d6afd" outline type="button" onClick={prevAction}>Volver</Button>}

            {(!nextDisabled) && <Button size="xl" onClick={nextAction} color="primary" type="button" disabled={!nextActive}>
                Siguiente
            </Button>}
        </div>
    )
}

export default ActionButtons