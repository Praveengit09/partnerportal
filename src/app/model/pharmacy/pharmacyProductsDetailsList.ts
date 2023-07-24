import { Taxes } from '../basket/taxes';
import { Pharmacy } from './pharmacy';
export class PharmacyInventoryDetail extends Pharmacy {
    public freeProductCount: number;
    public purchaseRate: number;
    public marginPercentage: number;
    public supplierTaxes: Taxes;


    public isEditText: boolean;
    public isChecked: boolean;
    public marketedBy: string;
}   