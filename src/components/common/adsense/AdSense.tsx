import Script from "next/script";

type Props = {
   pid: string;
};

function AdSense({ pid }: Props) {
   return (
      <>
         <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
         />

         <Script id="google-tag" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=AW-16697496043`} />
         <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16697496043');
          `}
         </Script>
      </>
   );
}
export default AdSense;
