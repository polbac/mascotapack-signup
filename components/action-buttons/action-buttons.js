import {
    Button
  } from "reactstrap";

function ActionButtons({nextActive, showPrev}) {

    const prev = showPrev && true
    return (
        <div className="text-center action-buttons">
            {prev && <Button color="#3d6afd" outline type="button">Volver</Button>}

            <Button color="default" type="button" disabled>
                Siguiente
            </Button>
        </div>
    )
}

export default ActionButtons