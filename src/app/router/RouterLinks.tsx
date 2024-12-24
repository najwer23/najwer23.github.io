import { TextBox, type TextBoxTag } from 'najwer23snacks/lib/Textbox';
import { Link } from 'react-router-dom';

export const RouterLinks: React.FC<{
  routes: { name: string; to: string; isTitle?: boolean; outside?: boolean }[];
  tag: TextBoxTag;
  className?: string;
}> = ({ routes, tag, className }) => {
  return (
    <>
      {routes.map((v) =>
        v.outside ? (
          <TextBox key={v.to} href={v.to} target="_blank" tag={tag}>
            {v.name}
          </TextBox>
        ) : (
          <TextBox key={v.to} tag={tag} isTitle={v.isTitle} className={className}>
            <Link to={v.to}>{v.name}</Link>
          </TextBox>
        ),
      )}
    </>
  );
};
