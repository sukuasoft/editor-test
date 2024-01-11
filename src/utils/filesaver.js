import FileSaver from "file-saver";

export async function filesaver(code, lang_extension) {
    var blob = new Blob([code], {type: "text/plain;charset=utf-8"});
    await FileSaver.saveAs(blob, `code${lang_extension}`);
}