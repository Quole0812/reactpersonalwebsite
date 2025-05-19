import Header from "../components/Header";
export default function Contact() {
  return (
    <>
    <Header />
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name"   />
          </label>

          <label>
            Email:
            <input type="email" name="email"  />
          </label>

          <label>
            Message:
            <textarea name="message" rows="5"  ></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}