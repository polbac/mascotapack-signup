import {
    Button
  } from "reactstrap";

function ActionButtons({nextActive, showPrev}) {
    const prev = showPrev || true
    return (
        <div className="text-center">
            {prev && <Button color="#3d6afd" outline type="button">Volver</Button>}

            <Button color="#3d6afd" outline type="button">
                Siguiente
            </Button>
        </div>
    )
}

export default ActionButtons