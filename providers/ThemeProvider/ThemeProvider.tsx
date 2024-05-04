import { createTheme, MantineProvider, ColorSchemeScript } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { RootStyleRegistry } from "../ThemeProvider/CacheProvider";
import "@mantine/core/styles.css";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({});

  return (
    <RootStyleRegistry>
      <MantineEmotionProvider>
        <MantineProvider theme={theme} stylesTransform={emotionTransform}>
          {children}
        </MantineProvider>
      </MantineEmotionProvider>
    </RootStyleRegistry>
  );
};

export default ThemeProvider;
{
}
