import { Address } from '../poc/address';
import { DisplayDescription } from './displaydescription';
import { Product } from './product';

export class ProductDetails extends Product {
    public productCode: string;

    public groupId : number;
	public groupName: string;
	
	public subGroupId: number;
	public subGroupName: string;
    
    public schedule: string;

    public brandName: string;
    public manufacturerName: string;
    public manufacturerAddress: Address;

    public detailedDescriptionList: Array<DisplayDescription>;
    public otherInformationList: Array<DisplayDescription>;
    public imageURLs: Array<string>;

    public warrantyDetails: Array<DisplayDescription>;
    public disclaimers: Array<DisplayDescription>;

    public pocId: number;

}