import z from "zod";

const zodform = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  project: z.string().min(1, "Project is required"),
  company: z.string().min(1, "Company is required"),
  info: z.string().optional(),
});

export default zodform;
