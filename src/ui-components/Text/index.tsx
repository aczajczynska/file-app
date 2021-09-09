import { Txt } from './Text.styles';

export interface TextProps {
  content: string;
  option: 'title' | 'subtitle' | 'content';
}

const Text = ({ content, option, ...props }: TextProps) => {
  return (
    <>
      <Txt option={option} {...props}>
        {content}
      </Txt>
    </>
  );
};

export default Text;
