import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list=[] }) {

  const ComponentsList = {
    message: Message,
    response: Response,
    typing: Typing,
  };

  return (
    <ul>
      {list.map((item) => {
        const ComponentName = ComponentsList[item.type];
        return <ComponentName key={item.id} from={item.from} message={{ time: item.time, text: item.text }} />
      })}
    </ul>
  );
}
