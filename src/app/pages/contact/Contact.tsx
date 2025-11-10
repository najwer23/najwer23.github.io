import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'najwer23snacks/lib/Button';
import { Form, FormType } from 'najwer23snacks/lib/Form';
import { Grid } from 'najwer23snacks/lib/Grid';
import { Input } from 'najwer23snacks/lib/Input';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { queryContact } from './Contact.query';

export const Contact: React.FC<{
  title: string;
}> = ({ title }) => {
  useDocumentTitle(title);

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
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <Grid widthMax={500} layout="container" padding="0" margin="0">
        <TextBox tag="h1"> Contact</TextBox>

        <Form onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="email" validatorOptions={[{ type: 'empty' }, { type: 'email' }]} />

          <Input kind="textarea" label="Message" type="text" name="msg" validatorOptions={[{ type: 'empty' }]} />

          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
        </Form>

        {isError && <TextBox>{error?.message}</TextBox>}
        {isPending && <TextBox>Loading..</TextBox>}
        {data?.code === 'OK' && <TextBox>{data?.message}</TextBox>}
      </Grid>
    </Grid>
  );
};
