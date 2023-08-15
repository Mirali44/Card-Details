import * as yup from 'yup';
const nameRules = /^[aA-zZ_ ]+$/
const numberRules = /^[0-9]{16,16}$/
const monthRules = /^[0-9]{2,2}$/
const yearRules = /^[0-9]{2,2}$/
const cvcRules = /^[0-9]{3,3}$/
const date = new Date()
const y = date.getFullYear()


export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRules, {
      message: 'Wrong format, letters only',
    })
    .required("Can't be blank"),    

  number: yup
  .string()
  .matches(numberRules, {
    message: 'Wrong format',
  })
  .required("Can't be blank"),

  month: yup
  .string()
  .matches(monthRules, {
    message: 'Wrong format',
  })
  .required("Can't be blank"),

  year: yup
  .string()
  .matches(yearRules, {
    message: 'Wrong format',
  })
  .required("Can't be blank"), 

  cvc: yup
  .string()
  .matches(cvcRules, {
    message: 'Wrong format',
  })
  .required("Can't be blank"), 
  
});