import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_number: yup.number().integer().required(),
  hire_date: yup.date().required(),
  termination_date: yup.date().nullable(),
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  adress: yup.string().nullable(),
  phone: yup.string().nullable(),
  email: yup.string().nullable(),
  emergency_contact: yup.string().nullable(),
  performance_rating: yup.number().integer().nullable(),
  department: yup.string().nullable(),
  job_description: yup.string().nullable(),
  contract_type: yup.string().nullable(),
  employee_status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
