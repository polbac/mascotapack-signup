import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet" />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAukVe6iSuiblVcgpVcsEXuYR8ArmgweQ&libraries=&v=weekly"
            defer
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument