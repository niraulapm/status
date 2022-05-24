import React from "react";

const MiblElementList = ({ data }) => {


    return (
        <>
            {
                data.map(d => {
                    return (
                        <p>{d.name}</p>
                    )
                })

            }

        </>
    )
}

export default MiblElementList;