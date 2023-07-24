import{ServiceDetail } from '../employee/servicedetail';
import { ServiceItem } from '../service/serviceItem';


export class DoctorServiceDetail extends ServiceItem{
    public walkinConsultationFee: number;
	public digiConsultationFee: number;
	public videoNowConsultationFee: number;
	public videoLaterConsultationFee: number;
	public homeConsultationFee: number;
}