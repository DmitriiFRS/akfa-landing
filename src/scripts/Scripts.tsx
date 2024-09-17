import Script from "next/script";

function Scripts() {
   return (
      <>
         <Script
            id="google-conversion"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
               __html: `
        gtag('event', 'conversion', {
          'send_to': 'AW-16697496043/lt_zCLXbttMZEOuj_pk-',
          'transaction_id': '',
        });
      `,
            }}
         />
      </>
   );
}
export default Scripts;
