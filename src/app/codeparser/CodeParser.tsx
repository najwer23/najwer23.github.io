import { CopyButton } from 'najwer23morsels/lib/CopyButton';
import { useLayoutEffect, useState } from 'react';
import { createHighlighter } from 'shiki';
import styles from './CodeParser.module.css';

const highlighter = createHighlighter({
  themes: ['ayu-light'],
  langs: ['javascript'],
});

interface CodeParserProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CodeParser: React.FC<CodeParserProps> = ({ children, className, ...props }) => {
  const code = String(children ?? '');
  const [html, setHtml] = useState<string>('');

  useLayoutEffect(() => {
    let alive = true;

    (async () => {
      const h = await highlighter;
      const rendered = h.codeToHtml(code, {
        lang: 'javascript',
        theme: 'ayu-light',
      });

      if (alive) setHtml(rendered);
    })();

    return () => {
      alive = false;
    };
  }, [code]);

  return (
    <div className={[styles.n23CodeParser, 'n23CodeParser', className].filter(Boolean).join(' ')} {...props}>
      <div className={styles.codeWrap}>
        <div className={styles.copyButtonSticky}>
          <CopyButton textToCopy={code} />
        </div>

        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre>
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
