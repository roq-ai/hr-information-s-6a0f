import * as yup from 'yup';

export const sickLeaveValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  doctor_note: yup.boolean().nullable(),
  employee_id: yup.string().nullable().required(),
});
