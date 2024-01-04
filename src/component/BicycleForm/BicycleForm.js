import React from 'react';
import { useCreateBicycleMutation } from '../../redux-store/bicycle/bicycleApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './BicycleForm.module.scss';

const BicycleForm = () => {
  const [createNewBicycle] = useCreateBicycleMutation();

  const inputName = [
    { name: 'name', type: 'text' },
    { name: 'type', type: 'text' },
    { name: 'color', type: 'text' },
    { name: 'wheelSize', type: 'number' },
    { name: 'price', type: 'number' },
    { name: 'ID', type: 'text' },
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      color: '',
      wheelSize: '',
      price: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      type: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      color: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      wheelSize: Yup.number().required('Required'),
      price: Yup.number().required('Required'),
      description: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      createNewBicycle(values)
        .unwrap()
        .then(() => {})
        .then(error => {
          console.log(error);
        });
      resetForm();
    },
  });

  return (
    <div className={s.container}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className={s.inputContainer}>
          {inputName.map((e, i) => {
            return (
              <input
                className={s.inutForm}
                key={i}
                id={e.name}
                type={e.type}
                name={e.name}
                placeholder={e.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[e.name]}
              />
            );
          })}
        </div>
        <input
          className={s.inutForm}
          style={{
            width: '96%',
          }}
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        <div className={s.buttonContainer}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => formik.resetForm()}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default BicycleForm;
