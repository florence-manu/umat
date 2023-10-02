import { Input, Select, SelectParamaters } from "../../components/inputFields/input";
import { OptionContent } from "../../components/inputFields/input";

export interface Item{
    id: string;
    fieldType: string;
    inputType?: string;
    value?: string;
    label: string;
    options?: OptionContent[];
    placeholder?: string;
   onChange?: () => void;
   width?: string;
}

export interface InputContents {
    content: Item[];
}

export function MapInputs({ content }: InputContents) {
  return (
    content.map((item) => {
      if (item.fieldType === "input") {
        return (
          <Input
            id={item.id}
            label={item.label}
            onChange={item.onChange}
            placeholder={item.placeholder}
            value={item.value}
            type={item.inputType}
            key={item.id}
            width={item.width}
          />
        );
      } else {
        return (
          <Select
            id={item.id}
            label={item.label}
            options={item.options}
            key={item.id}
            width={item.width}
          />
        );
      }
    })
  );
}
