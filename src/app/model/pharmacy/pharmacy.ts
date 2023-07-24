import { Duration } from '@fullcalendar/core';
import { Taxes } from '../basket/taxes';
import { Address } from '../poc/address';
import { DisplayDescription } from '../product/displaydescription';
import { PackingInformation } from '../product/packinginformation';
import { StockDetails } from '../product/stockdetails';
import { BaseGenericMedicine } from './baseGenericMedicine';
import { MedicalNote } from './medicalNote';
import { PrescriptionMedicineDetails } from './prescriptionMedicineDetails';

export class Pharmacy extends PrescriptionMedicineDetails {

	public pharmacyStockList: Array<Pharmacy>;

	public cityId: number = 0;
	public stateId: number = 0;
	public brandId: number = 0;
	public hsFavroite: boolean = false;

	// for local use
	public isMultiMedicineSelect: boolean = false;
	public batchNumberTemp: string = '';
	public isSelected: boolean = false;
	public dosePerDay: number = 0;
	public isPriceChanged: boolean = false;

	public isErrorFound: boolean = false;
	public isErrorMsg = new Array();
	public isPriceEditable: boolean = false;
	// public doses: Array<Dose>;

	public doseUnit: string;
	public doseLabel: string;
	public emergency: boolean;
	public takenWhenFood: string;
	public symptomKey: string;
	public preference: string;

	public addedByDoctor: boolean;
	public doseUnitId: string;
	public isSOS: boolean;
	public purchaseEnabled: boolean = false;

	// public doses: Array<Dose>;
	public genericMedicine: BaseGenericMedicine;
	public drugFormId: number;
	public drugForm: string;
	public medicineStrength: string;
	public intakeRoute: string;
	public system: string;
	public drugGroups: string;
	public hsnCode: String;
	public notes: Array<MedicalNote>;
	public doctorId: number;
	public serviceId: number;

	// public parentCategory:ProductParentCategory;

	public productCode: string;


	public pocId: number;
	public brandName: string;
	public manufacturerName: string;
	public manufacturerAddress: Address;
	public schedule: string;
	public detailedDescriptionList: Array<DisplayDescription>;
	public otherInformationList: Array<DisplayDescription>;
	public packingInformation: PackingInformation;
	public warrantyDetails: Array<DisplayDescription>;
	public disclaimers: Array<DisplayDescription>;
	public unitNetPrice: number;
	public rating: number;
	public adviceId: number;

	public prescriptionStatus: number;
	public proofDocumentUrlList: Array<String>;

	public categoryId: number;
	public categoryName: string;

	public productId: number;

	public productName: string;
	public productDescription: string;
	public attributesMap: Map<String, Object>;
	public referenceId: string;
	public totalRevenue: number;
	public stockDetails: StockDetails;

	public packageSoldLoose: boolean;
	public looseQuantity: number;
	public flag: boolean;

	public rxDrug: boolean;

	public grossPrice: number;

	public discountPrice: number;
	public taxes: Taxes;

	public netPrice: number;


	public quantity: number;
	public returnQuantity: number = 0;
	public returnPackageStatus: number = 1;
	public returnType: string;


	public originalAmount: number;

	public packageDiscountAmount: number;

	public couponDiscountAmount: number;

	public otherDiscountAmount: number;

	public packageCashBackDiscountAmount: number;

	public couponCashBackDiscountAmount: number;
	public taxationAmount: number;
	public totalTaxes: Taxes;
	public finalAmount: number;

}