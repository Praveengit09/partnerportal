import { DoctorDetails } from './doctordetails';
import { PocAdviseData } from './../../model/poc/poc-advise-data';

export class Doctor extends DoctorDetails {
    public serviceId: number;
    public serviceName: string;
    public doctorName: string;
    public consultationFee: number;
    public pocList: PocAdviseData[];
    public specialization: string = "";
    //local use
    public myPoc: any;
}
