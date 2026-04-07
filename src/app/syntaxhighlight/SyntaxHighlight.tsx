import javascript from '@shikijs/langs/javascript';
import ayuLight from '@shikijs/themes/ayu-light';
import { CopyButton } from 'najwer23morsels/lib/CopyButton';
import { useLayoutEffect, useState } from 'react';
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import styles from './CodeParser.module.css';

const highlighter = createHighlighterCore({
  themes: [ayuLight],
  langs: [javascript],
  engine: createJavaScriptRegexEngine(),
});

interface SyntaxHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({ children, className, ...props }) => {
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
