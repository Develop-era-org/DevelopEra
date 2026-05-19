import { useState } from "react";
import "./contact.css";
import RollText from "../animation/Rolltext";
import ScrambleText from "../animation/ScambleText";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    info: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async () => {
    const newErrors = {};

    if (!form.name) newErrors.name = true;
    if (!form.email) newErrors.email = true;
    if (!form.project) newErrors.project = true;
    if (!form.info) newErrors.info = true;

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        (process.env.BACKEND_URL || "http://localhost:3000") + "/form",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      setSubmitted(true);

      console.log(data);
    } catch (error) {
      console.error(error);

      alert("Server error");
    }
  };

  const contactItems = [
    { icon: "📧", label: "Email", value: "developera@gmail.com" },
    { icon: "📍", label: "Location", value: "Banglore, India" },
  ];

  return (
    <section className="cta-section" id="contact" data-nav-section="contact">
      <div className="cta-bg-text">
        Let's
        <br />
        build.
      </div>

      {/* Left info */}
      <div>
        <h2 className="cta-headline">
          Ready to grow your business <em>online?</em>
        </h2>
        <p className="cta-sub">
          Tell us about your project and we'll send you a clear action plan,
          timeline, and quote within 24 hours.
        </p>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {contactItems.map(({ icon, label, value }) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    color: "#fff",
                    fontSize: "0.9rem",
                  }}
                >
                  <RollText text={value} delay={0.01} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right form */}
      <div className="cta-form">
        <div
          className={`form-container ${submitted ? "submitted" : ""}`}
          id="formContainer"
        >
          <div className="form-title">
            <ScrambleText text="/ Start your project" />
          </div>

          <div className="form-grid">
            <div className="form-row">
              <input
                className="form-field"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                style={
                  errors.name ? { borderColor: "rgba(255,255,255,.7)" } : {}
                }
              />

              <input
                className="form-field"
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                style={
                  errors.email ? { borderColor: "rgba(255,255,255,.7)" } : {}
                }
              />
            </div>

            <input
              className="form-field"
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
            />

            <select
              aria-label="Project Type"
              className="form-field"
              name="project"
              value={form.project}
              onChange={handleChange}
              style={
                errors.project ? { borderColor: "rgba(255,255,255,.7)" } : {}
              }
            >
              <option value="" disabled>
                What do you need?
              </option>

              <option>Website / Landing Page</option>
              <option>Web Application</option>
              <option>SaaS Platform</option>
              <option>Redesign / Revamp</option>
              <option>Other</option>
            </select>

            <textarea
              className="form-field"
              name="info"
              placeholder="Tell us about your project — the more detail, the better..."
              value={form.info}
              onChange={handleChange}
              style={errors.info ? { borderColor: "rgba(255,255,255,.7)" } : {}}
            />

            <button className="form-submit" onClick={handleSubmit}>
              Get My Free Proposal ✦
            </button>
            <p className="form-note">
              <span className="form-note-text">
                <ScrambleText text="No spam, ever. Your data is yours." />{" "}
              </span>
            </p>
          </div>

          {/* Success */}
          <div className="form-success" id="formSuccess">
            <div className="success-icon">✦</div>
            <div className="success-title">You're in.</div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: '"Syne", sans-serif',
                fontSize: "0.9rem",
              }}
            >
              We've received your message and will reach out within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
