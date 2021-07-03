import Link from "next/link";
import { exp } from "prelude-ls";

const ListItem = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <li className="nav-item text-dark">
        <a>{name}</a>
      </li>
    </Link>
  );
};

export default ListItem;
