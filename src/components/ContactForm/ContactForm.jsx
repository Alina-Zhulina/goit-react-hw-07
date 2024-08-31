import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(7, "Too short")
    .max(50, "Too long")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format XXX-XX-XX")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id="name" className={css.inputField} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="number"
            className={css.inputField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <div className={css.buttonWrapper}>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
