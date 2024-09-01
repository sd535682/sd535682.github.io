import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

export default function Loading() {
  return (
    <div className="flex dark:bg-darkTheme-backgroundColor justify-center items-center w-lwh h-lvh">
      <Spinner color="grey" size={50} />
    </div>
  );
}
