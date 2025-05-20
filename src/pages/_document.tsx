import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const storedTheme = localStorage.getItem('theme');
                  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else if (userPrefersDark) {
                    document.documentElement.classList.add('dark');
                  }
                })();
              `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
