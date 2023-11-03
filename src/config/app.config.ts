interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Payroll Administrator', 'Employee', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee information',
    'Read vacation information',
    'Read payroll information',
  ],
  ownerAbilities: [
    'Manage employee data',
    'Manage sick leave records',
    'Manage vacation records',
    'Manage payroll data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/68ff6b37-427e-44b9-9a78-faec0e175343',
};
