import { useFormContext, Controller } from "react-hook-form";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

interface CheckProps {
  groupLabel: string;
  name: string;
  checkData: { label: string; value: string }[];
}

const Check = ({ groupLabel, name, checkData }: CheckProps) => {
  const { control, formState } = useFormContext();
  const { errors, isSubmitting } = formState;

  return (
    <FormControl component="fieldset" fullWidth error={!!errors[name]}>
      <FormLabel component="legend">{groupLabel}</FormLabel>
      <FormGroup row>
        {checkData.map(({ label, value }, index) => (
          <Controller
            key={name + index}
            render={({ field: { value: fieldValue, onChange, onBlur } }) => (
              <FormControlLabel
                disabled={isSubmitting}
                label={label}
                control={
                  <Checkbox
                    inputProps={{ style: { fontFamily: "inherit" } }}
                    disabled={isSubmitting}
                    checked={fieldValue.includes(value)} // Check if value is in array
                    onBlur={onBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(
                        event.target.checked
                          ? [...fieldValue, value]
                          : fieldValue.filter((val: string) => val !== value)
                      );
                    }}
                  />
                }
              />
            )}
            control={control}
            name={name}
          />
        ))}
      </FormGroup>
      {errors[name] && (
        <FormHelperText>{errors[name]?.message as string}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Check;
