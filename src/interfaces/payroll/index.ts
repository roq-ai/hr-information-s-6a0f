import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  employee_id: string;
  salary: number;
  bonus?: number;
  deductions?: number;
  net_pay: number;
  pay_date: any;
  reimbursement: string;
  commission: number;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  reimbursement?: string;
}
