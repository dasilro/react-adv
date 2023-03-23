import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            terms: false,
            jobType: "",
          },
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .required("Requerido")
            .email("Formato de correo no válido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-junior"], "Opción no permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput name="firstName" label="First Name" />
            <MyTextInput name="lastName" label="Last Name" />
            <MyTextInput name="email" label="Email Address" type="email" />
            <MySelect name="jobType" label="Job Type">
              <option value="">Select</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>
            <MyCheckbox name="terms" label="Terms and conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
