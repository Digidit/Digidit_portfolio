import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Send</button>
      </form>
    </div>
  );
};

export default Contact;
