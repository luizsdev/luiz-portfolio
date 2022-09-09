export const ContactMe = () => {
  return (
    <div
      className="container mx-auto flex justify-center items-center"
      id="contact-me"
    >
      <form
        action="https://formsubmit.co/luizsdev@gmail.com"
        method="POST"
        className="form-control mx-auto bg-base-100 p-4 md:p-8 rounded-2xl w-[98%] md:w-auto shadow-xl"
      >
        <h1 className="text-base-content font-bold text-2xl md:text-3xl text-center pb-4">
          Feel free to Contact Me
        </h1>
        <div className="divider my-0 pb-8 pt-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
          <div>
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="Last Name"
              className="input bg-base-200 border-base-300 w-full"
              placeholder="John"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="Last Name"
              className="input bg-base-200 border-base-300 w-full"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input bg-base-200 border-base-300 w-full"
            placeholder="johndoe@example.com"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            className="textarea bg-base-200 border-base-300 w-full resize-none h-44"
            placeholder="Tell me anything"
            name="content"
          ></textarea>
        </div>
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <button className="btn btn-primary mt-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
