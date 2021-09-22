import { Txt } from './Text.styles';

export interface TextProps {
  content: string;
  option: 'title' | 'subtitle' | 'content' | 'text' | 'whiteTitle';
  center?: boolean;
}

const Text = ({ center, content, option, ...props }: TextProps) => {
  return (
    <>
      <Txt center={center} option={option} {...props}>
        {content}
      </Txt>
    </>
  );
};

export default Text;
