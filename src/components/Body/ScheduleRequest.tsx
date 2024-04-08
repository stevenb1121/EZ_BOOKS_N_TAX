// Custom Components
import TextInput from "../ScheduleRequestInputs/TextInput";
import Select from "../ScheduleRequestInputs/Select";
import Check from "../ScheduleRequestInputs/Check";
// Constants
import { US_STATES, SERVICES, PRIMARY, ALTERNATE } from "../Constants";
// MUI Components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// Third Party Librarys
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { send } from "@emailjs/browser";
// Schema
import ScheduleRequestSchema from "../../Schema/ScheduleRequestSchema";

const ScheduleRequest = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      company: "",
      services: [],
      additionalComments: "",
    },
    resolver: yupResolver(ScheduleRequestSchema),
    shouldUseNativeValidation: false,
    mode: "all",
  });

  const {
    getValues,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = async () => {
    try {
      const values = getValues();
      await send(
        "service_3qlr754",
        "EzBooksNTax_SchedReq",
        values,
        "guHMbbttu5xLO_GlP"
      );
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Paper
      id="schedule"
      elevation={24}
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <TextInput name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <TextInput name="lastName" label="Last Name" />
            </Grid>
            <Grid item xs={6}>
              <TextInput name="email" label="Email" mode="email" />
            </Grid>
            <Grid item xs={6}>
              <TextInput name="phone" label="Phone" mode="tel" />
            </Grid>
            <Grid item xs={6}>
              <Select label="State" name="state" dropdownValues={US_STATES} />
            </Grid>
            <Grid item xs={6}>
              <TextInput label="City" name="city" />
            </Grid>
            <Grid item xs={6}>
              <TextInput label="Company (optional)" name="company" />
            </Grid>
            <Grid item xs={6}>
              <Check
                groupLabel="Services Needed:"
                name="services"
                checkData={SERVICES.map((service) => ({
                  label: service,
                  value: service,
                }))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                textArea
                label="Tell Us More (optional)"
                name="additionalComments"
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                sx={{ bgcolor: PRIMARY, color: ALTERNATE }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default ScheduleRequest;
