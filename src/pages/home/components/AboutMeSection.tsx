import profileImage from "../../../assets/profileImagejpg.jpg";


export default function AboutMe() : React.ReactNode {
  return (
    <section>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-bold p-4">Bartosz Zych</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img
            className="rounded-full w-[300px] p-4"
            src={profileImage}
            alt="Image"
          />
          <p className="w-[450px] md:w-[600px] p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
            elementum purus. Aliquam semper maximus nulla ac aliquam. Quisque
            porta rhoncus est. Nulla in lacus lacinia, consequat purus at,
            ullamcorper nisl. In ac purus erat. Proin malesuada et enim et
            laoreet. Phasellus vel porttitor dolor. Vestibulum a sollicitudin
            purus. Integer convallis orci gravida, suscipit risus sit amet,
            pulvinar ex. Nunc non tellus id libero auctor gravida.
          </p>
        </div>
      </div>
    </section>
  );
}
