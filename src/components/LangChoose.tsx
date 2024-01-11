import Select from "react-dropdown-select";

interface InputProps {
	value: { value: number; label: string; }[];
	onChange: any;
}

const LangChoose: React.FC<InputProps> = ({ value, onChange }) => {
	const options = [
		{ value: 1, label: "C" },
		{ value: 2, label: "C++ 14" },
		{ value: 3, label: "C++ 17" },
		{ value: 4, label: "Python 2" },
		{ value: 5, label: "Python 3" },
		{ value: 6, label: "Python 3.8" },
		{ value: 7, label: "Java 8" },
		{ value: 8, label: "Java 14" },
		{ value: 9, label: "Javascript(NodeJS)" }
	];

  return (
    <Select
	style={{
        width: "100%",
		background: 'white',
		borderRadius: '0.3em',
		paddingLeft: '1em',
      }}
	  values={value}
      options={options}
      onChange={onChange}
    />
  );
}
export default LangChoose;
