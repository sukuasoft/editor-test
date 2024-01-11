import React, { useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";

import "ace-builds/src-noconflict/theme-monokai";
import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-cloud9_day';
import 'ace-builds/src-noconflict/theme-cloud9_night';
import 'ace-builds/src-noconflict/theme-cloud9_night_low_color';
import 'ace-builds/src-noconflict/theme-clouds';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-crimson_editor';
import 'ace-builds/src-noconflict/theme-dawn';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-dreamweaver';
import 'ace-builds/src-noconflict/theme-eclipse';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-gob';
import 'ace-builds/src-noconflict/theme-gruvbox';
import 'ace-builds/src-noconflict/theme-gruvbox_dark_hard';
import 'ace-builds/src-noconflict/theme-gruvbox_light_hard';

import "ace-builds/src-noconflict/ext-language_tools";

interface InputProps {
    value: string;
    onChange: any;
    mode: string;
    theme: string;
    fontSize: number;
    showPrintMargin: boolean;
    showGutter: boolean;
    highlightActiveLine: boolean;
    setOptions: {
        enableBasicAutocompletion: boolean;
        enableLiveAutocompletion: boolean;
        enableSnippets: boolean;
        showLineNumbers: boolean;
        tabSize: number;
    }
}

const Editor: React.FC<InputProps> = ({ value, onChange, mode, theme, fontSize, showPrintMargin, showGutter, highlightActiveLine, setOptions }) => {
  return (
    <div className="w-full">
    <AceEditor
      placeholder="Start coding b*tch..."
      mode={mode}
      theme={theme}
      name="blehblehbleh"
      onChange={onChange}
      fontSize={fontSize}
      showPrintMargin={showPrintMargin}
      showGutter={showGutter}
      highlightActiveLine={highlightActiveLine}
      value={value}
      style={{
        width: "100%",
        height: "450px",
      }}
      setOptions={{
        enableBasicAutocompletion: setOptions.enableBasicAutocompletion,
        enableLiveAutocompletion: setOptions.enableLiveAutocompletion,
        enableSnippets: setOptions.enableSnippets,
        showLineNumbers: setOptions.showLineNumbers,
        tabSize: setOptions.tabSize,
      }}
    />
    </div>
  );
};

export default Editor;
