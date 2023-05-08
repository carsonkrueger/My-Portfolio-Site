type privateProps = {
  name: String;
  body: String;
};

export default function Skill({ name, body }: privateProps) {
  return (
    <div className="flex flex-row justify-between space-x-10">
      <div>{name}</div>
      <div>{body}</div>
    </div>
  );
}
