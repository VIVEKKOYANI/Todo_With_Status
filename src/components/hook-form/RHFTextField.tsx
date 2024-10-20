import { useFormContext, Controller } from 'react-hook-form';

interface RHFTextFieldProps {
  name: string;
  label: string;
  type: string;
}

export default function RHFTextField({ name, label, type }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <div>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field} 
            type={type} 
          />
        )}
      />
    </div>
  );
}