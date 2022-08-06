
import "./Spinner.scss";

const Spinner = (props) =>{
    return (
        <div className="loader-bg">
            <div>
                <div>
                    <span className="loader"></span>
                </div>
                {props.message &&
                    <div style={{'max-width':'80%', 'margin-top': '10px'}}>{props.message}</div>
                }
            </div>
        </div>
    )
}
export default Spinner