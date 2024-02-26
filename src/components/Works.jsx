import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import workData from "../data/workData";

function Works() {
  return (
    <div className="py-12">
      <SectionTitle id="works" title="Recent Works" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {workData.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
          ></WorkItem>
        ))}
      </div>
    </div>
  );
}
export default Works;
