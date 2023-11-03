import { PayrollInterface } from 'interfaces/payroll';
import { SickLeaveInterface } from 'interfaces/sick-leave';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  employee_number: number;
  hire_date: any;
  termination_date?: any;
  position: string;
  salary: number;
  user_id: string;
  adress?: string;
  phone?: string;
  email?: string;
  emergency_contact?: string;
  performance_rating?: number;
  department?: string;
  job_description?: string;
  contract_type?: string;
  employee_status?: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  sick_leave?: SickLeaveInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  _count?: {
    payroll?: number;
    sick_leave?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  user_id?: string;
  adress?: string;
  phone?: string;
  email?: string;
  emergency_contact?: string;
  department?: string;
  job_description?: string;
  contract_type?: string;
  employee_status?: string;
}
