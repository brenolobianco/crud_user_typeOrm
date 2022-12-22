import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse } from "../interfaces/user.interface";

const returnUserWithoutPassword: SchemaOf<IUserResponse> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  id: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  isActive: yup.bool().notRequired(),
  isAdm: yup.bool().notRequired(),
});
 const createUserSerializer = yup.object().shape({
  name: yup.string().max(120).required(),
  email: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean()
})
const uptadeUserSerializer = yup.object().shape({
  name: yup.string().max(120),
  email: yup.string().required(),

})
export { returnUserWithoutPassword, createUserSerializer,uptadeUserSerializer };
