import DateTime from "./DateTime";
import withPretty from './Pretty';

const DateTimePretty = withPretty(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe title={props.url} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      {/* <DateTime date={props.date} /> */}
      <DateTimePretty date={props.date} />
    </div>
  )
}