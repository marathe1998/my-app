import React, { useState } from "react";
import TextInputAtom from "../../atoms/text-input/text-input";

function FormOrganism(fields) {
  const [formFields, setFormFields] = useState(fields);

  const renderFields = (fieldProps) => {
    return (
      <TextInputAtom
        {...fieldProps}
        handleOnTextChange={(newText) =>
          handleOnTextChange(newText, fieldProps)
        }
      />
    );
  };

  const handleOnTextChange = (newText, field) => {
    field.value = newText.target.value;
    field.setValue(newText.target.value);
  };
  return (
    <div>
      {formFields.fields.map((fieldProps, index) => {
        return <div key={index}>{renderFields(fieldProps)}</div>;
      })}
    </div>
  );
}

export default FormOrganism;
