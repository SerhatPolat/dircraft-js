export function page(name) {
  return `import {} from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";

function ${name}() {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <></>
    );
}

export default ${name};
  `;
}
