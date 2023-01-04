import { useOnElementClick } from '$hooks/useOnElementClick';
import Map from 'public/1F_map.svg';
import { useSnapSvg } from '$hooks/useSnapSvg';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styles from './StoreMap.module.css';

const StoresMap = () => {
  useSnapSvg({ idSvg: 'store' });
  useOnElementClick({
    selector: 'g[id*="marker-"]',
    callback: (e) => {
      const target = e.target;
      if (target) {
        console.log(target.getAttribute('id'));
      }
    },
  });
  return (
    <TransformWrapper
      panning={{ disabled: false }}
      centerZoomedOut
      centerOnInit
      wheel={{ disabled: true }}
      contentStyle={{
        maxWidth: '100vw',
      }}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div style={{ width: '100%', height: 'calc(100vh - 50px)' }}>
          <div className={styles.tools}>
            <button className={styles.buttonSecondary} onClick={() => zoomIn()}>
              +
            </button>
            <button
              className={styles.buttonSecondary}
              onClick={() => zoomOut()}
            >
              -
            </button>
          </div>

          <div
            style={
              {
                // width: '100vw',
                // height: '100vh',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
              }
            }
          >
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: 'calc(100vh - 50px)',
              }}
            >
              <Map id="store" />
            </TransformComponent>
          </div>
        </div>
      )}
    </TransformWrapper>
  );
};

export default StoresMap;
