import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../components/ui/PageTitle";

const Policy = () => (
  <>
    <PageTitle title="Policy" />
    <Helmet>
      <html lang="en" />
      <title>Privacy Policy for Ebasr App - FreePrivacyPolicy.com</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex" />
      <meta
        property="og:title"
        content="Privacy Policy for Ibasr App - FreePrivacyPolicy.com"
      />
      <meta
        property="og:image"
        content="https://www.freeprivacypolicy.com/public/images/meta_og_image_livelink.png"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta
        property="og:url"
        content="https://www.freeprivacypolicy.com/live/41ab9859-ec2e-41bf-80ba-4d0f7b58f26c"
      />
      <meta property="og:site_name" content="FreePrivacyPolicy.com" />
      <link rel="stylesheet" href="/public/livelink/css/livelink.css" />
      <link
        rel="canonical"
        href="https://www.freeprivacypolicy.com/live/41ab9859-ec2e-41bf-80ba-4d0f7b58f26c"
      />
      <style>
        {`
          body { transition: opacity ease-in 0.2s; }
          body[unresolved] {
            opacity: 0;
            display: block;
            overflow: hidden;
            position: relative;
          }
        `}
      </style>
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QSMNQ8CKJG"
      />
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QSMNQ8CKJG');
      `}</script>
    </Helmet>

    <div className="policy-page edit-page mobile-container">
      <section>
        <div className="container">
          <p className="title">Privacy Policy for Ibasr App</p>
        </div>
      </section>

      <div className="translations-content-container">
        <div className="container">
          <div className="tab-content translations-content-item en visible">
            {/* Paste your full policy HTML here, converted to JSX */}
            {/* Example: */}
            <h1>Privacy Policy</h1>
            <p>Last updated: July 09, 2023</p>
            <p>
              This Privacy Policy describes Our policies ... the{" "}
              <a
                href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Privacy Policy Generator
              </a>
              .
            </p>
            {/* Continue with rest of sections in JSX form */}
            <h1>Contact Us</h1>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul>
              <li>By email: aljoker200015@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>
            Generated using{" "}
            <a
              href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Privacy Policy Generator
            </a>
          </p>
        </div>
      </footer>
    </div>
  </>
);

export default Policy;
