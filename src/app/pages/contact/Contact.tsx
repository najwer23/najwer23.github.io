import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';
import { Input } from 'najwer23storybook/lib/Input';
import { Textarea } from 'najwer23storybook/lib/Textarea';
import { Button } from 'najwer23storybook/lib/Button';
import { Text } from 'najwer23storybook/lib/Text';
import { Container } from 'najwer23storybook/lib/Container';
import { Footer } from 'najwer23storybook/lib/Footer';
import { useFetch } from '@najwer23/hooks/useFetch';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';

interface Props {
  title: string
}

export const Contact = ({title}: Props) => {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const [form, setForm] = useState(() => {
    return ['email', 'msg'].reduce((acc, key) => {
      acc[key] = { isError: false, value: '' };
      return acc;
    }, {} as { [key: string]: { isError: boolean; value: string } });
  });
  const { status, executeFetch } = useFetch<any>(
    import.meta.env.VITE_NAJWER23API_FASTIFY_ORIGIN + '/mail/contact-me',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    false,
  );

  useDocumentTitle(title)

  useEffect(() => {
    if (status === 'done') {
      setShowMsg(true);
      const timeId = setTimeout(() => {
        setShowMsg(false);
      }, 3000);
      return () => clearTimeout(timeId);
    }
  }, [status]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const firstErrorKey = Object.keys(form).find(key => form[key].isError || form[key].value == '');

    if (firstErrorKey) {
      const inputElement = document.getElementsByName(firstErrorKey)[0] as HTMLInputElement | HTMLTextAreaElement;
      if (inputElement) {
        inputElement.focus();
      }
      return;
    }

    executeFetch?.({
      email: form.email.value,
      msg: form.msg.value,
    });

    setForm(prev => ({
      ...prev,
      msg: { ...prev.msg, value: '' },
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, isError: boolean) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: { isError, value: e.target.value },
    }));
  };

  return (
    <Container kind="section">
      <Text kind="h2"> Contact </Text>

      <form onSubmit={handleSubmit}>
        <br />

        <div className={styles.customInputWrapper}>
          <Input
            errorOptions={{
              empty: true,
              email: true,
            }}
            label="Email"
            name="email"
            onBlur={(e, isError) => handleBlur(e, isError)}
            type="text"
          />
        </div>

        <div className={styles.customInputWrapper}>
          <Textarea
            errorOptions={{
              empty: true,
            }}
            label="Message"
            name="msg"
            onBlur={(e, isError) => handleBlur(e, isError)}
          />
        </div>

        <Button type={'submit'} text={'Send'} ariaLabel={'Send msg'} disabled={status === 'loading'} />
      </form>

      {status === 'loading' && (
        <div style={{ marginTop: '10px' }}>
          <FontAwesomeIcon icon={faSpinner} color={'black'} spinPulse size="1x" /> Loading..
        </div>
      )}

      {status === 'done' && showMsg && <div style={{ marginTop: '10px' }}>Email sent :)</div>}
      <Footer />
    </Container>
  );
};