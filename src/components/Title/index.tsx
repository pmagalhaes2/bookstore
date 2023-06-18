interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <h1>{text}</h1>;
};
