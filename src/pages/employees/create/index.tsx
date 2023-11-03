import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { employeeValidationSchema } from 'validationSchema/employees';
import { UserInterface } from 'interfaces/user';
import { EmployeeInterface } from 'interfaces/employee';

function EmployeeCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: EmployeeInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.employee.create({ data: values as RoqTypes.employee });
      resetForm();
      router.push('/employees');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<EmployeeInterface>({
    initialValues: {
      employee_number: 0,
      hire_date: new Date(new Date().toDateString()),
      termination_date: new Date(new Date().toDateString()),
      position: '',
      salary: 0,
      adress: '',
      phone: '',
      email: '',
      emergency_contact: '',
      performance_rating: 0,
      department: '',
      job_description: '',
      contract_type: '',
      employee_status: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: employeeValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Employees',
              link: '/employees',
            },
            {
              label: 'Create Employee',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Employee
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Employee Number"
            formControlProps={{
              id: 'employee_number',
              isInvalid: !!formik.errors?.employee_number,
            }}
            name="employee_number"
            error={formik.errors?.employee_number}
            value={formik.values?.employee_number}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('employee_number', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="hire_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Hire Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.hire_date ? new Date(formik.values?.hire_date) : null}
              onChange={(value: Date) => formik.setFieldValue('hire_date', value)}
            />
          </FormControl>
          <FormControl id="termination_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Termination Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.termination_date ? new Date(formik.values?.termination_date) : null}
              onChange={(value: Date) => formik.setFieldValue('termination_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.position}
            label={'Position'}
            props={{
              name: 'position',
              placeholder: 'Position',
              value: formik.values?.position,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Salary"
            formControlProps={{
              id: 'salary',
              isInvalid: !!formik.errors?.salary,
            }}
            name="salary"
            error={formik.errors?.salary}
            value={formik.values?.salary}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('salary', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.adress}
            label={'Adress'}
            props={{
              name: 'adress',
              placeholder: 'Adress',
              value: formik.values?.adress,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.phone}
            label={'Phone'}
            props={{
              name: 'phone',
              placeholder: 'Phone',
              value: formik.values?.phone,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.email}
            label={'Email'}
            props={{
              name: 'email',
              placeholder: 'Email',
              value: formik.values?.email,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.emergency_contact}
            label={'Emergency Contact'}
            props={{
              name: 'emergency_contact',
              placeholder: 'Emergency Contact',
              value: formik.values?.emergency_contact,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Performance Rating"
            formControlProps={{
              id: 'performance_rating',
              isInvalid: !!formik.errors?.performance_rating,
            }}
            name="performance_rating"
            error={formik.errors?.performance_rating}
            value={formik.values?.performance_rating}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('performance_rating', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.department}
            label={'Department'}
            props={{
              name: 'department',
              placeholder: 'Department',
              value: formik.values?.department,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.job_description}
            label={'Job Description'}
            props={{
              name: 'job_description',
              placeholder: 'Job Description',
              value: formik.values?.job_description,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.contract_type}
            label={'Contract Type'}
            props={{
              name: 'contract_type',
              placeholder: 'Contract Type',
              value: formik.values?.contract_type,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_status}
            label={'Employee Status'}
            props={{
              name: 'employee_status',
              placeholder: 'Employee Status',
              value: formik.values?.employee_status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/employees')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'employee',
    operation: AccessOperationEnum.CREATE,
  }),
)(EmployeeCreatePage);
