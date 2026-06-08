"use server";

export async function submitForm(formData) {
    const formFields = {
        email: formData.get("email"),
        message: formData.get("message")
    }
    console.log("formFields", formFields);
    console.log(
        "TODO: Send the form field values to a backend"
    )
    return formFields; 
}
