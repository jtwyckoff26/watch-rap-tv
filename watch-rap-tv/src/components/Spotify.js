import React from 'react';
import { useEffect } from 'react';

const Spotify = () => {
    const call_spotify = () => {
        //console.log('Getting sub status');
          let myParam;
          let baseString;
          let searchString;
          searchString = window.location.search;
          const urlParams = new URLSearchParams(window.location.search);
          console.log("urlParams: ", window.location.search)
          console.log("urlParams.get('video'): ", urlParams.get('video'));
          if (searchString.includes('video')) {
              myParam = urlParams.get('video');
              baseString = "www.youtube.com/watch?v=";
          }
          else {
              myParam = "";
              baseString = "www.youtube.com/channel/UC-pariAxZlINnspVJEAy2Zw";
          }

          var desktopFallback = `https://${baseString}${myParam}`,
          mobileFallback = `https://${baseString}${myParam}`,
          app = `vnd.youtube://${baseString}${myParam}`;

          if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
              window.location = app;
              window.setTimeout(function() {
                  window.location = mobileFallback;
              }, 25);
          } else {
              window.location = desktopFallback;
          }

          function killPopup() {
              window.removeEventListener('pagehide', killPopup);
          }

          window.addEventListener('pagehide', killPopup);
    };

    useEffect(() => {
         //console.log('Use effect');
        call_spotify();
    });

    return (
        <div>
            
        </div>
    );
};

export default Spotify;