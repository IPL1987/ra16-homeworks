import Video from "./Video";
import Article from "./Article";
import withWrapper from "./WithWrapper";

const VideoWithWrapper = withWrapper(Video);
const AticleWithWrapper = withWrapper(Article);
export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithWrapper key={Math.random()} {...item} />
        );
      case 'article':
        return (
          <AticleWithWrapper key={Math.random()} {...item} />
        );
      default:
        return null;
    }
  });
};