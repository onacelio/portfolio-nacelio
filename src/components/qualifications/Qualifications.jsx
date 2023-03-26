import { useState } from "react"
import "./Qualifications.css"

export default function Qualifications() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualifiction section">
            <h2 className="section_title">Qualificação</h2>
            <span className="section_subtitle">Minha jornada pessoal</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div 
                        className={toggleState === 1 ? "qualification_button qualification_active button--flex" :  "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "} Educação
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification_button qualification_active button--flex" :  "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i> {" "}Experiência
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={
                        toggleState === 1 ? "qualification_content qualification_content-active" :
                        "qualification_content"
                    }>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Técnico em Informática</h3>
                                <span className="qualification_subtitle">Pereiro - MCPF</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Presente
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Suporte Técnico em informática - Dell</h3>
                                <span className="qualification_subtitle">Pereiro - MCPF</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 03/2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Ensino Fundamental</h3>
                                <span className="qualification_subtitle">Tomé Vieira - Erere</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2 ? "qualification_content qualification_content-active" :
                        "qualification_content"
                    }>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Inventory MCPF</h3>
                                <span className="qualification_subtitle">Pereiro - MCPF</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Monitor do laboratorio</h3>
                                <span className="qualification_subtitle">Pereiro - MCPF</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Presente
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Campeão 1° olimpiada de programação da ERETEC</h3>
                                <span className="qualification_subtitle">Pereiro - MCPF</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}