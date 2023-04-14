import { useAtomValue } from "jotai";

import { Input } from "@axelor/ui";

import { FieldContainer, FieldProps } from "../../builder";
import { useInput } from "../../builder/hooks";

export function String({
  inputProps,
  schema,
  readonly,
  widgetAtom,
  valueAtom,
}: FieldProps<string> & {
  inputProps?: Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "autoComplete" | "placeholder"
  >;
}) {
  const { uid, placeholder, showTitle = true } = schema;

  const { attrs } = useAtomValue(widgetAtom);
  const { title, required } = attrs;

  const { value, onChange, onBlur } = useInput(valueAtom, {
    defaultValue: "",
  });

  return (
    <FieldContainer readonly={readonly}>
      {showTitle && <label htmlFor={uid}>{title}</label>}
      {readonly && (
        <Input
          type="text"
          value={value}
          disabled
          readOnly
          bg="body"
          border={false}
          {...inputProps}
        />
      )}
      {readonly || (
        <Input
          type="text"
          id={uid}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          {...inputProps}
        />
      )}
    </FieldContainer>
  );
}
