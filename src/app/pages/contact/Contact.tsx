import { useMutation } from '@tanstack/react-query';
import { Button } from 'najwer23morsels/lib/button';
import { Form } from 'najwer23morsels/lib/form';
import type { FormType } from 'najwer23morsels/lib/form/Form';
import { Grid } from 'najwer23morsels/lib/grid';
import { Input } from 'najwer23morsels/lib/input';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { queryContact } from './Contact.query';
import 'leaflet/dist/leaflet.css';
import { CenterMapButton } from '@najwer23/leaflet/CenterMapButton';
import { MarkerWithPopup } from '@najwer23/leaflet/MarkerWithPopup';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

export const Contact: React.FC = () => {
  const [mapIsFlying, setMapIsFlying] = useState(false);

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
          <Form
            onSubmit={handleOnSubmit}
            isError={isError}
            isPending={isPending}
            isSuccess={data?.code === 'OK'}
            errorMsg={error?.message}
            successMsg={data?.message}
          >
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
                backgroundColor="orangered"
                backgroundColorDisabled="grey"
              >
                <TextBox tag="span" desktopSize={16} mobileSize={16} fontWeight={400} color="white">
                  Submit
                </TextBox>
              </Button>
            </Grid>
          </Form>
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
          <MapContainer center={[51.094598, 17.020876]} zoom={13} style={{ height: '550px', width: '100%' }}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            <MarkerWithPopup mapIsFlying={mapIsFlying} setMapIsFlying={setMapIsFlying} />
            <CenterMapButton center={[51.094598, 17.020876]} zoom={13} onCenter={() => setMapIsFlying(true)} />
          </MapContainer>
        </div>
        <TextBox mobileSize={12} desktopSize={12} color="grey" margin={'5px 0 0 0'} lineHeight={1}>
          Sky Tower is one of Poland’s tallest and most iconic buildings, located in the heart of Wrocław.
        </TextBox>
      </Grid>
    </Grid>
  );
};
