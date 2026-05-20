import { useState } from "react";
import "./contact.css";
import RollText from "../animation/Rolltext";
import ScrambleText from "../animation/ScambleText";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name) newErrors.name = true;
    if (!form.email) newErrors.email = true;
    if (!form.project) newErrors.project = true;
    // if (!form.info) newErrors.info = true;
    if (!form.company) newErrors.company = true;
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/form`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

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
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <Mail size={18} strokeWidth={1.8} />,
      label: "Email",
      value: "developera0000@gmail.com",
    },

    {
      icon: <MapPin size={18} strokeWidth={1.8} />,
      label: "Location",
      value: "Nellore, India",
    },
  ];

  return (
    <section className="cta-section" id="contact" data-nav-section="contact">
      {/* <div className="cta-bg-text">
        Let's
        <br />
        build.
      </div> */}

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
                    fontFamily: "var(--font-mono)",
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
                    fontFamily: "var(--font-sans)",
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
                className={errors.name ? "form-field error" : "form-field"}
                type="text"
                name="name"
                placeholder={errors.name ? "*Required field" : "Your name"}
                value={form.name}
                onChange={handleChange}
              />

              <input
                className={errors.email ? "form-field error" : "form-field"}
                type="email"
                name="email"
                placeholder={errors.email ? "*Required field" : "Email address"}
                value={form.email}
                onChange={handleChange}
                style={
                  errors.email ? { borderColor: "rgba(255,255,255,.7)" } : {}
                }
              />
            </div>

            <input
              className={errors.company ? "form-field error" : "form-field"}
              type="text"
              name="company"
              placeholder={errors.company ? "*Required field" : "Company"}
              value={form.company}
              onChange={handleChange}
            />

            <select
              aria-label="Project Type"
              className={errors.project ? "form-field error" : "form-field"}
              name="project"
              value={form.project}
              onChange={handleChange}
              style={
                errors.project ? { borderColor: "rgba(255,255,255,.7)" } : {}
              }
            >
              <option value="" disabled>
                {errors.project ? "*Required field" : "What do you need?"}
              </option>

              <option>Website / Landing Page</option>
              <option>Web Application</option>
              <option>SaaS Platform</option>
              <option>Redesign / Revamp</option>
              <option>Other</option>
            </select>

            <textarea
              className={errors.info ? "form-field error" : "form-field"}
              name="info"
              placeholder={
                errors.info
                  ? "*Required field"
                  : "Tell us about your project — the more detail, the better..."
              }
              value={form.info}
              onChange={handleChange}
              style={errors.info ? { borderColor: "rgba(255,255,255,.7)" } : {}}
            />

            <button
              className="form-submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get My Free Proposal ✦"}
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
                fontFamily: "var(--font-sans)",
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
