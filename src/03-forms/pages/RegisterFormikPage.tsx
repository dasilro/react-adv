import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener al menos 2 caracteres")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .required("Requerido")
            .email("Formato de correo no válido"),
          password1: Yup.string()
            .min(6, "Debe tener al menos 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas deben ser iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput name="name" label="Nombre" />
            <MyTextInput name="email" label="Email" type="email" />
            <MyTextInput name="password1" label="Contraseña" type="password" />
            <MyTextInput
              name="password2"
              label="Repita la contraseña"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={() => formik.handleReset()}>
              Limpiar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
