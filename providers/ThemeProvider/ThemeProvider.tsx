import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({});

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
