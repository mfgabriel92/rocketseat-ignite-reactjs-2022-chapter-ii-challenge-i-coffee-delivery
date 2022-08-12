import {
  FormControl,
  forwardRef,
  Input as ChakraInput,
  InputProps as CharkaInputProps,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends CharkaInputProps {
  error?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, ...rest },
  ref,
) => {
  return (
    <FormControl>
      <ChakraInput
        id={name}
        name={name}
        backgroundColor={error ? "red.50" : "gray.300"}
        textStyle="regularS"
        borderColor={error ? "red.500" : "gray.400"}
        _placeholder={{ color: "gray.600" }}
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
