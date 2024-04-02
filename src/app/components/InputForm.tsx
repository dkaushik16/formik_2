import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { signupSchema } from '../settings'

function InputForm() {

    const initialValues={
        name:'',
        email:'',
        password:'',
        confirmPass:''
    }
  
  return (
    <div className=' w-96 min-h-96 bg-white rounded-md'>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={(values:any)=>{
             console.log(values)
          }}
         >
            <Form
               className=' flex flex-col justify-center w-[90%]
                   h-full place-items-stretch text-black'

             >
                <h1 className=' text-center font-bold mb-4 text-black'>Form Using Formik</h1>
               
                <Field name='name' 
                       type='text'
                       placeholder='Enter your name'
                       className=' rounded-sm w-full p-2 m-2 bg-slate-200'
                  />
                  <ErrorMessage
                      name='name'
                      className=' ml-3 mb-2'
                    />


                   <Field name='email' 
                       type='email'
                       placeholder='Enter your email'
                       className=' rounded-sm w-full p-2 m-2 bg-slate-200'
                  />
                  <ErrorMessage
                      name='email'
                      className=' ml-3 mb-2'
                    /> 



                     <Field name='password' 
                       type='password'
                       placeholder='Enter your name'
                       className=' rounded-sm w-full p-2 m-2 bg-slate-200'
                    />
                    <ErrorMessage
                      name='password'
                      className=' ml-3 mb-2'
                    /> 


                     <Field name='confirmPass' 
                       type='password'
                       placeholder='Enter your name'
                       className=' rounded-sm w-full p-2 m-2 bg-slate-200'
                   />
                    <ErrorMessage
                      name='confirmPass'
                      className=' ml-3 mb-2'
                      />

                 <button
                    type='submit'
                    className=' rounded-md bg-slate-900 text-white p-2 m-4'
                 >
                  Submit
                 </button>      
            </Form>
         </Formik>

    </div>
  )
}

export default InputForm