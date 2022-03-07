import { HashLink as Link } from "react-router-hash-link";

function Up() {
  return (
    <article className="upArrow">
      <span className="upArrow__span">
        <Link smooth to="#">
          {" "}
          <i class="fa-solid fa-angle-up"></i>{" "}
        </Link>
      </span>
    </article>
  );
}

export default Up;
