/* =====================================================================
   GOOGLE ANALYTICS 4 (opcional)
   ===================================================================== */

    const GA_MEASUREMENT_ID = ""; // ej: G-XXXXXXXXXX
    if (GA_MEASUREMENT_ID) {
      const gaTag = document.createElement('script');
      gaTag.async = true;
      gaTag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
      document.head.appendChild(gaTag);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
    }
