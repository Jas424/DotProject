function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>{props.aboutMe}</p>
      <center>
        <button className="btn" onClick={confirmHandler}>
          CLOSE
        </button>
      </center>
    </div>
  );
}

/*return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}*/

export default Modal;
