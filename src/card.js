
export default function Card(props) {
    return <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.type}</h5>
                <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.value1}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.value2}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.value3}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li className={props.text1}><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                    <li className={props.text2}><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                    <li className={props.text3}><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                    <li className={props.text4}><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    </div>
}