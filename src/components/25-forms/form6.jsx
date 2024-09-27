import { useFormik } from "formik";
import { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
export const Form6 = () => {
    const [message, setMessage] = useState("");
    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address: "",
    };
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .trim()
            .min(2, "Too shoort!")
            .max(15, "Too long!")
            .required("Required"),
        lastName: Yup.string()
            .min(2, "Too shoort!")
            .max(15, "Too long!")
            .required("Required"),
        phoneNumber: Yup.string().min(8, "Too short!").max(15, "Too long!"),
        email: Yup.string().email("Invalid email").required("Required"),
        address: Yup.string().required("Required"),
    });
    const onSubmit = (values) => {
        setTimeout(() => {
            setMessage("Başvurunuz başarıyla alınmıştır.");
            formik.resetForm();
        }, 3000);
        console.log(values);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    const isInvalid = (field) => {
        return formik.touched[field] && !!formik.errors[field];
    };
    const isValid = (field) => {
        return formik.touched[field] && !formik.errors[field];
    };
    return (
        <Container className="mt-3">
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        name="firstName"
                        type="text"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={isInvalid("firstName")}
                        isValid={isValid("firstName")}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        name="lastName"
                        type="text"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={isInvalid("lastName")}
                        isValid={isValid("lastName")}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phoneNumber"
                        type="text"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={isInvalid("phoneNumber")}
                        isValid={isValid("phoneNumber")}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={isInvalid("email")}
                        isValid={isValid("email")}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address"
                        type="text"
                        as="textarea"
                        rows={3}
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={isInvalid("address")}
                        isValid={isValid("address")}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.address}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={
                        formik.isSubmitting || !(formik.dirty && formik.isValid)
                    }
                >
                    {formik.isSubmitting && <Spinner size="sm"/>}
                    Send
                </Button>
                {message && <Alert variant="success" className="my-3">{message}</Alert>}
            </Form>
        </Container>
    );
};