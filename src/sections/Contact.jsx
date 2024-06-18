import Button from "../common/Button";

const Contact = () => {
  return (
    <section className="mt-20 flex flex-col justify-center items-center">
      <h2 className="heading-2">Contact</h2>

      <form className="flex justify-center items-center flex-col gap-10 mt-8 lg:mt-14 md:w-[600px]">
        <input type="text" name="name" id="name" placeholder="Name" className="input" />
        <input type="email" name="email" id="email" placeholder="Email" className="input"/>
        <textarea
          name="msg"
          id="msg"
          placeholder="Message"
          className="resize-none w-64 h-48 input"
        ></textarea>

        <Button 
            label={'Submit'}
        />
      </form>
    </section>
  );
};

export default Contact;
