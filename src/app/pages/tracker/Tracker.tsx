import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@najwer23/hooks/useImmediateThrottledQuery';
import { Spinner } from '@najwer23/spinner/Spinner';
import L from 'leaflet';
import { Grid } from 'najwer23snacks/lib/Grid';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { CircleMarker, MapContainer, Polyline, TileLayer } from 'react-leaflet';
import styles from './Tracke.module.css';
import { type QueryTrackerData, queryTrackerData } from './Tracker.query';
import 'leaflet/dist/leaflet.css';
import { faBurger, faGaugeHigh, faHourglassHalf, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tracker: React.FC<{ title: string }> = ({ title }) => {
  useDocumentTitle(title);

  const { result, isLoading } = useImmediateThrottledQuery<QueryTrackerData>({
    queryKey: ['tracker', 'tracker'],
    queryFn: () => queryTrackerData(),
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 30 * 60 * 1000,
    retry: 0,
    enabled: true,
  });

  const formatMsToHHMM = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hh = hours.toString().padStart(2, '0') + 'h';
    const mm = minutes.toString().padStart(2, '0') + 'm';
    const ss = seconds.toString().padStart(2, '0') + 's';

    return `${hh} / ${mm} / ${ss}`;
  };

  return (
    <Grid widthMax={1400} layout="container" padding="10px" margin="auto">
      {isLoading && <Spinner />}

      <div style={{ minHeight: '1000px' }}>
        {!isLoading && (
          <>
            <TextBox tag="h1">Tracker sessions</TextBox>

            <Grid widthMax={1400} layout="container" padding="0" margin="auto auto -100px">
              {result?.data.items.length == 0 && <TextBox tag="p">There are currently no sessions :(</TextBox>}

              {result?.data.items.map((v, i) => (
                <Grid
                  key={`tracker-item-${i}`}
                  widthMax={1400}
                  layout="container"
                  padding="10px 0 100px 0"
                  margin="auto"
                >
                  <Grid
                    layout="columns"
                    gap={{ col: '100px', row: '15px' }}
                    col={{ mobile: 1, smallDesktop: 2, desktop: 2, tablet: 2 }}
                  >
                    <div>
                      <MapContainer
                        center={[v.locationsList[0].lat, v.locationsList[0].lon]}
                        zoom={18}
                        scrollWheelZoom={false}
                        style={{ height: '400px', width: '100%' }}
                      >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Polyline
                          positions={v.locationsList.map((x) => [x.lat, x.lon])}
                          pathOptions={{ color: '#FB8C00', weight: 3 }}
                          renderer={L.canvas()}
                        />
                        {v.locationsList.length > 0 && (
                          <CircleMarker
                            center={[v.locationsList[0].lat, v.locationsList[0].lon]}
                            radius={8}
                            pathOptions={{ color: '#D32F2F', fillColor: '#D32F2F', fillOpacity: 1, weight: 2 }}
                          />
                        )}
                        {v.locationsList.length > 1 && (
                          <CircleMarker
                            center={[
                              v.locationsList[v.locationsList.length - 1].lat,
                              v.locationsList[v.locationsList.length - 1].lon,
                            ]}
                            radius={8}
                            pathOptions={{ color: '#228B22', fillColor: '#228B22', fillOpacity: 1, weight: 2 }}
                          />
                        )}
                      </MapContainer>
                    </div>
                    <div>
                      <Grid
                        layout="columns"
                        gap={{ col: '10px', row: '0px' }}
                        col={{ mobile: 2, smallDesktop: 2, desktop: 2, tablet: 2 }}
                      >
                        <div>
                          <TextBox tag="p">
                            <FontAwesomeIcon icon={faRoute} size={'2x'} />
                          </TextBox>
                          <TextBox tag="h3" className={styles.resultText}>
                            {(v.totalDistance / 1000).toFixed(3)} km
                          </TextBox>
                        </div>
                        <div>
                          <TextBox tag="p">
                            <FontAwesomeIcon icon={faHourglassHalf} size={'2x'} />
                          </TextBox>
                          <TextBox tag="h3">{formatMsToHHMM(v.duration)}</TextBox>
                        </div>
                        <div>
                          <TextBox tag="p">
                            <FontAwesomeIcon icon={faGaugeHigh} size={'2x'} />
                          </TextBox>
                          <TextBox tag="h3">
                            {((v.totalDistance / (v.duration / 1000)) * 3.6).toFixed(2) + ' km / h'}
                          </TextBox>
                        </div>
                        <div>
                          <TextBox tag="p">
                            <FontAwesomeIcon icon={faBurger} size={'2x'} />
                          </TextBox>
                          <TextBox tag="h3">
                            {((3.3 * 100 * (v.duration / 1000) * 3.5) / (200 * 60) / 655).toFixed(2)}
                          </TextBox>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </Grid>
  );
};
