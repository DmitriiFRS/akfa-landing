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
         <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
               __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5XQ94M4L');`,
            }}
         />
         <noscript>
            <iframe
               src="https://www.googletagmanager.com/ns.html?id=GTM-5XQ94M4L"
               height="0"
               width="0"
               style={{ display: "none", visibility: "hidden" }}
            ></iframe>
         </noscript>
      </>
   );
}
export default Scripts;
