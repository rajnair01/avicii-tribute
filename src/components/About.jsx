import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle title="About Me" />
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          suscipit natus eos, aspernatur voluptatibus porro sint soluta
          veritatis consequuntur deserunt! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa sit illo adipisci beatae vitae
          inventore magnam expedita deserunt, quos animi! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Recusandae, consectetur.
        </p>
        <a
          href="#"
          className="block mt-3 text-md md:text-lg text-gray-600 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          random@email.com
        </a>
      </div>
      <img
        src="https://images.pexels.com/photos/20094356/pexels-photo-20094356/free-photo-of-a-church-in-the-mountains-with-a-view-of-the-valley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}
export default About;
