import React from "react";

const FileUpload = () => {

    const onChangeFile = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const fileReader = new FileReader();
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = e => {
                const target = e.target;
                const result = target?.result;
                console.log(result);
            }
        }
    }
    return (
        <input type="file" onChange={onChangeFile}
        />
    );
}

export default FileUpload;

