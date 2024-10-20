import { useFormContext, Controller } from "react-hook-form";

interface RHFSelectProps {
  name: string; // Name of the field in the form
  label?: string; // Optional label
  options: { value: string; label: string }[]; // Options for the select
}

export function RHFSelect({ name, label, options }: RHFSelectProps) {
  const { control } = useFormContext(); // Get control from useFormContext

  return (
    <div>
      {label && <label>{label}</label>} {/* Optional label */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}