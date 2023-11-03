import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface SickLeaveInterface {
  id?: string;
  start_date?: any;
  end_date?: any;
  doctor_note?: boolean;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface SickLeaveGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}
