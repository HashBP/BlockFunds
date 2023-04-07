import Head from "next/head";

class HeadElement extends React.Component {
  componentDidMount() {
    document.querySelector("body").style.background =
      "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 50)51.2%, rgb(0, 0, 0) 98.6%)";
  }

  render() {
    return (
      <Head>
        {
          <link
            async
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
          />
        }
      </Head>
    );
  }
}

export default HeadElement;
