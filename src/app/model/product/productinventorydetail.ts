import { ProductDetails } from './productdetails';
import { Taxes } from '../basket/taxes';

export class ProductInventoryDetail extends ProductDetails {

    public freeProductCount: number;
    public purchaseRate: number;
    public marginPercentage: number;
    public supplierTaxes: Taxes;
}