import { useMutation } from '@tanstack/react-query';
import { Button } from 'najwer23morsels/lib/Button';
import type { FormType } from 'najwer23morsels/lib/Form';
import { Form } from 'najwer23morsels/lib/Form';
import { Grid } from 'najwer23morsels/lib/Grid';
import { Input } from 'najwer23morsels/lib/Input';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { queryContact } from './Contact.query';
import 'leaflet/dist/leaflet.css';
import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { CenterMapButton } from '@app/leaflet/CenterMapButton';
import { MarkerWithPopup } from '@app/leaflet/MarkerWithPopup';
import { Typography } from 'najwer23morsels/lib/Typography';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const [mapIsFlying, setMapIsFlying] = useState(false);

  useDocumentTitle('Contact | Mariusz Najwer');

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
    <Grid layout="container" widthMax={'1400px'} padding={'0 20px 0px 20px'}>
      <Grid layout="container" widthMax="900px" margin={'0 0 40px 0'}>
        <Typography appearance="light" variant="display">
          Get in touch
        </Typography>
        <Typography appearance="light" variant="caption">
          All fields are required
        </Typography>
      </Grid>

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

            <Grid layout="flex" widthMax={'100%'} padding={'0'} justifyContent="left" alignItems="right">
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
          <Typography appearance="light" variant="subheading" margin={'clamp(0px, 40px - 8vw, 40px) 0 0 0'}>
            Contact
          </Typography>

          <Typography appearance="light" variant="body">
            najwer23@live.com
          </Typography>

          <Typography appearance="light" variant="subheading">
            Based in
          </Typography>

          <Typography appearance="light" variant="body">
            Wrocław, Poland
          </Typography>

          <Typography appearance="light" variant="subheading">
            Linkedin
          </Typography>

          <Typography appearance="light" variant="body">
            <Typography appearance="light" variant="link" href={'https://www.linkedin.com/in/najwer23'} target="_blank">
              linkedin.com/in/najwer23
            </Typography>
          </Typography>
        </div>
      </Grid>

      <Grid layout="container" widthMax={'100%'} margin={'60px 0 80px 0'}>
        <div className={styles.mapContainerWrapper}>
          <MapContainer
            center={[51.094598, 17.020876]}
            zoom={13}
            style={{ height: '550px', width: '100%' }}
            closePopupOnClick={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              className={styles.mapContainerWrapper}
            />
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
