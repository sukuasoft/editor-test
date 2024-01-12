"use client";

import { useEffect, useState } from "react";

import DownloadCode from "@/components/DownloadCode";
import Editor from "@/components/Editor";
import LangChoose from "@/components/LangChoose";
import ThemeChoose from "@/components/ThemeChoose";
import Input from "@/components/Input";
import Output from "@/components/Output";

import lang_model from "@/lib/lang-model";
import theme_model from "@/lib/theme-model";

export default function Home() {
    const [language, setLanguage] = useState([{ value: 1, label: "C" }]);
    const [chosenTheme, setChosenTheme] = useState([
        { value: 16, label: "Github" },
    ]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState({
        compile_status: 'OK',
        run_status: {
            output: '',
            status: '',
            status_detail: '',
            time_used: 0,
            memory_used: 0,
        }
    });

    const [code, setCode] = useState<string>(
        lang_model[language[0].label].boilerplate
    );

    const [compiling, setCompiling] = useState(false);

    const [mode, setMode] = useState(lang_model[language[0].label].mode_ace);
    const [theme, setTheme] = useState("monokai");
    const [fontSize, setFontSize] = useState(14);
    const [showPrintMargin, setShowPrintMargin] = useState(false);
    const [showGutter, setShowGutter] = useState(true);
    const [highlightActiveLine, setHighlightActiveLine] = useState(true);
    const [options, setOptions] = useState({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
    });

    useEffect(() => {
        setMode(lang_model[language[0].label].mode_ace);
        setCode(lang_model[language[0].label].boilerplate);
    }, [language]);
    useEffect(() => {
        setTheme(theme_model[chosenTheme[0].label].ace_theme);
    }, [chosenTheme]);

    const onSubmit = async () => {
        setCompiling(true);
        const response: any = await fetch("/api/executecode/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                lang: lang_model[language[0].label].hackerearthapi,
                source: code,
                input: input,
                callback: "",
            }),
        }).then((res) => res.json());
        if (response.result.compile_status == "OK") {
            const resp_part3 = await fetch(response.result.run_status.output).then((res) => res.text());
            response.result.run_status.output = resp_part3;
        }
        setOutput(response.result);
        setCompiling(false);
    };

    return (
        <>

            <div className="md:flex w-full h-full m-auto border-0 border-black justify-center">
                <div className="w-full  lg:max-w-4xl xl:max-w-5xl xl:mx-5 sm:p-2 border-0 border-black bg-[#dedede]">
                    <div className="sm:flex">
                        <div className="sm:w-1/4 md:py-0 md:px-0 px-2 pt-2 pb-1 border-0 border-pink-600">
                            <LangChoose
                                value={language}
                                onChange={(language: any) => setLanguage(language)}
                            />
                        </div>
                        <div className="sm:w-1/4 border-0 md:pl-3 md:py-0 md:px-0 px-2  py-1 border-pink-600">
                            <ThemeChoose
                                value={chosenTheme}
                                onChange={(chosenTheme: any) => setChosenTheme(chosenTheme)}
                            />
                        </div>
                        <div className="flex w-full md:w-1/2 justify-start  md:justify-end">
                            <div className="md:mx-10 mx-2 pt-2 sm:pt-0 flex border-0 border-green-600">
                                <button
                                    type="button"
                                    onClick={onSubmit}
                                    className="bg-green-500  text-sm text-white px-5 mr-2 py-1 h-9 mx-auto rounded-md hover:bg-green-600 transition"
                                    disabled={compiling}
                                >
                                    {compiling ? "Compilando..." : "Compilar"}
                                </button>
                                <div className="py-2">
                                    <DownloadCode
                                        code={code}
                                        lang_extension={lang_model[language[0].label].extension}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Editor
                            mode={mode}
                            theme={theme}
                            onChange={(e: any) => {
                                setCode(e);
                            }}
                            fontSize={fontSize}
                            showPrintMargin={showPrintMargin}
                            showGutter={showGutter}
                            highlightActiveLine={highlightActiveLine}
                            value={code}
                            setOptions={{
                                enableBasicAutocompletion: options.enableBasicAutocompletion,
                                enableLiveAutocompletion: options.enableLiveAutocompletion,
                                enableSnippets: options.enableSnippets,
                                showLineNumbers: options.showLineNumbers,
                                tabSize: options.tabSize,
                            }}
                        />
                    </div>
                </div>

                <div className="border-black md:w-1/2 bg-[#dedede]">
                    <div className="border-0 border-blue-600 px-3 py-2 ">
                        <span className="text-slate-800">Input: </span>
                        <Input
                            value={input}
                            onChange={(e: any) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="border-0 border-blue-600 py-2  px-3 w-full ">
                        <Output result={output} />
                    </div>
                </div>

            </div>

            <div className="pt-5">
                <center className="mt-5 text-slate-700">
                    <span className="text-xs">
                        &copy; 2024 - AROTEC SU &middot; ARO-CODE
                    </span>
                </center>
            </div>
        </>
    );
}
