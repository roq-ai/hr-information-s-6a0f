import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  salary: yup.number().integer().required(),
  bonus: yup.number().integer().required(),
  deductions: yup.number().integer().required(),
  net_pay: yup.number().integer().required(),
  pay_date: yup.date().required(),
  reimbursement: yup.string().required(),
  commission: yup.number().integer().required(),
  employee_id: yup.string().nullable().required(),
});
