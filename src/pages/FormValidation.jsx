import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormValidation = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "please accept terms and conditions",
    ),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-gray-100 p-6 shadow-md sm:w-3/4 md:w-1/2 lg:w-1/3">
          <h1 className="mb-4 text-center text-2xl font-bold">
            Form Validation
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="block w-full rounded border border-gray-300 p-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded border border-gray-300 p-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="block w-full rounded border border-gray-300 p-2"
                />
                <p className="text-red-500">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div>
                <Field
                  as="select"
                  name="gender"
                  className="block w-full rounded border border-gray-300 bg-white p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Field>
                <p className="text-sm text-red-500">
                  <ErrorMessage name="gender" />
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-50"
                />
                <label className="text-gray-700">
                  I accept terms and conditions
                </label>
                <p className="text-sm text-red-500">
                  <ErrorMessage name="termsAndConditions" />
                </p>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
