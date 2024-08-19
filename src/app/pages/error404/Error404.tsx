import { Container } from 'najwer23storybook/lib/Container';
import { Text } from 'najwer23storybook/lib/Text';
import { Footer } from 'najwer23storybook/lib/Footer';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';

interface Props {
  title: string
}

export const Error404 = ({ title }: Props) => {
  useDocumentTitle(title)

  return <Container kind="section">
    <Text kind="h2"> 404.. </Text>
    <br />
    <Text kind="p">
      In the grand tapestry of the digital realm, where links fade and pages vanish like whispers on the wind, we extend
      our deepest apologies, valiant seeker. The path you tread has veered into the shadows of the 404 void, a realm
      where even the bravest of servers falter. Yet, like Aragorn leading the Fellowship through the perils of
      Middle-earth, we stand ready to guide you back to the light of your intended destination. May the wisdom of the
      White Council illuminate your way, and the courage of Frodo spur you onward. With hearts united in the spirit of
      adventure, let us together defy this error and embark on a quest to reclaim the lost page. Our sincerest
      apologies, noble traveler, for in this digital age, even the most unexpected detours can lead to unforeseen
      discoveries and tales yet untold. Onward, for the web is vast and full of wonders awaiting your arrival.
    </Text>
    <Footer />
  </Container>
};
