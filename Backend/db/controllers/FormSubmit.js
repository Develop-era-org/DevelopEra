import Form from "../schemas/formSchema.js";
import zodform from "../../zod/ZodObjects.js";

const FormSubmit = async (req, res, next) => {
  // validate data
  const validateFormData = zodform.safeParse(req.body);

  if (!validateFormData.success) {
    return res.status(400).json({
      error: validateFormData.error.errors,
    });
  }
  try {
    console.log("Saving form...");
    // save to DB
    const savedForm = await Form.create(req.body);

    console.log("Form data saved successfully:", savedForm);

    next();
  } catch (error) {
    console.error("Error saving form data:", error);

    res.status(500).json({
      error: "An error occurred while saving form data",
    });
  }
};

export default FormSubmit;
