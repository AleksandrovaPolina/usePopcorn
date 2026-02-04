import { useAppContext } from "../../utils/ContextProvider";
import Details from "../Details/Details";
import Stars from "./Stars";

export default function Rating() {
  const { isRated } = useAppContext();
  return (
    <section>
      <div className="rating">
        <Stars />
        {isRated ? (
          <>
            <button className="btn-add">+ Add to list</button>
            <p>
              You rated with movie 7 <span>⭐️</span>
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      <Details />
    </section>
  );
}
