import { useState } from "react";
import Select from "react-select";
import { selectStyles } from "@/components/styling/selectstyles";

function EditableToggle({
  value: initialValue,
  onSave,
  options,
}: {
  value: string;
  onSave: (newValues: string) => void;
  options: { value: string; label: string }[];
}) {
  const [selectedValue, setSelectedValue] = useState(
    options.find((option) => option.value === initialValue)
  );

  const handleChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption) {
      setSelectedValue(selectedOption);
      onSave(selectedOption.value);
    }
  };

  return (
    <Select
      className="cell-toggle"
      value={selectedValue}
      onChange={handleChange}
      options={options}
      styles={selectStyles}
    />
  );
}

export default EditableToggle;
