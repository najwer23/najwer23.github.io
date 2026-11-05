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
import { AttributionControl, MapContainer, TileLayer } from 'react-leaflet';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const [mapIsFlying, setMapIsFlying] = useState(false);

  useDocumentTitle('Contact | Mariusz Najwer');

  const {
    mutate: mutateQueryContact,
    isPending: isPendingQueryContact,
    isError: isErrorQueryContact,
    data: dataQueryContact,
    error: errorQueryContact,
  } = useMutation({
    mutationKey: ['queryContact', 'queryContact'],
    mutationFn: queryContact,
  });

  const handleOnSubmitContact = (form: FormType) => {
    if (Object.values(form).some(({ error }) => error)) return;
    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    mutateQueryContact(dataForm);
  };

  return (
    <Grid layout="container" widthMax={'1400px'} padding={'0 20px 0px 20px'}>
      <Grid layout="container" widthMax="900px" margin={'0 0 40px 0'}>
        <Typography variant="display">Say Hello</Typography>
        <Typography variant="subheading">I’m always open to new projects and collaborations.</Typography>
        <Typography variant="body">Send me a message and I’ll reply soon.</Typography>
      </Grid>

      <Grid
        margin="30px 0 50px 0"
        layout="split"
        gap={{ col: '50px', row: '30px' }}
        split={{
          mobile: '1fr',
          tablet: ['350px', '1fr'],
          smallDesktop: ['550px', '1fr'],
        }}
      >
        <div>
          <Form
            onSubmit={handleOnSubmitContact}
            isError={isErrorQueryContact}
            isPending={isPendingQueryContact}
            isSuccess={dataQueryContact?.code === 'OK'}
            errorMsg={errorQueryContact?.message}
            successMsg={dataQueryContact?.message}
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
              minHeight={'350px'}
              type="text"
              name="msg"
              validatorOptions={[{ type: 'empty' }]}
              placeholder="Place for your message"
            />

            <Grid layout="flex" widthMax={'100%'} padding={'0'} justifyContent="left" alignItems="right">
              <Button
                type="submit"
                disabled={isPendingQueryContact}
                height={'40px'}
                width={'80px'}
                padding={0}
                variant="primary"
              >
                <TextBox desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
                  Submit
                </TextBox>
              </Button>
            </Grid>
          </Form>
        </div>

        <div>
          <Grid layout="container" widthMax={'100%'} margin={'18px 0 30px 0'}>
            <div className={styles.mapContainerWrapper}>
              <MapContainer
                center={[51.094598, 17.020876]}
                zoom={13}
                style={{ height: '418px' }}
                closePopupOnClick={false}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=cb1_2e54_1_f2da3b477a787ddc0d5212ae"
                  className={styles.mapContainerWrapper}
                  attribution='&copy; <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <AttributionControl prefix={false} position="bottomright" />

                <MarkerWithPopup mapIsFlying={mapIsFlying} setMapIsFlying={setMapIsFlying} />
                <CenterMapButton center={[51.094598, 17.020876]} zoom={13} onCenter={() => setMapIsFlying(true)} />
              </MapContainer>
            </div>
            <TextBox mobileSize={12} desktopSize={12} color="grey" margin={'5px 0 0 0'} lineHeight={1}>
              Sky Tower is one of Poland’s tallest and most iconic buildings, located in the heart of Wrocław.
            </TextBox>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
