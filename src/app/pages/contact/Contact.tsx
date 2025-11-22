import { useMutation } from '@tanstack/react-query';
import { Button } from 'najwer23morsels/lib/button';
import { Form } from 'najwer23morsels/lib/form';
import type { FormType } from 'najwer23morsels/lib/form/Form';
import { Grid } from 'najwer23morsels/lib/grid';
import { Input } from 'najwer23morsels/lib/input';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { queryContact } from './Contact.query';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const CenterMapButton = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();

  const handleClick = () => {
    map.setView(center, zoom);
  };

  return (
    <Button
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000,
      }}
      type="submit"
      height={'40px'}
      width={'40px'}
      padding={0}
      margin={0}
      backgroundColor="orangered"
      backgroundColorDisabled="grey"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        height="20px"
        width="20px"
        version="1.1"
        id="Capa_1"
        viewBox="0 -20 492.589 492.589"
      >
        <g>
          <path d="M468.467,222.168h-28.329c-9.712-89.679-80.46-161.18-169.71-172.258V24.135c0-13.338-10.791-24.134-24.134-24.134   c-13.311,0-24.117,10.796-24.117,24.134V49.91C132.924,60.988,62.177,132.488,52.482,222.168H24.153   C10.806,222.168,0,232.964,0,246.286c0,13.336,10.806,24.132,24.153,24.132h29.228c12.192,86.816,81.551,155.4,168.797,166.229   v31.804c0,13.336,10.806,24.135,24.117,24.135c13.343,0,24.134-10.799,24.134-24.135v-31.804   c87.228-10.829,156.607-79.413,168.775-166.229h29.264c13.33,0,24.122-10.796,24.122-24.132   C492.589,232.964,481.797,222.168,468.467,222.168z M246.294,398.093c-85.345,0-154.804-69.453-154.804-154.813   c0-85.363,69.459-154.813,154.804-154.813c85.376,0,154.823,69.45,154.823,154.813   C401.117,328.639,331.671,398.093,246.294,398.093z" />
          <path d="M246.294,176.93c-36.628,0-66.34,29.704-66.34,66.349c0,36.635,29.711,66.349,66.34,66.349   c36.66,0,66.34-29.713,66.34-66.349C312.634,206.635,282.955,176.93,246.294,176.93z" />
        </g>
      </svg>
    </Button>
  );
};

{
  /* <button
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        padding: '6px 12px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      Center Map
    </button> */
}

export const Contact: React.FC<{}> = () => {
  const { mutate, isPending, isError, data, error } = useMutation({
    mutationKey: ['queryContact', 'queryContact'],
    mutationFn: queryContact,
  });

  const handleOnSubmit = (form: FormType) => {
    if (Object.values(form).some(({ error }) => error)) return;
    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    mutate(dataForm);
  };

  return (
    <Grid layout="container" widthMax={'1400px'} padding={'clamp(40px, 8vw, 60px) 20px 40px 20px'}>
      <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin={'0 0 10px 0'}>
        Get in touch
      </TextBox>

      <TextBox tag="h2" desktopSize={14} mobileSize={14} fontWeight={500} margin={'0 0 40px 0'}>
        All fields are required.
      </TextBox>

      <Grid
        layout="columns"
        gap={{ col: '100px', row: '20px' }}
        col={{
          smallDesktop: 2,
          desktop: 2,
          mobile: 1,
          tablet: 2,
        }}
      >
        <div>
          <Form onSubmit={handleOnSubmit}>
            <Input
              label="Email"
              type="text"
              name="email"
              validatorOptions={[{ type: 'empty' }, { type: 'email' }]}
              placeholder="Your email address"
            />

            <Input
              kind="textarea"
              label="Message"
              type="text"
              name="msg"
              validatorOptions={[{ type: 'empty' }]}
              placeholder="Place for your message"
            />

            <Grid layout="flex" widthMax={'100%'} padding={'0'} justifyContent="right" alignItems="right">
              <Button
                type="submit"
                disabled={isPending}
                height={'40px'}
                width={'80px'}
                padding={0}
                margin={'0 0 20px 0'}
                backgroundColor="orangered"
                backgroundColorDisabled="grey"
              >
                <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                  Submit
                </TextBox>
              </Button>
            </Grid>
          </Form>

          {isError && (
            <TextBox color="#ff3333" mobileSize={14} desktopSize={14}>
              {error?.message}
            </TextBox>
          )}
          {isPending && (
            <TextBox color="orange" mobileSize={14} desktopSize={14}>
              Loading..
            </TextBox>
          )}
          {data?.code === 'OK' && (
            <TextBox color="#4BB543" mobileSize={14} desktopSize={14}>
              {data?.message}
            </TextBox>
          )}
        </div>

        <div>
          <TextBox tag="h3" desktopSize={25} mobileSize={25} fontWeight={500} margin={'0 0 10px 0'}>
            Contact
          </TextBox>

          <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} margin={'0'}>
            najwer23@live.com
          </TextBox>

          <TextBox tag="h3" desktopSize={25} mobileSize={25} fontWeight={500} margin={'30px 0 10px 0'}>
            Based in
          </TextBox>

          <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} margin={'0 0 10px 0'}>
            Wrocław, Poland
          </TextBox>

          <TextBox tag="h3" desktopSize={25} mobileSize={25} fontWeight={500} margin={'30px 0 10px 0'}>
            Linkedin
          </TextBox>

          <TextBox
            tag="a"
            desktopSize={18}
            mobileSize={16}
            href={'https://www.linkedin.com/in/najwer23'}
            target="_blank"
          >
            linkedin.com/in/najwer23
          </TextBox>
        </div>
      </Grid>

      <Grid layout="container" widthMax={'100%'} margin={'60px 0 60px 0'}>
        <div style={{ padding: '5px', border: '2px solid black' }}>
          <MapContainer
            center={[51.094598, 17.020876]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '550px', width: '100%' }}
          >
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
            {/* <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" /> */}
            <Marker position={[51.094598, 17.020876]}>
              <Popup>Sky Tower, Wrocław</Popup>
            </Marker>
            <CenterMapButton center={[51.094598, 17.020876]} zoom={13} />
          </MapContainer>
        </div>
        <TextBox mobileSize={12} desktopSize={12} color="grey">
          Sky Tower is one of Poland’s tallest and most iconic buildings, located in the heart of Wrocław.
        </TextBox>
      </Grid>
    </Grid>
  );
};
