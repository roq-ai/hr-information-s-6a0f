import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;

  _count?: {};
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  name?: string;
  tenant_id?: string;
}
