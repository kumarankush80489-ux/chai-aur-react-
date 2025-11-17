import React, { useEffect } from "react";

export default function Facebook() {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">
        Follow Us on Facebook
      </h1>

      <div
        className="fb-page"
        data-href="https://www.facebook.com/Facebook"
        data-tabs="timeline"
        data-width="400"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/Facebook"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Facebook">Facebook</a>
        </blockquote>
      </div>
    </div>
  );
}
