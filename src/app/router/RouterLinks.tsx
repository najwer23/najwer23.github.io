import { TextBox, type TextBoxTag } from 'najwer23snacks/lib/Textbox';
import { Link } from 'react-router-dom';

export const RouterLinks: React.FC<{
  routes: { name: string; to: string; isTitle?: boolean }[];
  tag: TextBoxTag;
  className?: string;
}> = ({ routes, tag, className }): JSX.Element => {
  return (
    <>
      {routes.map((v) => (
        <TextBox key={v.to} tag={tag} isTitle={v.isTitle} className={className}>
          <Link to={v.to}>{v.name}</Link>
        </TextBox>
      ))}
    </>
  );
};
