/*
import "../styles/social.css";

export default function Social() {
  return (
    <section className="social-page">
      <div className="container">
        <h1>Pruebas de redes sociales</h1>
        <p>
          Página de pruebas para mostrar publicaciones de Instagram y TikTok
          mediante embeds oficiales.
        </p>

        
        <div className="social-embed">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DN2eKdpWABb/?igsh=dXl2dmczZnVzdjcz"
            data-instgrm-version="14"
          ></blockquote>
        </div>

        
        <div className="social-embed">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@guillermocriminologo/video/7565575383643393302"
            data-video-id="7565575383643393302"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          >
          </blockquote>
        </div>
      </div>
    </section>
  );
}
*/

import { useEffect } from "react";
import "../styles/social.css";

export default function Social() {
  useEffect(() => {
    // Instagram
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // TikTok
    if (window.tiktokEmbedLoad) {
      window.tiktokEmbedLoad();
    }
  }, []);

  return (
    <section className="social-page">
      <div className="container">
        <h1>Pruebas de redes sociales</h1>
        <p>
          Página de pruebas para mostrar publicaciones reales de Instagram y TikTok.
        </p>

        <div className="social-embed">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DN2eKdpWABb/?igsh=dXl2dmczZnVzdjcz"
            data-instgrm-version="14"
          ></blockquote>
        </div>

        <div className="social-embed">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@guillermocriminologo/video/7565575383643393302"
            data-video-id="YYYYYYYYY"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          ></blockquote>
        </div>
      </div>
    </section>
  );
}