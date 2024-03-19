import { Item } from './ProjectsItem.style';

function ProjectsItem({ onClick, layoutId, imgUrl, subTitle, mainTItle }) {
  return (
    <Item onClick={onClick} layoutId={layoutId}>
      <img src={imgUrl} alt="" />
      <div className="overlay"></div>
      <div className="title">
        <div className="title__sub">{subTitle}</div>
        <div className="title__main">{mainTItle}</div>
      </div>
    </Item>
  )
}

export default ProjectsItem;