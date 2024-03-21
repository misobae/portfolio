import { Item } from './ProjectsItem.style';

function ProjectsItem({ onClick, layoutId, thumbSrc, tech, title }) {
  const techList = tech.join(" | ");

  return (
    <Item onClick={onClick} layoutId={layoutId}>
      <img src={thumbSrc} alt="" />
      <div className="overlay"></div>
      <div className="title">
        <div className="title__sub">{techList}</div>
        <div className="title__main">{title}</div>
      </div>
    </Item>
  )
}

export default ProjectsItem;