import profileImage from "../../../../assets/profileImagejpg.jpg";

export default function AboutMe(): React.ReactNode {
  return (
    <div
      id="about_me"
      className="pt-12 min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold p-4">Bartosz Zych</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img
            className="rounded-full w-[300px] p-4"
            src={profileImage}
            alt="Image"
          />
          <p className="text-center lg:text-left md:w-[600px] p-4 whitespace-pre-line">
            {`With a strong foundation in full-stack development and a keen eye
            for intuitive, efficient design, I specialize in crafting web
            applications that balance creativity with functionality. My
            experience spans from low-code automation to product development,
            where I work with technologies like React, NextJS, and PostgreSQL to
            bring complex ideas to life.
            
            Whether transforming workflows through
            low-code automation or creating engaging frontend experiences, I’m
            dedicated to translating user needs into streamlined, scalable
            solutions. My recent work includes creating custom web applications,
            responsive websites, and interactive training platforms that not
            only meet but exceed client expectations.
            
            Driven by a passion for
            problem-solving and continuous learning, I approach each project
            with a fresh perspective, drawing from both industry standards and
            innovative techniques. Based in London, I’m always eager to connect
            with other tech enthusiasts and forward-thinking businesses
            interested in leveraging modern tech for impactful solutions.`}
          </p>
        </div>
      </div>
    </div>
  );
}
