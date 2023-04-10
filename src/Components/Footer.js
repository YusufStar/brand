import React, { useState } from 'react'
import tr from "../Assets/Flags/tr.svg"
import us from "../Assets/Flags/us.svg"
import "../Style/footer.css"
import Newsletter from './Newsletter'

const Footer = ({ isnewsletter }) => {
    const lang_items = [
        {
            id: 1,
            name: 'English',
            value: 'English',
            flag: us
        },
        {
            id: 2,
            name: 'Turkish',
            value: 'Turkish',
            flag: tr
        }
    ]
    const columns = [
        {
            id: 1,
            title: 'About',
            items: [
                {
                    id: 1,
                    name: 'About Us',
                    link: '/about'
                },
                {
                    id: 2,
                    name: 'Contact Us',
                    link: '/contact'
                },
                {
                    id: 3,
                    name: 'Privacy',
                    link: '/privacy'
                },
                {
                    id: 4,
                    name: 'Terms',
                    link: '/terms'
                }
            ]
        },
        {
            id: 1,
            title: 'Partnership',
            items: [
                {
                    id: 1,
                    name: 'About Us',
                    link: '/about'
                },
                {
                    id: 2,
                    name: 'Contact Us',
                    link: '/contact'
                },
                {
                    id: 3,
                    name: 'Privacy',
                    link: '/privacy'
                },
                {
                    id: 4,
                    name: 'Terms',
                    link: '/terms'
                }
            ]
        },
        {
            id: 1,
            title: 'Partnership',
            items: [
                {
                    id: 1,
                    name: 'About Us',
                    link: '/about'
                },
                {
                    id: 2,
                    name: 'Contact Us',
                    link: '/contact'
                },
                {
                    id: 3,
                    name: 'Privacy',
                    link: '/privacy'
                },
                {
                    id: 4,
                    name: 'Terms',
                    link: '/terms'
                }
            ]
        },
        {
            id: 1,
            title: 'Partnership',
            items: [
                {
                    id: 1,
                    name: 'About Us',
                    link: '/about'
                },
                {
                    id: 2,
                    name: 'Contact Us',
                    link: '/contact'
                },
                {
                    id: 3,
                    name: 'Privacy',
                    link: '/privacy'
                },
                {
                    id: 4,
                    name: 'Terms',
                    link: '/terms'
                }
            ]
        },
    ]
    const socials = [
        {
            id: 1,
            name: 'Facebook',
            link: 'https://www.facebook.com/',
            icon: require("../Assets/socials/facebook.png")
        },
        {
            id: 2,
            name: 'Twitter',
            link: 'https://www.twitter.com/',
            icon: require("../Assets/socials/twitter.png")
        },
        {
            id: 3,
            name: 'Instagram',
            link: 'https://www.instagram.com/',
            icon: require("../Assets/socials/instagram.png")
        },
        {
            id: 4,
            name: 'Linkedin',
            link: 'https://www.linkedin.com/',
            icon: require("../Assets/socials/linkedIn.png")
        },
        {
            id: 5,
            name: 'Youtube',
            link: 'https://www.youtube.com/',
            icon: require("../Assets/socials/youtube.png")
        },
    ]
    const [selectedLang, setSelectedLang] = useState(lang_items[0])
    const langChange = e => {
        const select_lang = lang_items.find(x => {
            if (e.target.value == x.name) {
                return true
            }
        })
        setSelectedLang(select_lang)
    }
    return (
        <>
            {isnewsletter && <Newsletter />}
            <div className='footer_body'>
                <div className="footer_top main_padding">
                    <div className="footer_brand">
                        <img src={require("../Assets/logo_variants/colored.png")} alt="brand" className='footer_brand_colored' />
                        <p className='footer_brand_parag'>Best information about the company<br /> gies here but now lorem ipsum is</p>
                        <div className="footer_brand_socials">
                            {socials.map((sc) => {
                                return (
                                    <a href={sc.link} key={sc.id}>
                                        <img src={sc.icon} alt={sc.name} className='footer_brand_socials_img' />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="footer_columns">
                        {columns.map((item) => (
                            <div className="footer_column" key={item.id}>
                                <h3 className='footer_column_title'>{item.title}</h3>
                                <ul className='footer_column_list'>
                                    {item.items.map((i) => (
                                        <li className='footer_column_list_item' key={i.id}>
                                            <p onClick={() => console.log(i.name)} className='footer_column_name'>{i.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="footer_column">
                            <h3 className='footer_column_title'>Get App</h3>
                            <ul className='footer_column_img_list'>
                                <li className='footer_column_list_item'>
                                    <img src={require("../Assets/stores/app_store.png")} alt="app_store" className='footer_column_list_item_img' />
                                </li>
                                <li className='footer_column_list_item'>
                                    <img src={require("../Assets/stores/google_play.png")} alt="google_play" className='footer_column_list_item_img' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>@ 2023 Yusuf Star</p>
                    <div className="select_body">
                        <img src={selectedLang.flag} className='lang_flag' />
                        <select onChange={langChange} className='select_lang'>
                            {lang_items.map((item) => (
                                <option className='option_lang' key={item.id} value={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer