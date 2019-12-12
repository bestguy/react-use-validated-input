import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Example = ({ code }) => (
  <Highlight {...defaultProps} code={code} language="javascript">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={`${className} p-3 rounded`} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default Example;
