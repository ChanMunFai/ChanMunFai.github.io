import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import RemarkMathPlugin from "remark-math";

const _mapProps = (props) => ({
  ...props,
  remarkPlugins: [
    RemarkMathPlugin
  ],
  components: {
    ...props.renderers,
    math: ({ value }) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
  }
});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;



export default Markdown;