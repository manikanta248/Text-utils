/* eslint-disable react/prop-types */



function Alerts(props) {
    let mesg=props.mesg;
    let type=props.type;
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        props.alert&&<strong>{mesg}</strong>{type}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  );
}

export default Alerts;
