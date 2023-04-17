import React from 'react'
import { useNavigate } from 'react-router'
import "../Style/path.css"
import Icon from "../Assets/icons/control/chevron_right.js"

const Path = ({ pathFunc }) => {
    const navigate = useNavigate()
    const path = pathFunc()
    return (
        <>
            <div className="path">
                <div className="path_container">
                    {path.map((i, index) => {
                        if (index !== path.length - 1) {
                            return (
                                <p className='path_item' onClick={() => navigate(i.path)}>
                                    <span className='path_item_title'>{i?.title}</span>
                                    <Icon color="#8B96A5"/>
                                </p>
                            )
                        } else {
                            return (
                                <p className='path_item' onClick={() => navigate(i.path)}>
                                    <span className='path_item_title'>{i?.title}</span>
                                </p>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )

}

export default Path