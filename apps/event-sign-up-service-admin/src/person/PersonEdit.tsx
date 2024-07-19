import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { SignUpTitle } from "../signUp/SignUpTitle";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="signUps"
          reference="SignUp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SignUpTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isOrganizer" source="isOrganizer" />
        <TextInput label="address" multiline source="address" />
      </SimpleForm>
    </Edit>
  );
};
