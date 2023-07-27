import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FormikHelpers,
  FormikValues,
} from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components/MyTextInput";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener un maximo de 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener un maximo de 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Correo Electronico invalido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Maria"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Cabriles"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="mc29@gmail.com"
              type="email"
            />

            <label htmlFor="jobType"> Joy Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer </option>
              <option value="designer">Designer </option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior </option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>

            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
