import { useForm } from "react-hook-form";
import {
  Wrap,
  Form,
  Title,
  Input,
  Separ,
  BottomInfo,
} from "../components/loginStyles";
import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";
import { ButtonUi } from "../components/ButtonUi";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>SIGN UP</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수입니다.",
          })}
          type="text"
          placeholder="login"
        />
        <ErrorMessage text={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "비밀번호는 필수입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상입니다.",
            },
          })}
          type="password"
          placeholder="password"
        />
        <ErrorMessage text={errors?.email?.message} />

        <Input
          {...register("name", {
            required: "이름은 필수입니다.",
          })}
          type="text"
          placeholder="name"
        />
        <ErrorMessage text={errors?.name?.message} />

        <Input {...register("email")} type="text" placeholder="email" />

        {/* <Button $isActive={isValid}>회원가입</Button> */}
        <ButtonUi active={isValid} text={"회원가입"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>

        <BottomInfo>
          아이디가 있으신가요? <Link to={"/signup"}>로그인 &rarr;</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};
