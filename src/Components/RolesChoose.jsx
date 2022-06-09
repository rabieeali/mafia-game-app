import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { allRoles } from "../Statics/roles";

function RolesChoose(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState({});
console.log(selected);
  const selectHandler = (e, id) => {
    const checked = e.target.checked;
    console.log(checked);
    if (checked) {
      setSelected((old) => ({
        ...old,
        ...{ [id]: Boolean(e.target.checked) },
      }));
    }
  };

  useEffect(() => {
    props.allSelected(selected);
  }, [selected]);
  
  return (
    <>
      <Button className="w-100" variant={props.color} onClick={handleShow}>
        {props.side}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="ms-auto">{props.side}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allRoles.map((role, index) => {
            if (role.side === props.side) {
              return (
                <div key={index} className="form-check">
                  <input
                    id={role.id}
                    onChange={(e) => {
                      selectHandler(e, role.id);
                    }}
                    className="form-check-input"
                    type="checkbox"
                    value={role.title}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {role.title}
                  </label>
                </div>
              );
            }
          })}
        </Modal.Body>
        <Modal.Footer className="row">
          <Button className="col" variant="secondary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RolesChoose;
