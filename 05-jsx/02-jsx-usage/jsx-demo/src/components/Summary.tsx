import type { PropsWithChildren } from 'react';
import './Summary.css';

// type Props = { title: string; folded?: boolean } & PropsWithChildren;

type Props = PropsWithChildren<{
    title: string;
    folded?: boolean;
  }>;
  

const Summary: React.FC<Props> = ({ title, folded = false, children }) => {
  console.log(children);

  return (
    <details className="story" open={!folded}>
      <summary>{title}</summary>
      {children}
    </details>
  );
};

export default Summary;