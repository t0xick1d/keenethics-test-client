import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './BicycleForm.module.scss';

const BicycleForm = () => {
  const dispatch = useDispatch();

  const inputName = [
    { name: 'Name', type: 'text' },
    { name: 'Type', type: 'text' },
    { name: 'Color', type: 'text' },
    { name: 'Wheel size', type: 'number' },
    { name: 'Price', type: 'number' },
    { name: 'ID', type: 'text' },
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      color: '',
      wheelsize: '',
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
      wheelsize: Yup.number().required('Required'),
      price: Yup.number().required('Required'),
      description: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
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
                value={formik.values.nickName}
              />
            );
          })}
        </div>
        <input
          className={s.inutForm}
          style={{
            width: '96%',
          }}
          id={'descriptiom'}
          type={'text'}
          name={'descriptiom'}
          placeholder={'Descriptiom'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nickName}
        />
        <div className={s.buttonContainer}>
          <button type="submit">Save</button>
          <button>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default BicycleForm;
