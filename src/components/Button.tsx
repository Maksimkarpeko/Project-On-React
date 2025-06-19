export const Button = ({
  text,
  className,
  img,
}: {
  text: string;
  className?: string;
  img?: string;
}) => {
  return (
    <>
      <button className={className}>
        <img src={img} alt="" />
        {text}
        Проверка
      </button>
    </>
  );
};
