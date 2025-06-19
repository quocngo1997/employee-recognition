import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@clayui/core";
import Alert from "@clayui/alert";
import Form, { ClayInput } from "@clayui/form";

import { DATA_LOGIN } from "../../MOCK_DATA";

interface IFormLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormLogin>();
  const navigate = useNavigate();
  // set error when entering incorrect email or password or call api fail
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    const { email, password } = data;
    if (email === DATA_LOGIN.email && password === DATA_LOGIN.password) {
      navigate("/home");
    } else {
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div className="block-center">
      <div className="w-50">
        <h1 className="text-center mb-4">Sign in</h1>
        {error && <Alert displayType="danger" title={error} />}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-4">
            <label htmlFor="email">Email</label>
            <ClayInput
              type="email"
              id="email"
              {...register("email")}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <label htmlFor="password">Password</label>
            <ClayInput
              type="password"
              id="password"
              {...register("password")}
              required
            />
          </Form.Group>

          <Button displayType="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
