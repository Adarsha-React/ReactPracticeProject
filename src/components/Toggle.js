import useTheme from "./utils/useTheme";
import useToggle from "./utils/useToggle";

const Toggle = () => {
  const { flag, toggle } = useToggle(true);

  return (
    <div>
      <button
        className="bg-orange-600 px-2 py-1 rounded-md font-bold text-xs"
        onClick={toggle}
      >
        Toggle
      </button>
      {flag && <h1>Show</h1>}
    </div>
  );
};

export default Toggle;
