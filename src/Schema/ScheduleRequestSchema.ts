import { object, string, array } from "yup";
import { US_STATES, SERVICES } from "../components/Constants";

export const scheduleRequestSchema = object({
  firstName: string().required("First name is required."),
  lastName: string().required("Last name is required."),
  email: string()
    .required("Email is required.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Not a valid email."
    ),
  phone: string()
    .required("Phone is required.")
    .matches(
      /^(\+\d{1,2}\s?)?(\()?(\d{3})(\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
      "Not a valid phone"
    ),
  city: string().required("City is required."),
  state: string()
    .required("State is required.")
    .oneOf([...US_STATES, ""]),
  company: string().optional(),
  services: array()
    .min(1, "You must select at least one service.")
    .of(string().oneOf(SERVICES))
    .required(),
  additionalComments: string().optional(),
});

export default scheduleRequestSchema;
