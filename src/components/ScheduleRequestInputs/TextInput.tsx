import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

interface TextInputProps {
  name: string;
  label: string;
  textArea?: boolean;
  mode?: string;
}

const TextInput = ({
  label,
  name,
  textArea = false,
  mode = "text",
}: TextInputProps) => {
  const { control, formState } = useFormContext();
  const { errors, touchedFields, isSubmitted, isSubmitting } = formState;

  const hasError = !!errors[name] && (touchedFields[name] || isSubmitted);

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextField
            disabled={isSubmitting}
            type={mode}
            onBlur={onBlur}
            multiline={textArea}
            rows={textArea ? 4 : undefined}
            error={hasError}
            helperText={hasError && (errors[name]?.message as string)}
            label={label}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </FormControl>
  );
};

export default TextInput;
