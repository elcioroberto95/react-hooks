import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global";


export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Button color="primary" />
        <Button color="success" />
        <Button color="danger" />
      </ThemeProvider >
    </>


  )
}

