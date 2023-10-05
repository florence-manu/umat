import { Input, Select, SelectParamaters } from "../../components/inputFields/input";
import { OptionContent } from "../../components/inputFields/input";
import { Radio } from "../../components/inputFields/input";
import { SingleRadio } from "../../components/inputFields/input";
import { useFormContext } from 'react-hook-form';

export interface Item {
  id: string;
  fieldType: string;
  inputType?: string;
  value?: string;
  label: string;
  src?: string;
  options?: OptionContent[];
  placeholder?: string;
  onChange?: () => void;
  width?: string;
  Radio?: SingleRadio[];
}

export interface InputContents {
  content: Item[];
}

export function MapInputs({ content }: InputContents) {
  const { control, formState } = useFormContext(); // Access the useForm context

  return (
    content.map((item) => {
      if (item.fieldType === "input") {
        const { id, label, onChange, placeholder, value, inputType, width, src } = item;
        return (
          <Input
            id={id}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            type={inputType}
            key={id}
            width={width}
            src={src}
          />
        );
      } else if (item.fieldType === "select") {
        return (
          <Select
            id={item.id}
            label={item.label}
            options={item.options}
            key={item.id}
            width={item.width}
          />
        );
      } else if (item.fieldType === "radio") {
        return (
          <Radio
            RadioOptions={item.Radio}
            Label={item.label}
          />
        );
      }
    })
  );
}
