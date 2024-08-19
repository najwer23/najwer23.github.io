import { Text } from 'najwer23storybook/lib/Text';
import { GridMasonry } from 'najwer23storybook/lib/GridMasonry';
import { QuoteCard } from './QuoteCard';
import { QUOTES } from './Quotes.const';
import { Container } from 'najwer23storybook/lib/Container';
import { useState } from 'react';
import { Footer } from 'najwer23storybook/lib/Footer';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';

interface Props {
  title: string;
}

export const Quotes = ({ title }: Props) => {
  const [isLoadEnd, setIsLoadEnd] = useState(false);

  useDocumentTitle(title);

  return (
    <Container kind="section">
      <Text kind="h2"> Quotes </Text>
      <br />
      <br />
      <GridMasonry
        gap={{
          col: '20px',
          row: '20px',
        }}
        col={{
          mobile: 1,
          smallDesktop: 2,
          desktop: 3,
          tablet: 2,
        }}
        onGridMasonryLoadEnd={(v) => setIsLoadEnd(v)}>
        {QUOTES &&
          QUOTES.map(({ quote, author }, id) => <QuoteCard quote={quote} author={author} quoteId={id + 1} key={id} />)}
      </GridMasonry>
      {isLoadEnd && <Footer />}
    </Container>
  );
};
