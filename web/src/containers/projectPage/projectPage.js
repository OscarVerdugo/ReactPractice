import React from "react";

const ProjectPage = (props)=>{
    const id = props.match.params.id;
    console.log(props);
    return (<div><b>{props.match.params.id}</b><b>{props.match.params.param}</b></div>);
}

export default ProjectPage;