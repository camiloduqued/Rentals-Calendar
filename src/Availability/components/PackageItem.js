import { useContext } from "react";
import { StepsContext } from "../../Contexts/StepsContext";
import { SummaryContext } from "../../Contexts/SummaryContext";
import "./PackageItem.scss";
import {motion} from "framer-motion";

const PackageItem = (props) =>{
    const {rentalPackage, variants} = props
    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    })
    const {summary, setSummary} = useContext(SummaryContext);
    const {setStep} = useContext(StepsContext);
    const onClickPackage = () =>{
        summary.item = rentalPackage;
        summary.total = rentalPackage.price;
        setSummary(summary);
        setStep("Registration");
    }
    return (
        <motion.li className="package-item_wrapper" onClick={() => onClickPackage()} variants={variants}>
            <div className="ribbon">
                <div className="ribbon-wrapper">
                Reception Only
                </div>
                </div>
            <div className="package-image">
                <img src="https://images.pexels.com/photos/8118499/pexels-photo-8118499.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Placeholder"/>
            </div>
            <div className="package-fragment">
                <section className="package-item_header">
                    <div className="package-item_header-title"><span>Time Frame:</span> </div>
                    <div className="package-item_header-title"><span>Capacity:</span> {rentalPackage.capacity} people</div>
                    <div className="package-item_header-title"><span>Price:</span> {currencyFormatter.format(rentalPackage.price)}</div>
                    <div className="package-item_header-title"><span>Minimum Deposit:</span> {currencyFormatter.format(rentalPackage.minimumDeposit)}</div>
                </section>
                <section className="package-item_description">
                    <p>{rentalPackage.description}</p>
                </section>
            </div>
        </motion.li>
    )
}

export default PackageItem