import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(50, "To long").required("Required"),
  number: Yup.string()
    .min(7, "To short")
    .max(50, "To long")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format XXX-XX-XX")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
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
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.inputField}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={numberId}
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
