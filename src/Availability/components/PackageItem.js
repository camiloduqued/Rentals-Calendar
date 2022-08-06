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

    const type = rentalPackage?.Auctifera__Rental_Event__r?.Auctifera__Rental_Type__c
    const cleanRentalType = type ? type.split(';').join(', ') : null

    return (
        <motion.li className={`package-item_wrapper ${summary?.item?.id === rentalPackage.id ? 'selected':''}`} onClick={() => onClickPackage()} variants={variants}>
            {cleanRentalType &&
            <div className="ribbon">
                <div className="ribbon-wrapper">
                    {cleanRentalType}
                </div>
            </div>
            }
            <div className="package-image">
                <img src={rentalPackage.Auctifera__Rental_Event__r.Auctifera__Primary_File_Link__c} alt="Placeholder"/>
            </div>
            <div className="package-fragment">
                <section className="package-item_header">
                    <div className="package-item_header-title"><span>Time Frame: </span> </div>
                    <div className="package-item_header-title"><span>Capacity:</span> {rentalPackage.Auctifera__Location__r.Auctifera__Capacity__c} people</div>
                    <div className="package-item_header-title"><span>Price:</span> {currencyFormatter.format(rentalPackage.Auctifera__Rental_Event__r.Auctifera__Event_Rental_Total_Amount__c)}</div>
                    <div className="package-item_header-title"><span>Minimum Deposit:</span> {currencyFormatter.format(rentalPackage.Auctifera__Rental_Event__r.Auctifera__Minimum_Deposit_Amount__c)}</div>
                </section>
                <section className="package-item_description">
                    <div dangerouslySetInnerHTML={{__html: rentalPackage.Auctifera__Rental_Event__r.Auctifera__Description__c}}/>
                </section>
            </div>
        </motion.li>
    )
}

export default PackageItem