import { download } from "@/assets";
import { filesaver } from "@/utils/filesaver";

interface InputProps {
    code: string;
    lang_extension: string;
}

const DownloadCode : React.FC<InputProps> = ({ code, lang_extension }) => {
    
    return (
        <button type="button" onClick={() => filesaver(code, lang_extension)} className="outline-none bg-transparent border-none">
            <img src={download.src} alt="download" className="w-6 h-6 object-contain" />
          </button>
    );
};

export default DownloadCode;