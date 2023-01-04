import { useEffect } from 'react';
import Snap from 'snapsvg';
export const useSnapSvg = ({ idSvg }) => {
  useEffect(() => {
    const s = Snap(`#${idSvg}`);
    if (s) {
      const markers = s.selectAll('g[id*="marker-"]');
      markers.forEach((marker) => {
        const evenPath = marker.selectAll('path:nth-child(even)');
        marker.hover(
          () => {
            marker
              .stop()
              .animate(
                { transform: 's1.5,1.5t0,-4' },
                100,
                mina.linear,
                () => {},
              );
            evenPath.attr({ fill: '#F16787' });
          },
          () => {
            marker.stop().animate({ transform: 's1,1t0,0' }, 100, mina.linear);
            evenPath.attr({ fill: '#007AFF' });
          },
        );
      });
    }
  }, [idSvg]);
};
