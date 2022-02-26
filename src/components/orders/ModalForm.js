const ModalForm = ({ info, setInfo }) => {

    return (
        <div className="form">
            <h2>Place Your Order</h2>
            <hr />
            <input type="text" className="form-control" placeholder="Enter Name..." value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />

            <input type="text" className="form-control" placeholder="Enter Address..." value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} />

            <input type="number" className="form-control" placeholder="Enter Phone..." value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} />

            <input type="number" className="form-control" placeholder="Enter Pin..." value={info.pin} onChange={(e) => setInfo({ ...info, pin: e.target.value })} />
        </div>
    )
}

export default ModalForm