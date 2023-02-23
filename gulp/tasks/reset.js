import pkg from "del";
const { deleteAsync } = pkg;
export const reset = () => {
  return pkg(["dist"]);
};
