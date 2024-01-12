interface InputProps {
    value: string;
    onChange: any;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    const rows = 3;
    return (
        <textarea rows={rows} cols={100} value={value} onChange={onChange} className="w-full resize-none rounded-sm text-sm py-0.5">

        </textarea>
    );
};

export default Input;