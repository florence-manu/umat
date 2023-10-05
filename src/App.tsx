import React from 'react';
import { Routing } from './router/Router';
import GlobalStyleStyled from './GlobalStyle.styled';
import { useForm, FormProvider } from "react-hook-form";

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
     <GlobalStyleStyled/>
      <Routing />
    </FormProvider>
  );
}

export default App;
