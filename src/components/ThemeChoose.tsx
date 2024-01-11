import Select from "react-dropdown-select";

interface InputProps {
  value: { value: number; label: string }[];
  onChange: any;
}

const ThemeChoose: React.FC<InputProps> = ({ value, onChange }) => {
  const options = [
    { value: 1, label: "Monokai" },
    { value: 2, label: "Ambiance" },
    { value: 3, label: "Chaos" },
    { value: 4, label: "Chrome" },
    { value: 5, label: "Cloud9 Day" },
    { value: 6, label: "Cloud9 Night" },
    { value: 7, label: "Cloud9 Night Low Color" },
    { value: 8, label: "Clouds" },
    { value: 9, label: "Clouds Midnight" },
    { value: 10, label: "Cobalt" },
    { value: 11, label: "Crimson Editor" },
    { value: 12, label: "Dawn" },
    { value: 13, label: "Dracula" },
    { value: 14, label: "Dreamweaver" },
    { value: 15, label: "Eclipse" },
    { value: 16, label: "Github" },
    { value: 17, label: "Github Dark" },
    { value: 18, label: "Gob" },
    { value: 19, label: "Gruvbo" },
    { value: 20, label: "Gruvbox Dark Hard" },
    { value: 21, label: "Gruvbox Light Hard" },
  ];
  return (
    <Select
      style={{
        width: "100%",
        background: "white",
        borderRadius: "0.3em",
        paddingLeft: "1em",
      }}
      values={value}
      options={options}
      onChange={onChange}
    />
  );
};

export default ThemeChoose;
