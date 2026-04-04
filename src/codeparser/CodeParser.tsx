import { CopyButton } from 'najwer23morsels/lib/CopyButton';
import styles from './CodeParser.module.css';

interface CodeParserProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CodeParser: React.FC<CodeParserProps> = ({ children, className, ...props }) => {
  return (
    <div className={[styles.n23CodeParser, 'n23CodeParser', className].filter(Boolean).join(' ')} {...props}>
      <div className={styles.codeWrap}>
        <div className={styles.copyButtonSticky}>
          <CopyButton textToCopy={String(children)} />
        </div>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};
