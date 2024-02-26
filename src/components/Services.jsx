import SectionTitle from "./SectionTitle";
import servicesData from "../data/servicesData";
import ServiceItem from "../components/ServiceItem";

function Services() {
  return (
    <div className="py-12">
      <SectionTitle title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          ></ServiceItem>
        ))}
      </div>
    </div>
  );
}
export default Services;
