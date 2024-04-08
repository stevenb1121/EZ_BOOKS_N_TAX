import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormContext, Controller } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  dropdownValues: string[];
}

const Select = ({ label, name, dropdownValues }: SelectProps) => {
  const { control, formState } = useFormContext();
  const { errors, isSubmitting } = formState;

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Autocomplete
            disabled={isSubmitting}
            value={value !== "" ? value : null}
            onChange={(_, newValue) => onChange(newValue)}
            onBlur={onBlur}
            options={dropdownValues}
            renderInput={(params) => (
              <TextField
                error={!!errors[name]}
                helperText={errors[name] && (errors[name]?.message as string)}
                {...params}
                label={label}
              />
            )}
          />
        )}
      />
    </FormControl>
  );
};

export default Select;
