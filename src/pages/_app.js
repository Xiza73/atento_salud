import "bootstrap/dist/css/bootstrap.css"
typeof window !== `undefined` && import("bootstrap/dist/js/bootstrap")
typeof window !== `undefined` && import("@fortawesome/fontawesome-free/js/brands")
typeof window !== `undefined` && import("@fortawesome/fontawesome-free/js/solid")
typeof window !== `undefined` && import("@fortawesome/fontawesome-free/js/fontawesome")

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          .user-content {
            text-align: center;
            display: grid;
            grid-template-columns: 25% 1fr;
            grid-template-rows: 1fr;
            width: 100%;
            height: 100vh;
          }
          .user-content .user-main {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10vh 10%;
          }
          
          .admin-content {
            text-align: center;
            display: grid;
            grid-template-columns: 8% 1fr;
            grid-template-rows: 1fr;
            width: 100%;
            height: 100vh;
          }
          .admin-content .admin-main {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10vh 10%;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
