import React, { useState } from "react";
import FormOrganism from "../../components/organisms/form/formOrganism";
function LoginTemplate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const getLoginFormFields = () => {
    const fields = [
      {
        placeholder: "Enter a first name",
        value: firstName,
        setValue: setFirstName,
      },
      {
        placeholder: "Enter a last name",
        value: lastName,
        setValue: setLastName,
      },
      {
        placeholder: "Enter a middle name",
        value: middleName,
        setValue: setMiddleName,
      },
    ];
    return fields;
  };

  return (
    <div>
      <FormOrganism {...{ fields: getLoginFormFields() }} />
    </div>
  );
}

export default LoginTemplate;
