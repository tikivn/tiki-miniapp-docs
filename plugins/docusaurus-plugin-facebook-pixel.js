module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {facebook} = themeConfig || {};

  if (!facebook || !facebook.pixelId) {
    throw new Error(
      `You need to specify "pixelId" in "themeConfig" to use docusaurus-plugin-facebook-pixel.`,
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-facebook-pixel',
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'meta',
            attributes: {
              name: 'facebook-domain-verification',
              content: 'u0o45s2fcro07zfo4qdxcyp7wmv1e2',
            },
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              id: 'facebook-pixel',
            },
            innerHTML: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebook.pixelId}');
              fbq('track', 'PageView');
            `,
          },
        ],
      };
    },
  };
};
