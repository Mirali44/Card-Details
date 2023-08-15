import React from 'react'
import {useFormik} from 'formik'
import { basicSchema } from '../Schema/index';
function CardDetails({sendDetails}) {
    const onSubmit = async (values, actions) => {

        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        sendDetails(values.name,values.number,values.month,values.year,values.cvc)
      };
    
      const { values, errors, isSubmitting, handleChange, handleSubmit } =
        useFormik({
          initialValues: {
            name: '',
            number: '',
            month: '',
            year: '',
            cvc: ''
          },
          validationSchema: basicSchema,
          onSubmit,
        });
  return (
    <div className='detailsContainer'>
        <form className='inputs' onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>CARDHOLDER NAME</label>
        <input
          type="string"
          value={values.name}
          onChange={handleChange}
          id="name"
          placeholder="e.g. Mirali Abdullayev"
          className={errors.name ? 'input-error' : 'input'}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="inputDiv">
        <label >CARD NUMBER</label>
        <input
          type="string"
          value={values.number}
          onChange={handleChange}
          id="number"
          placeholder="e.g. 1234 5678 9101 1121"
          className={errors.number ? 'input-error' : 'input'}
        />
        {errors.number && <p className="error">{errors.number}</p>}
      </div>
      
      <div className='bottom'>
        <div className='bottomLeft'>
        <label className='expLabel'>EXP. DATE (MM/YY)</label>
        <div className='bottomLeftInputs'>
      <div className="inputDiv">
        <input
          type="string"
          value={values.month}
          onChange={handleChange}
          id="month"
          placeholder="MM"
          className={errors.month ? 'exp-error' : 'exp'}
        />
        {errors.month && <p className="error">{errors.month}</p>}
      </div>
      <div className="inputDiv">
        
        <input
          type="string"
          value={values.year}
          onChange={handleChange}
          id="year"
          placeholder="YY"
          className={errors.year ? 'exp2-error' : 'exp2'}
        />
        {errors.year && <p className="error">{errors.year}</p>}
      </div>
      </div>
      </div>
      <div className="inputDiv">
        <label>CVC</label>
        <input
          type="string"
          value={values.cvc}
          onChange={handleChange}
          id="cvc"
          placeholder="e.g. 123"
          className={errors.cvc ? 'formCvc-error' : 'formCvc'}
        />
        {errors.cvc && <p className="error">{errors.cvc}</p>}
      </div>
      </div>
      
      <button disabled={isSubmitting} type="submit">
      Confirm
      </button>
    </form>
    </div>
  )
}

export default CardDetails