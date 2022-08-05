import { useContext } from "react";
import { SummaryContext } from "../../Contexts/SummaryContext";
import "./PackageItem.scss";

const PackageItem = (props) =>{
    const {rentalPackage} = props
    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    })
    const {summary, setSummary} = useContext(SummaryContext);
    const onClickPackage = () =>{
        summary.item = rentalPackage;
        summary.total = rentalPackage.price;
        setSummary(summary);
    }
    return (
        <li className="package-item_wrapper" onClick={() => onClickPackage()}>
            <section className="package-item_header">
                <div className="package-item_header-title"><span>Time Frame:</span> </div>
                <div className="package-item_header-title"><span>Capacity:</span> {rentalPackage.capacity} people</div>
                <div className="package-item_header-title"><span>Price:</span> {currencyFormatter.format(rentalPackage.price)}</div>
                <div className="package-item_header-title"><span>Minimum Deposit:</span> {currencyFormatter.format(rentalPackage.minimumDeposit)}</div>
            </section>
            <section className="package-item_description">
                <p>{rentalPackage.description}</p>
            </section>
        </li>
    )
}

export default PackageItem